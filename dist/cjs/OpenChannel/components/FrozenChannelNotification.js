'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-4edc1945.js');
var ui_Label = require('../../index-1ac2a868.js');
require('../../stringSet-8a123999.js');
require('../../index-1968df45.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FrozenNotification = function () {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-frozen-channel-notification"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-frozen-channel-notification__text",
    type: ui_Label.LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenChannelNotification.js.map
