import React from "react";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
    }

    async submit() {
        let ret = await setTimeout(() => {console.log(123213)}, 300);
        console.log("eheh");
    }

    render() {

        this.submit();

        return (
            <div className="main-router">
                Xin chào
            </div>
        );
    }
}