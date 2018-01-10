import React from "react";
import ReactDOM from "react-dom";
import {RComponent} from "../r-component/r-component";
export class ClickOutside extends RComponent {

    constructor(props) {
        super(props);

        this.onUnmount(() => {
            if(this.cancelClickOutside) {
                this.cancelClickOutside();
                this.cancelClickOutside = null;
            }
        })
    }

    cancelClickOutside = null;

    componentDidMount() {
        this.cancelClickOutside = this.clickOutside();
    }

    clickOutside = () => {
        let clickFunc = (e) => {
            let elem = ReactDOM.findDOMNode(this);
            if(!elem || !elem.contains(e.target)) {
                this.props.onClickOut();
            }
        };
        window.addEventListener('click', clickFunc);
        window.addEventListener("touchstart", clickFunc);

        return () => {
            window.removeEventListener('click', clickFunc);
            window.removeEventListener("touchstart", clickFunc);
        };
    };

    render() {
        return React.Children.only(this.props.children);
    }
}