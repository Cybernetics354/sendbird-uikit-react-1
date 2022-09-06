'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var ui_Label = require('../../index-2dfdb9de.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
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
