import React__default, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const SPACE_FROM_TRIGGER = 8;
function TooltipWrapper(_ref) {
  let {
    className,
    children,
    hoverTooltip // clickTooltip can be added later

  } = _ref;
  const [showHoverTooltip, setShowHoverTooltip] = useState(false);
  const childrenRef = useRef(null);
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-tooltip-wrapper'].join(' '),
    onMouseOver: () => {
      setShowHoverTooltip(true);
    },
    onFocus: () => {
      setShowHoverTooltip(true);
    },
    onMouseOut: () => {
      setShowHoverTooltip(false);
    },
    onBlur: () => {
      setShowHoverTooltip(false);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-tooltip-wrapper__children",
    ref: childrenRef
  }, children), showHoverTooltip && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip",
    style: {
      bottom: `calc(100% + ${SPACE_FROM_TRIGGER}px)`
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip__inner"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip__inner__tooltip-container",
    style: {
      left: childrenRef.current && `calc(${childrenRef.current.offsetWidth / 2}px - 50%)`
    }
  }, hoverTooltip))));
}
TooltipWrapper.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.element.isRequired,
  hoverTooltip: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
TooltipWrapper.defaultProps = {
  className: ''
};

export { TooltipWrapper as default };
//# sourceMappingURL=TooltipWrapper.js.map
