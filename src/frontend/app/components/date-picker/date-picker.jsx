import React from "react";
import {DatePickerPopup} from "./popup/date-picker-popup";
export class DatePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DatePickerPopup />
            </div>
        );
    }
}