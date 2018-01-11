import React from "react";
import {ClockFace} from "./face/clock-face";
import {ClockHand} from "./hand/clock-hand";
export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "minute",
            value: 12
        }
    }

    handleMove(deg) {
        let {type} = this.state;
        if (type == "minute") {
            this.setState({value: Math.round(60/ (360/deg)) == 60 ? 0 : Math.round(60/ (360/deg))})
        } else {
            this.setState({value: Math.round(12/ (360/deg)) == 0 ? 12 : Math.round(12/ (360/deg))})
        }
    }

    render() {

        let {type, value} = this.state;


        return (
            <div className="ad-clock">

                <ClockHand
                    ref={elem => this.clockHandElem = elem}
                    onMove={(deg) => this.handleMove(deg)}
                    deg={type == "minute" ? value * 6 : value * 30}
                />

                <ClockFace
                    type={type}
                    value={value}
                    clockHandElem={() => this.clockHandElem}
                    onChange={(value) => this.setState({value})}
                />
            </div>
        );
    }
}