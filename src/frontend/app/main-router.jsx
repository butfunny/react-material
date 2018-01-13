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

        let list =  [
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


                <div style={{width: 300 + 'px', margin: '40px auto'}}>

                    <div style={{marginBottom: '40px'}}>
                        <Button
                            className="btn-blue"
                        >
                            Button
                        </Button>

                    </div>


                    <div style={{marginBottom: '40px'}}>
                        <MenuButton
                            list={list}
                        />
                    </div>

                    <Input
                        label="Name"
                        value={value}
                        onChange={(e) => this.setState({value: e.target.value})}
                    />

                    <Select
                        value={selectValue}
                        label="State"
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

                    <small>Vuốt sang trái, sang phải trên lịch có thể chuyển tháng</small>

                </div>

                <ModalsRegistry/>

            </div>
        );
    }
}