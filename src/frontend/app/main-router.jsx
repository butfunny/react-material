import React from "react";
import {modals, ModalsRegistry} from "./components/modal/modals";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
    }

    openModal() {
        let modal = modals.openModal({
            content: (
                <div className="modal-test">
                    <div className="modal-header">
                        <div className="modal-title">
                            Are you sure?
                        </div>
                    </div>

                    <div className="modal-body">
                        Et has debitis vivendo, nam dicant malorum te. Justo moderatius elaboraret cu est, nibh placerat insolens id mea. Suas equidem usu ad, eos ex sint stet alterum. Sit in adhuc propriae contentiones, dicta decore eum an.
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary">
                            Nope
                        </button>

                        <button className="btn btn-primary">
                            Yep
                        </button>
                    </div>
                </div>
            )
        })

    }

    render() {

        setTimeout(() => {
            this.openModal();

        }, 1000);

        return (
            <div className="main-router">
                Xin chào

                <ModalsRegistry />


            </div>
        );
    }
}