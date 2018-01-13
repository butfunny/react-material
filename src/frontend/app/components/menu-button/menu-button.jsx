import React from "react";
import {RippleWrapper} from "../ripple/ripple";
import classnames from "classnames";
import {ClickOutside} from "../click-outside/click-outside";
import {CSSTransition, TransitionGroup} from "react-transition-group";
export class MenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render() {

        let {open} = this.state;
        let {list} = this.props;

        return (
            <ClickOutside onClickOut={() => this.setState({open: false})}>
                <div className="ad-menu-button">
                    <div className="button-action">
                        <RippleWrapper>
                            <div className="button" onClick={() => this.setState({open: true})}>
                                <i className="material-icons">more_vert</i>
                            </div>
                        </RippleWrapper>
                    </div>


                    <TransitionGroup>
                        { open && (
                            <CSSTransition
                                timeout={250}
                                classNames="menu-animation"
                            >
                                <div className="items">
                                    { _.map(list, (item, index) => (
                                        <div className="item" key={index} onClick={() => this.setState({open: false})}>
                                            <RippleWrapper>
                                                <div className="item-value">
                                                    {item}
                                                </div>
                                            </RippleWrapper>
                                        </div>
                                    ))}
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </div>
            </ClickOutside>
        );
    }
}

