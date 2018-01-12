import React from "react";
import ReactDOM from "react-dom";
import {Clock} from "./clock/clock";
import {timePickerUtil} from "../util/timpicker-util";
import update from "react-addons-update";
import classnames from "classnames";
import {Button} from "../../button/button";

export class TimePickerPopup extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            value: timePickerUtil.convert(props.time),
            type: "hour"
        }
    }

    changeView(type) {
        let container = $(ReactDOM.findDOMNode(this));
        let $line = container.find(".line");
        let $selected = container.find(".hour-number");
        $line.css({transition: 'transform .3s'});
        $selected.css({transition: 'color .5s'});
        this.setState({type}, () => {
            setTimeout(() => {
                $line.css({transition: ""});
                $selected.css({transition: ""});
            }, 300)
        })
    }

    render() {

        let {value, type} = this.state;
        let {onConfirm, onDismiss, time} = this.props;

        return (
            <div className="time-picker-popup">

                <div className="popup-header">
                    <span className={classnames("item", type == "hour" && "selected")} onClick={() => this.changeView("hour")}>
                        {value.hour}
                    </span>

                    <span className={classnames("item", type == "minute" && "selected")} onClick={() => this.changeView("minute")}>
                       :{timePickerUtil.formatMinute(value.minute)}
                    </span>

                    <div className="noon">
                        <div className={classnames("noon-item", !value.noon && "selected")} onClick={() => this.setState({value: update(value, {noon: {$set: false}})})}>AM</div>
                        <div className={classnames("noon-item", value.noon && "selected")} onClick={() => this.setState({value: update(value, {noon: {$set: true}})})}>PM</div>
                    </div>
                </div>


                <div className="popup-body">
                    <Clock
                        value={value[type]}
                        type={type}
                        onChange={(val) => this.setState({
                            value: update(value, {
                                [type]: {$set : val}
                            })
                        })}
                    />
                </div>

                <div className="popup-footer">
                    <Button
                        onClick={onDismiss}
                        className="outline"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => onConfirm(timePickerUtil.parse(time, value))}
                        className="outline"
                    >
                        OK
                    </Button>
                </div>

            </div>
        );
    }
}