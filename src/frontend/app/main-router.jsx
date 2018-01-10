import React from "react";
import {Button} from "./components/button/button";
import {Input} from "./components/input/input";
import {Select} from "./components/select/select";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            selectValue: "Wyoming"
        }
    }



    render() {

        let {value, selectValue} = this.state;

        let list = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];

        return (
            <div className="main-router">
                <Button
                    onClick={(e) => console.log(e.button)}
                    className="btn-blue"
                >
                    Hello
                </Button>

                <div style={{width: 300 + 'px', margin: '40px auto'}}>
                    <Input
                        label="Name"
                        placeholder="Please enter your name"
                        value={value}
                        onChange={(e) => this.setState({value: e.target.value})}
                    />

                    <Select
                        value={selectValue}
                        label="Favorite food"
                        list={list}
                        onChange={(selectValue) => this.setState({selectValue})}
                    />
                </div>
            </div>
        );
    }
}