import React from "react";
import {TimePickerPopup} from "./popup/time-picker-popup";
import {Button} from "../button/button";
import {modals} from "../modal/modals";
import {Input} from "../input/input";
import moment from "moment";

export class TimePicker extends React.Component {

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
            <Input
                label="Select Time"
                value={value ? moment(value).format('h:mm a') : ""}
                readOnly
                onClick={() => this.open()}
            />

        );
    }
}