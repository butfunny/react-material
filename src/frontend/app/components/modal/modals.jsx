import React from "react";
import {Modal} from "./modal";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export class ModalsRegistry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalList: []
        };

        modals.openModal = (options) => {
            let modalOptions = {
                options,
                resolve: null
            };

            this.state.modalList.push(modalOptions);
            this.forceUpdate();
            let result = new Promise((resolve)=> {
                modalOptions.resolve = resolve;
            });
            return {
                dismiss: ()=> {
                    this.dismiss(modalOptions);
                },
                close: (result) => {
                    this.close(modalOptions, result);
                },
                result: result
            };
        };
    }

    dismiss(modal) {
        _.remove(this.state.modalList, modal);
        modal.resolve();
        this.forceUpdate();
    }

    close(modal, result) {
        _.remove(this.state.modalList, modal);
        modal.resolve(result);
        this.forceUpdate();
    }

    render() {
        const {modalList} = this.state;

        const Fade = ({ children, ...props }) => (
            <CSSTransition
                {...props}
                timeout={300}
                classNames="modal-fade"
            >
                {children}
            </CSSTransition>
        );

        return (
            <TransitionGroup className="modal-list">
                { modalList.map((modal, i)=> (
                    <Fade key={i}>
                        <Modal
                            isStack={modalList.length > 1}
                            className={modal.options.className}
                            content={modal.options.content}
                            onDismiss={() => this.dismiss(modal)}
                        />
                    </Fade>

                )) }
            </TransitionGroup>
        );
    }
}

export const modals = {};