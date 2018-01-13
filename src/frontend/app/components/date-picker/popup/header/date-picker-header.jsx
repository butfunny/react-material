import React from "react";
import moment from "moment";
import {datePickerUtil} from "../../ultil/date-picker-util";
import classnames from "classnames";
import {ComponentSlider} from "../../../component-slider/component-slider";

export class DatePickerHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (datePickerUtil.compareDate(this.props.date, nextProps.date) == 0) return;
        this.setState({selectedIndex: datePickerUtil.compareDate(this.props.date, nextProps.date) < 0 ? this.state.selectedIndex - 1 : this.state.selectedIndex + 1});
    }

    render() {


        let {date, view, onChangeView} = this.props;
        let {selectedIndex} = this.state;

        return (
            <div className="date-picker-header">
                <div
                    onClick={() => onChangeView("year")}
                    className={classnames("year", view == "year" && "selected")}>
                    {date.year}
                </div>

                <div
                    onClick={() => onChangeView("calendar")}
                    className={classnames("date", view == "calendar" && "selected")}>
                    <ComponentSlider
                        selectedIndex={selectedIndex}
                        topBottom
                        getComponent={() => (
                            <div>{moment(datePickerUtil.toDate(date)).format("ddd, MMM DD")}</div>
                        )}
                    />
                </div>
            </div>
        );
    }
}