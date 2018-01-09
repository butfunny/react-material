import React from "react";
import {Button} from "./components/button/button";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {


        return (
            <div className="main-router">
                <Button
                    disabled
                    onClick={(e) => console.log(e.button)}
                    className="btn-blue"
                >
                    Hello
                </Button>
            </div>
        );
    }
}