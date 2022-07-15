'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Icon = require('./Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Loader(_ref) {
  let {
    className,
    width,
    height,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-loader'].join(' '),
    style: {
      width: typeof width === 'string' ? width : `${width}px`,
      height: typeof height === 'string' ? height : `${height}px`
    }
  }, children);
}
Loader.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  width: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  height: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  children: PropTypes__default["default"].element
};
Loader.defaultProps = {
  className: '',
  width: '26px',
  height: '26px',
  children: /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SPINNER,
    width: "26px",
    height: "26px"
  })
};

module.exports = Loader;
//# sourceMappingURL=Loader.js.map
