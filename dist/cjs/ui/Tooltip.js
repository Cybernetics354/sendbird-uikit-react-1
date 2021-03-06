'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-2777b3d9.js');
require('../stringSet-c701d85c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Tooltip(_ref) {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-tooltip'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-tooltip__text",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONCONTENT_1
  }, children));
}
Tooltip.propTypes = {
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].string])
};
Tooltip.defaultProps = {
  className: '',
  children: ''
};

module.exports = Tooltip;
//# sourceMappingURL=Tooltip.js.map
