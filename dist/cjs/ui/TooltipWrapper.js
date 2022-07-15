'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const SPACE_FROM_TRIGGER = 8;
function TooltipWrapper(_ref) {
  let {
    className,
    children,
    hoverTooltip // clickTooltip can be added later

  } = _ref;
  const [showHoverTooltip, setShowHoverTooltip] = React.useState(false);
  const childrenRef = React.useRef(null);
  return /*#__PURE__*/React__default["default"].createElement("div", {
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
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-tooltip-wrapper__children",
    ref: childrenRef
  }, children), showHoverTooltip && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip",
    style: {
      bottom: `calc(100% + ${SPACE_FROM_TRIGGER}px)`
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip__inner"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-tooltip-wrapper__hover-tooltip__inner__tooltip-container",
    style: {
      left: childrenRef.current && `calc(${childrenRef.current.offsetWidth / 2}px - 50%)`
    }
  }, hoverTooltip))));
}
TooltipWrapper.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].element.isRequired,
  hoverTooltip: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]).isRequired
};
TooltipWrapper.defaultProps = {
  className: ''
};

module.exports = TooltipWrapper;
//# sourceMappingURL=TooltipWrapper.js.map
