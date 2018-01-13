import React from "react";
import classnames from "classnames";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export class ComponentSlider extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            direction: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedIndex !== this.props.selectedIndex) {
            this.setState({direction: nextProps.selectedIndex > this.props.selectedIndex ? "right" : "left"});
        }
    }

    render() {
        const {selectedIndex, getComponent, style} = this.props;
        let {direction} = this.state;

        return (
            <div className="slide-hier-panel" style={style}>

                <TransitionGroup
                    className={classnames("panels-container", direction)}>
                    <CSSTransition
                        timeout={300}
                        classNames="slide"
                        key={selectedIndex}
                    >
                        <div>
                            {getComponent()}
                        </div>
                    </CSSTransition>
                </TransitionGroup>

            </div>
        );
    }
}