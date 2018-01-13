import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import {datePickerUtil} from "../../ultil/date-picker-util";
export class DatePickerListYears extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let listElem = $(ReactDOM.findDOMNode(this));
        let elemSelected = listElem.find(".selected");
        listElem.animate({
            scrollTop: elemSelected.position().top - 150 + 'px'
        }, 0)
    }


    render() {
        const {date, onChange} = this.props;
        const listItems = datePickerUtil.genListYear(date.year);

        return (
            <div className="date-picker-list-years">
                {listItems.map((item, index) => (
                    <div key={index}
                         onMouseDown={() => onChange({...date, year: item})}
                         className={classnames(item == date.year && "selected")}
                    >{item}</div>
                )) }
            </div>
        );
    }
}