let listeners = [];

const getCurrent = (left, width, clientX) => {
    if (clientX < left) {
        return 0;
    }
    if (clientX > left + width) {
        return 1;
    }
    return (clientX - left) / width;
};


export const dragRangeService = {
    onDrag(left, width, cb) {
        let last = null;
        let listener = (e)=> {
            let clientX = e.clientX;
            let value = getCurrent(left, width, clientX);
            if (last == null || last != value) {
                last = value;
                cb(value);
            }
        };
        let $window = $(window);
        $window.on("mousemove", listener);
        $window.one("mouseup", ()=> {
            listeners.forEach((l) => l());
            $window.off("mousemove", listener);
        });
    },
    onMobileDrag(left, width, cb) {
        let last = null;
        let listener = (e)=> {
            let touch = e.touches[0];
            let clientX = touch.pageX;
            let value = getCurrent(left, width, clientX);
            if (last == null || last != value) {
                last = value;
                cb(value);
            }
        };
        let $window = $(window);
        $window.on("touchmove", listener);
        $window.one("touchend", ()=> {
            listeners.forEach((l) => l());
            $window.off("touchmove", listener);
        });
    },
    onDrop: (e) => {
        listeners.push(e);
    }
};



