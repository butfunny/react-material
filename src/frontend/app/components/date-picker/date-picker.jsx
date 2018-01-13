import React from "react";
import {DatePickerPopup} from "./popup/date-picker-popup";
import moment from "moment/moment";
import {Input} from "../input/input";
import {modals} from "../modal/modals";
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

        let {value} = this.props;

        return (
            <Input
                label="Select Date"
                value={value ? moment(value).format('MM/DD/YYYY') : ""}
                readOnly
                onClick={() => this.open()}
            />
        );
    }
}