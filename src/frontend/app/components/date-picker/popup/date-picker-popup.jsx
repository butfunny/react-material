import React from "react";
import {Calendar} from "./calendar/calendar";
import {datePickerUtil} from "../ultil/date-picker-util";
import {DatePickerHeader} from "./header/date-picker-header";
import {DatePickerListYears} from "./years/date-picker-list-years";
import {ComponentSlider} from "../../component-slider/component-slider";
import {timePickerUtil} from "../../time-picker/util/timpicker-util";
import {Button} from "../../button/button";
export class DatePickerPopup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: datePickerUtil.formatDate(props.value),
            view: "calendar",
            dateView: datePickerUtil.formatDate(props.value)
        }
    }

    render() {
        let {date, view, dateView} = this.state;
        let {onDismiss, onConfirm, value} = this.props;

        let renderView = () => {
            if (view == "calendar") return (
                <Calendar
                    date={date}
                    onChange={(date) => this.setState({date})}
                    onChangeDateView={(dateView) => this.setState({dateView})}
                    dateView={dateView}
                />
            );

            return (
                <DatePickerListYears
                    date={date}
                    onChange={(date) => this.setState({date, dateView: date, view: "calendar"})}
                />
            )
        };

        return (
            <div className="date-picker-popup">
                <DatePickerHeader
                    date={date}
                    view={view}
                    onChangeView={(view) => this.setState({view})}
                />

                <div className="date-picker-body">
                    <ComponentSlider
                        selectedIndex={view == "year" ? 0 : 1}
                        getComponent={renderView}
                    />
                </div>


                <div className="date-picker-footer">
                    <Button
                        onClick={onDismiss}
                        className="outline"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => onConfirm(datePickerUtil.parseDate(value, date))}
                        className="outline"
                    >
                        OK
                    </Button>
                </div>

            </div>
        );
    }
}