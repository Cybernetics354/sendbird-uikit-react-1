'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-1d24d5aa.js');
var ui_Label = require('../../index-c19c70c5.js');
require('../../stringSet-39290f11.js');
require('../../index-80f7ae1e.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FrozenNotification = function () {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-notification sendbird-notification--frozen"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-notification__text",
    type: ui_Label.LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

module.exports = FrozenNotification;
//# sourceMappingURL=FrozenNotification.js.map
