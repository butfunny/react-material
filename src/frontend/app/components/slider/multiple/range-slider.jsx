import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import update from "react-addons-update";
import PropTypes from 'prop-types';
import {dragRangeService} from "../../../common/drag-range-service";

export class RangeSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grabbing: false,
            lastGrab: null
        };

        dragRangeService.onDrop(() => {
            this.setState({grabbing: false});
        })

    }

    startDrag(type, responsive) {
        const { min, max, value} = this.props;

        this.setState({grabbing: type});

        let elem = $(ReactDOM.findDOMNode(this));

        let dragFunc = responsive == "desktop" ? dragRangeService.onDrag : dragRangeService.onMobileDrag

        dragFunc(elem.offset().left, elem.width(), (ratio)=> {

            let sliderValue = (max-min) *ratio + min;

            if (type == "from" && sliderValue > value.to) {
                sliderValue = value.to;
            }

            if (type == "to" && sliderValue < value.from) {
                sliderValue = value.from;
            }

            this.props.onChange(update(value, {
                [type]: {$set: sliderValue }
            }));


        });
    }

    pos(type) {
        const {value, min, max} = this.props;
        return (value[type] - min) / (max - min)
    }


    render() {


        let {value, max, min, tooltip} = this.props;

        let {grabbing, lastGrab} = this.state;

        return (
            <div className="range-slider slider">
                <div
                    className={classnames("drag-circle", grabbing == "from" && "grabbing")}
                    style={{
                        left: `calc(${this.pos("from")*100}% - 12px)`,
                        zIndex: `${lastGrab == "from" ? 3 : 2}`
                    }}
                    onMouseDown={(e)=> {e.preventDefault(); this.startDrag("from", "desktop"); this.setState({lastGrab: "from"})} }
                    onTouchStart={(e)=> {e.preventDefault(); this.startDrag("from", "mobile"); this.setState({lastGrab: "from"})} }
                >
                    { tooltip && <div className="tooltip">{value.from.toFixed(2)}</div>}
                </div>

                <div
                    className={classnames("drag-circle", grabbing == "to" && "grabbing")}
                    style={{
                        left: `calc(${this.pos("to")*100}% - 12px)`,
                        zIndex: `${lastGrab == "to" ? 3 : 2}`
                    }}
                    onMouseDown={(e)=> {e.preventDefault(); this.startDrag("to", "desktop"); this.setState({lastGrab: "to"})} }
                    onTouchStart={(e)=> {e.preventDefault(); this.startDrag("to", "mobile"); this.setState({lastGrab: "to"})} }
                >
                    { tooltip && <div className="tooltip">{value.to.toFixed(2)}</div>}
                </div>
                
                <div className="slider-connect"
                    style={{
                        left: `calc(${this.pos("from")*100}% - 12px)`,
                        width: `${(this.pos("to") - this.pos("from"))*100}%`
                    }}
                />

            </div>
        );
    }
}

RangeSlider.propTypes = {
    onChange: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    value: PropTypes.object.isRequired,
    customProp: (props, propName, componentName) => {
        let {max, min, value} = props;
        if (max < min) return new Error(`max need > min at ${componentName}`);
        if (!value.from || !value.to) return new Error(`value need type of {from: Number, to: Number} at ${componentName}`);
        if (!value.from > value.to) return new Error(`from need < to at ${componentName}`);
    }
};