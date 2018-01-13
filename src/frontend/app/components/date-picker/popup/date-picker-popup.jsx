import React from "react";
import {Calendar} from "./calendar/calendar";
import {datePickerUtil} from "../ultil/date-picker-util";
export class DatePickerPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: datePickerUtil.parseDate(new Date())
        }
    }

    render() {
        let {date} = this.state;
        return (
            <div className="date-picker-popup">

                <Calendar
                    date={date}
                    onChange={(date) => this.setState({date})}
                />
            </div>
        );
    }
}