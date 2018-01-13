import React from "react";
import classnames from "classnames";
import {timePickerUtil} from "../../../util/timpicker-util";
export class ClockFace extends React.Component {


    render() {

        let {type, value, clockHandElem, onChange} = this.props;
        let hourNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let minuteNumb = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

        return (
            <div className="ad-clock-face"
            >
                { _.map(type == "hour" ? hourNumb : minuteNumb, (numb, index) => (
                    <div
                        onTouchStart={(e) => {onChange(numb); clockHandElem().handleTouchStart(e)}}
                        onMouseDown={(e) => clockHandElem().handleMouseDown(e)}
                        className={classnames("hour-number", `clock-deg-${30 * (type == "hour" ? index + 1 : index)}`, numb == value && "selected")}
                        onClick={() => onChange(numb)}
                     key={index}
                    >
                        {type == "minute" ? timePickerUtil.formatMinute(numb) : numb}
                    </div>
                ))}
            </div>
        );
    }
}