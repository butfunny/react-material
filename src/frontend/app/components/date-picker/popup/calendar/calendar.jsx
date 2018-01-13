import React from "react";
import {datePickerUtil} from "../../ultil/date-picker-util";
import classnames from "classnames";

export class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let {date, onChange} = this.props;

        let weeklyDayTitle = ["S", "M", "T", "W", "T", "F", "S"];
        let calendar = datePickerUtil.genCalendar(date);

        return (
            <div className="calendar">
                <div className="weekly-day-title">
                    { _.map(weeklyDayTitle, (name, index) => (
                        <div className="weekly" key={index}>
                            {name}
                        </div>
                    )) }
                </div>

                <div className="days">
                    { _.map(calendar, (item, index) => (
                        <div key={index}
                             onClick={() => item.day && onChange({...date, day: item.day})}
                             className={classnames("day", datePickerUtil.compareDate(date, {...date, day: item.day}) == 0 && "selected", !item.day && "no-date")}>
                            { item.day && (
                                <div className={classnames("day-value",
                                    datePickerUtil.compareDate({...date, day: item.day}, datePickerUtil.parseDate(new Date())) == 0 && "today"
                                )}
                                >
                                    {item.day}
                                </div>
                            )}

                            { item.day && (
                                <div className="background-behind" />
                            )}

                        </div>
                    )) }
                </div>
            </div>
        );
    }
}