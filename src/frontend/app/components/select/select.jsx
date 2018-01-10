import React from "react";
import classnames from "classnames";
import {ClickOutside} from "../click-outside/click-outside";
import {SelectItems} from "./select-items";
export class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }

    render() {

        let {open} = this.state;
        let {label, value, list, onChange} = this.props;

        return (

            <ClickOutside onClickOut={() => this.setState({open: false})}>
                <div className="ad-select">
                    <div
                        onClick={() => this.setState({open: true})}
                        className={classnames("select-value", open && "open", value && "has-value")}>
                        <div className="label">
                            {label}
                        </div>

                        <div className="value">
                            {value}
                        </div>

                        <i className="material-icons">
                            arrow_drop_down
                        </i>

                        <span className="bar" />
                    </div>

                    { open && (
                        <SelectItems
                            value={value}
                            list={list}
                            onSelected={(item) => {this.setState({open: false}); onChange(item)}}
                        />
                    )}
                </div>
            </ClickOutside>
        );
    }
}