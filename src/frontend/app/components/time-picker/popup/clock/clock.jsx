import React from "react";
import {ClockFace} from "./face/clock-face";
import {ClockHand} from "./hand/clock-hand";
export class Clock extends React.Component {

    constructor(props) {
        super(props);
    }

    handleMove(deg) {
        let {type, onChange} = this.props;
        if (type == "minute") {
            onChange(Math.round(60/ (360/deg)) == 60 ? 0 : Math.round(60/ (360/deg)))
        } else {
            onChange(Math.round(12/ (360/deg)) == 0 ? 12 : Math.round(12/ (360/deg)))
        }
    }

    render() {

        let {type, value, onChange} = this.props;


        return (
            <div className="ad-clock">

                <ClockHand
                    ref={elem => this.clockHandElem = elem}
                    onMove={(deg) => this.handleMove(deg)}
                    deg={type == "minute" ? value * 6 : value * 30}
                    type={type}
                />

                <ClockFace
                    type={type}
                    value={value}
                    clockHandElem={() => this.clockHandElem}
                    onChange={(value) => onChange(value)}
                />
            </div>
        );
    }
}