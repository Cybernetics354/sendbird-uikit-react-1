'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-9235a70d.js');
var LocalizationContext = require('../LocalizationContext-c4e6256c.js');
require('../stringSet-6c45946e.js');
require('../index-5a900a14.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Badge(_ref) {
  let {
    count,
    maxLevel,
    className
  } = _ref;
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  const maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-badge'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-badge__text"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONCONTENT_1
  }, count > maximumNumber ? `${maximumNumber}${stringSet.BADGE__OVER}` : count)));
}
Badge.propTypes = {
  count: PropTypes__default["default"].number.isRequired,
  maxLevel: PropTypes__default["default"].number,
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
};
Badge.defaultProps = {
  maxLevel: 2,
  className: []
};

module.exports = Badge;
//# sourceMappingURL=Badge.js.map
