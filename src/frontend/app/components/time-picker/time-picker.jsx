import React from "react";
import {TimePickerPopup} from "./popup/time-picker-popup";
import {Button} from "../button/button";
import {modals} from "../modal/modals";
import {Input} from "../input/input";
import moment from "moment";
import classnames from "classnames";

export class TimePicker extends React.Component {

    open() {
        let {onChange, value} = this.props;


        let handleConfirm = (date) => {
            onChange(date);
            modal.close();
        };

        const modal = modals.openModal({
            content: (
                <TimePickerPopup
                    time={value ? value : new Date()}
                    onConfirm={(date) => handleConfirm(date)}
                    onDismiss={() => modal.close()}
                />
            ),
            className: "time-picker"
        })
    }

    render() {

        let {value} = this.props;

        return (

            <div className={classnames("time-picker-input")}
                 onClick={() => this.open()}
            >
                <label className={classnames(value && "has-value")}>Select Time</label>
                <div className="value"> {value ? moment(value).format('h:mm a') : ""}</div>
            </div>
        );
    }
}