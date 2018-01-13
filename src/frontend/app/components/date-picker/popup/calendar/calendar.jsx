import React from "react";
import {datePickerUtil} from "../../ultil/date-picker-util";
import classnames from "classnames";
import moment from "moment";
import {Button} from "../../../button/button";
import {ComponentSlider} from "../../../component-slider/component-slider";
import {SwipeHorizontally} from "../../../swipe-horizontally/swipe-horizontally";


export class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            calendarDate: props.date
        }
    }

    goPreviousMonth() {
        let {calendarDate} = this.state;
        let newDate = datePickerUtil.subtractMonth(calendarDate);
        this.setState({selectedIndex: this.state.selectedIndex - 1, calendarDate: newDate});
    }

    goNextMonth() {
        let {calendarDate} = this.state;
        let newDate = datePickerUtil.plusMonth(calendarDate);
        this.setState({selectedIndex: this.state.selectedIndex + 1, calendarDate: newDate});
    }



    render() {

        let {date, onChange} = this.props;
        let {selectedIndex, calendarDate} = this.state;

        let weeklyDayTitle = ["S", "M", "T", "W", "T", "F", "S"];
        let calendar = datePickerUtil.genCalendar(calendarDate);
        return (
            <div className="calendar">
                <div className="month-view">
                    <Button
                        className="outline button left"
                        onClick={() => this.goPreviousMonth()}
                    >
                        <i className="material-icons">keyboard_arrow_left</i>
                    </Button>

                    <div className="month-value">
                        <ComponentSlider
                            selectedIndex={selectedIndex}
                            getComponent={() => (
                                <div>
                                    {moment(datePickerUtil.toDate(calendarDate)).format("MMMM YYYY")}
                                </div>
                            )}
                        />
                    </div>

                    <Button
                        onClick={() => this.goNextMonth()}
                        className="outline button right"
                    >
                        <i className="material-icons">keyboard_arrow_right</i>
                    </Button>
                </div>

                <div className="weekly-day-title">
                    { _.map(weeklyDayTitle, (name, index) => (
                        <div className="weekly" key={index}>
                            {name}
                        </div>
                    )) }
                </div>

                <ComponentSlider
                    selectedIndex={selectedIndex}
                    getComponent={() => (
                        <SwipeHorizontally
                            onNext={() => this.goNextMonth()}
                            onGoPrevious={() => this.goPreviousMonth()}
                        >
                            <div className="days"
                            >
                                { _.map(calendar, (item, index) => (
                                    <div key={index}
                                         onClick={() => item.day && onChange({...calendarDate, day: item.day})}
                                         className={classnames("day", datePickerUtil.compareDate(date, {...calendarDate, day: item.day}) == 0 && "selected", !item.day && "no-date")}>
                                        { item.day && (
                                            <div className={classnames("day-value",
                                                datePickerUtil.compareDate({...calendarDate, day: item.day}, datePickerUtil.parseDate(new Date())) == 0 && "today"
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
                        </SwipeHorizontally>
                    )}
                />


            </div>
        );
    }
}