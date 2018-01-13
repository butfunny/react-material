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

        let list = ["Hà Nội", "Hà Giang", "Cao Bằng", "Bắc Kạn", "Tuyên Quang", "Lào Cai", "Điện Biên", "Lai Châu", "Sơn La", "Yên Bái", "Hòa Bình", "Thái Nguyên", "Lạng Sơn", "Quảng Ninh", "Bắc Giang", "Phú Thọ", "Vĩnh Phúc", "Bắc Ninh", "Hải Dương", "Hải Phòng", "Hưng Yên", "Thái Bình", "Hà Nam", "Nam Định", "Ninh Bình", "Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Quảng Trị", "Thừa Thiên–Huế", "Đà Nẵng", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên", "Khánh Hòa", "Ninh Thuận", "Bình Thuận", "Kon Tum", "Gia Lai", "Đắk Lắk", "Đắk Nông", "Lâm Đồng", "Bình Phước", "Tây Ninh", "Bình Dương", "Đồng Nai", "Bà Rịa–Vũng Tàu", "Thành phố Hồ Chí Minh", "Long An", "Tiền Giang", "Bến Tre", "Trà Vinh", "Vĩnh Long", "Đồng Tháp", "An Giang", "Kiên Giang", "Cần Thơ", "Hậu Giang", "Sóc Trăng", "Bạc Liêu", "Cà Mau"];

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
                </div>

                <ModalsRegistry/>

            </div>
        );
    }
}