import React from "react";
import {DatePickerPopup} from "./popup/date-picker-popup";
import moment from "moment/moment";
import {modals} from "../modal/modals";
import classnames from "classnames";
export class DatePicker extends React.Component {

    constructor(props) {
        super(props);
    }


    open() {
        let {onChange, value} = this.props;

        let handleConfirm = (date) => {
            onChange(date);
            modal.close();
        };

        const modal = modals.openModal({
            content: (
                <DatePickerPopup
                    value={value ? value : new Date()}
                    onConfirm={(date) => handleConfirm(date)}
                    onDismiss={() => modal.close()}
                />
            ),
            className: "date-picker"
        })
    }

    render() {

        let {value, label} = this.props;

        return (
            <div className={classnames("date-picker-input")}
                onClick={() => this.open()}
            >
                <label className={classnames(value && "has-value")}>Select Date</label>
                <div className="value"> {value ? moment(value).format("MM/DD/YYYY"): ""}</div>
            </div>
        );
    }
}