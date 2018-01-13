import React from "react";
import {Calendar} from "./calendar/calendar";
import {datePickerUtil} from "../ultil/date-picker-util";
import {DatePickerHeader} from "./header/date-picker-header";
export class DatePickerPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: datePickerUtil.parseDate(new Date()),
            view: "calendar"
        }
    }

    render() {
        let {date, view} = this.state;
        return (
            <div className="date-picker-popup">

                <DatePickerHeader
                    date={date}
                    view={view}
                    onChangeView={(view) => this.setState({view})}
                />

                <Calendar
                    date={date}
                    onChange={(date) => this.setState({date})}
                />
            </div>
        );
    }
}