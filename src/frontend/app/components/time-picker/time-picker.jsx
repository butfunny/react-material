import React from "react";
import {Clock} from "./clock/clock";
export class TimePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Clock />
            </div>
        );
    }
}