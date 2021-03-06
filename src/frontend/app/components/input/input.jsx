import React from "react";
import classnames from "classnames";

export class Input extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {label, className, value, readOnly} = this.props;
        return (
            <div className={classnames("ad-input", className)}>
                <input
                    {...this.props}
                />
                <label className={(value && value.length > 0) && "has-value"}>{label}</label>
            </div>
        );
    }
}