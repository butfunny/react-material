import React from "react";
export class SwipeHorizontally extends React.Component {

    constructor(props) {
        super(props);
    }

    handleMouseDown(e) {
        e.preventDefault();
        let {onNext, onGoPrevious} = this.props;

        let cursorPointX = e.clientX;
        let clientX = e.clientX;

        let listener = (e)=> {
            clientX = e.clientX;
        };
        let $window = $(window);
        $window.on("mousemove", listener);
        $window.one("mouseup", ()=> {
            if (cursorPointX - clientX > 50) {
                onNext();
            }
            if (clientX - cursorPointX > 50) {
                onGoPrevious();
            }
            $window.off("mousemove", listener);
        });
    }

    handleTouchStart(e) {

        let {onNext, onGoPrevious} = this.props;

        let cursorPointX = e.touches[0].pageX;
        let clientX = e.touches[0].pageX;

        let listener = (e)=> {
            clientX = e.touches[0].pageX;
        };
        let $window = $(window);
        $window.on("touchmove", listener);
        $window.one("touchend", ()=> {

            if (cursorPointX - clientX > 50) {
                onNext();
            }
            if (clientX - cursorPointX > 50) {
                onGoPrevious();
            }
            $window.off("touchmove", listener);
        });
    }

    render() {

        let {children} = this.props;

        return (
            <div onMouseDown={(e) => this.handleMouseDown(e)}
                onTouchStart={(e) => this.handleTouchStart(e)}
            >
                {children}
            </div>
        );
    }
}