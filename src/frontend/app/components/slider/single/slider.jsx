import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import {dragRangeService} from "../../../common/drag-range-service";
export class Slider extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            grabbing: false
        };

        dragRangeService.onDrop(() => {
            this.setState({grabbing: false});
        })
    }

    startDrag(type) {
        const { min, max} = this.props;
        this.setState({grabbing: true});
        let elem = $(ReactDOM.findDOMNode(this));

        let dragFunc = type == "mobile" ? dragRangeService.onMobileDrag : dragRangeService.onDrag;

        dragFunc(elem.offset().left, elem.width(), (ratio)=> {
            this.props.onChange((max-min) *ratio + min);
        });
    }


    pos() {
        const {value, min, max} = this.props;

        return (value - min) /(max - min);
    }

    render() {

        let {grabbing} = this.state;
        let {tooltip, value} = this.props;

        return (
            <div className="slider" style={ {...this.props.style} }>
                <div
                    className={classnames("drag-circle", grabbing && "grabbing")}
                    style={{
                        left: `calc(${this.pos()*100}% - 12px)`
                    }}
                    onMouseDown={(e)=> {e.preventDefault(); this.startDrag("desktop")} }
                    onTouchStart={(e) => {e.preventDefault(); this.startDrag("mobile")}}
                >
                    { tooltip && <div className="tooltip">{value.toFixed(2)}</div> }
                </div>
            </div>
        );
    }
}


