import React from "react";
import classnames from "classnames";

export class Modal extends React.Component {
    overlayElem = null;

    constructor(props) {
        super(props);

        this.state = {};

        document.body.style.overflowY = "hidden";
    };

    componentWillUnmount() {
        setTimeout(()=> {
            document.body.style.overflowY = null;
        }, 300);
    }


    render() {
        const {className, onDismiss, content} = this.props;

        return (
            <div className={className}>
                <div className="modal">
                    <div
                        className="modal-overlay"
                        onMouseDown={(e) => e.target == this.overlayElem && onDismiss()}
                        ref={(elem) => this.overlayElem = elem}
                    >
                        <div className="modal-box">
                            <div className="btn-close"
                                 onClick={() => onDismiss()}
                            >
                                <div className="close-x">
                                    &times;
                                </div>
                            </div>

                            { content }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}