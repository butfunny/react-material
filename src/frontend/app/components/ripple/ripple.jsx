import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

export class RippleWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    mouseDown(e) {
        let ripple, size, rippleX, rippleY, eWidth, eHeight;
        let self = $(ReactDOM.findDOMNode(this));

        if(self.find('.ripple').length === 0) {
            self.prepend('<span class="ripple"></span>');
        }
        ripple = self.find('.ripple');
        ripple.removeClass('animated');

        eWidth = self.outerWidth();
        eHeight = self.outerHeight();
        size = Math.max(eWidth, eHeight);
        ripple.css({'width': size, 'height': size});

        rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
        rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);

        ripple.css({ 'top': rippleY +'px', 'left': rippleX +'px' }).addClass('animated');

        setTimeout(function() {
            ripple.remove();
        }, 800);
    }

    render() {
        let {children, className} = this.props;
        return (
            <div className={classnames("ripple-wrapper", className)} onMouseDown={(e) => this.mouseDown(e)}>
                {children}
            </div>
        );
    }
}