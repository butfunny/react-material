import React from "react";
import {Button} from "./components/button/button";
import {Input} from "./components/input/input";
import {Select} from "./components/select/select";
import {MenuButton} from "./components/menu-button/menu-button";
import {TimePicker} from "./components/time-picker/time-picker";
import {ModalsRegistry} from "./components/modal/modals";
import {DatePicker} from "./components/date-picker/date-picker";
export class MainRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            selectValue: null,
            time: null,
            date: null
        }
    }



    render() {

        let {value, selectValue, time} = this.state;

        let list = [
            'Alabama', 'Alaska'
        ];

        return (
            <div className="main-router">
                <Button
                    onClick={(e) => console.log(e.button)}
                    className="btn-blue"
                >
                    Hello
                </Button>

                <div style={{marginTop: '40px'}}>
                    <MenuButton
                        list={list}
                    />
                </div>

                <div style={{width: 300 + 'px', margin: '40px auto'}}>
                    <Input
                        label="Name"
                        value={value}
                        onChange={(e) => this.setState({value: e.target.value})}
                    />

                    <Select
                        value={selectValue}
                        label="Favorite food"
                        list={list}
                        onChange={(selectValue) => this.setState({selectValue})}
                    />



                    <TimePicker
                        value={time}
                        onChange={(time) => this.setState({time})}
                    />


                    <DatePicker
                        value={time}
                        onChange={(time) => this.setState({time})}
                    />
                </div>

                <ModalsRegistry/>

            </div>
        );
    }
}