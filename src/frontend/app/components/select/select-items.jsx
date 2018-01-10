import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import {CSSTransition} from "react-transition-group";

export class SelectItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            top: 0
        }
    }

    componentDidMount() {
        if (this.props.value) {
            this.scrollTo();
            this.setState({top: -(this.calculatorPosition() + 2) + 'px'})
        }
    }

    calculatorPosition() {
        let listElem = $(ReactDOM.findDOMNode(this));
        let ret = 0;


        listElem.find(".item").each((index, e) => {
            let elem = $(e);
            if ( elem.position().top + elem.height() > 0 && elem.position().top < listElem.height()) {
                if (elem.hasClass("item-selected")) {
                    return false;
                }
                ret += 48;
            }
        });

        return listElem.offset().top < ret ? 0 : ret
    }

    scrollTo() {
        let listElem = $(ReactDOM.findDOMNode(this));
        let elemSelected = listElem.find(".item-selected");
        listElem.scrollTop(elemSelected.position().top - 96);
    }

    render() {

        let {list, value, onSelected} = this.props;
        let {top} = this.state;


        return (
            <div className="select-items"
                 style={{top}}>
                { _.map(list, (item, index) => (
                    <div className={classnames("item" , value === item && "item-selected")}
                         onClick={() => onSelected(item)}
                         key={index}>
                        {item}
                    </div>
                ))}
            </div>

        );
    }
}



