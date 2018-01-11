import React from "react";
import ReactDOM from "react-dom";
import {Clock} from "./clock/clock";
import {timePickerUtil} from "../util/timpicker-util";
import update from "react-addons-update";
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
        container.find(".line").css({transition: 'transform .3s'});
        container.find(".hour-number").css({transition: 'color .5s'});
        this.setState({type}, () => {
            setTimeout(() => {
                container.find(".line").css({transition: ""});
                container.find(".hour-number").css({transition: ""});
            }, 300)
        })
    }

    render() {

        let {value, type} = this.state;

        return (
            <div className="time-picker-popup">

                <button onClick={() => this.changeView("hour")}>
                    {value.hour}
                </button>

                <button onClick={() => this.changeView("minute")}>
                    {value.minute}
                </button>

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
        );
    }
}