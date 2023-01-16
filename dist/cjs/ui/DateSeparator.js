'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var color = require('../color-f63289fc.js');
var ui_Label = require('../index-c05adf2d.js');
require('../stringSet-827d08e2.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function DateSeparator(_ref) {
  let {
    className,
    children,
    separatorColor
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-separator'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__left', `${color.changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-separator__text"
  }, children), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-separator__right', `${color.changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].element]),
  separatorColor: PropTypes__default["default"].oneOf(['ONBACKGROUND_1', 'ONBACKGROUND_2', 'ONBACKGROUND_3', 'ONBACKGROUND_4', 'ONCONTENT_1', 'PRIMARY', 'ERROR'])
};
DateSeparator.defaultProps = {
  className: '',
  children: /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: color.Colors.ONBACKGROUND_4
};

module.exports = DateSeparator;
//# sourceMappingURL=DateSeparator.js.map
