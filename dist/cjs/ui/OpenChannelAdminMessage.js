'use strict';

var tslib_es6 = require('../tslib.es6-ca286580.js');
var React = require('react');
var ui_Label = require('../index-1a5c5200.js');
require('prop-types');
require('../stringSet-6cea29d9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenChannelAdminMessage(_a) {
  var className = _a.className,
      message = _a.message;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-admin-message'], false).join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-admin-message__text",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, message.message || ''));
}

module.exports = OpenChannelAdminMessage;
//# sourceMappingURL=OpenChannelAdminMessage.js.map
