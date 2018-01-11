import React from "react";
import ReactDOM from "react-dom";
export class ClockHand extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deg: 0
        }
    }

    handleMouseDown(e) {
        e.preventDefault();

        let container = $(ReactDOM.findDOMNode(this));
        let centerPoint = container.find(".center-point")[0].getBoundingClientRect();
        let listener = (event)=> {
            $("body").css("cursor", "-webkit-grabbing");
            let x = event.clientX - centerPoint.x;
            let y = -(event.clientY - centerPoint.y);
            let deg = Math.atan2(x, y) * 180 / Math.PI;
            this.props.onMove(deg > 0 ? deg : deg + 360);

        };

        let $window = $(window);

        $window.on("mousemove", listener);
        $window.one("mouseup", ()=> {
            $("body").css("cursor", "");
            $window.off("mousemove", listener);
        });
    }

    handleTouchStart(e) {
        e.preventDefault();

        let container = $(ReactDOM.findDOMNode(this));
        let centerPoint = container.find(".center-point")[0].getBoundingClientRect();
        let listener = (event)=> {
            let touch = event.touches[0];
            let x = touch.pageX - centerPoint.x;
            let y = -(touch.pageY - centerPoint.y);
            let deg = Math.atan2(x, y) * 180 / Math.PI;
            this.props.onMove(deg > 0 ? deg : deg + 360);
        };

        let $window = $(window);

        $window.on("touchmove", listener);
        $window.one("touchend", ()=> {
            $window.off("touchmove", listener);
        });
    }

    render() {

        let {deg} = this.props;

        return (
            <div className="clock-hand">
                <div className="center-point"/>
                <div className="line"
                     style={{
                         transform: `translate(-50%, -50%) rotate(${deg}deg)`
                     }}
                     onMouseDown={(e) => this.handleMouseDown(e)}
                     onTouchStart={(e) => this.handleTouchStart(e)}
                >
                    <div className="targeted-point" />
                </div>

            </div>
        );
    }
}