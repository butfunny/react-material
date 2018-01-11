import React from "react";
import {TimePickerPopup} from "./popup/time-picker-popup";
export class TimePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {onChange, value} = this.props;

        return (
            <div>
                <TimePickerPopup
                    time={value}
                    onChange={onChange}
                />
            </div>
        );
    }
}