import React from "react";
import {Button} from "./components/button/button";
import {Input} from "./components/input/input";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "1123"
        }
    }



    render() {

        let {value} = this.state;

        return (
            <div className="main-router">
                <Button
                    onClick={(e) => console.log(e.button)}
                    className="btn-blue"
                >
                    Hello
                </Button>

                <div style={{width: 300 + 'px', marginTop: '40px'}}>
                    <Input
                        label="Name"
                        placeholder="Please enter your name"
                        value={value}
                        onChange={(e) => this.setState({value: e.target.value})}
                    />
                </div>
            </div>
        );
    }
}