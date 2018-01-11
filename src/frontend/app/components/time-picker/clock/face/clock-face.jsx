import React from "react";
import classnames from "classnames";
export class ClockFace extends React.Component {


    render() {

        let {type} = this.props;

        let hourNumb = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let minuteNumb = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

        return (
            <div className="ad-clock-face">
                { _.map(type == "hour" ? hourNumb : minuteNumb, (numb, index) => (
                    <div className={classnames("hour-number", `clock-deg-${30 * index}`)}
                     key={index}
                    >
                        {numb}
                    </div>
                ))}
            </div>
        );
    }
}