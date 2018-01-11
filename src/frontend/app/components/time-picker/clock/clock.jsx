import React from "react";
import {ClockFace} from "./face/clock-face";
import {ClockHand} from "./hand/clock-hand";
export class Clock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ad-clock">

                <ClockFace
                    type="minute"
                />

                <ClockHand

                />
            </div>
        );
    }
}