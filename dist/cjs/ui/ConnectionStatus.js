'use strict';

var React = require('react');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-c05adf2d.js');
var LocalizationContext = require('../LocalizationContext-92b5f010.js');
require('prop-types');
require('../stringSet-827d08e2.js');
require('../index-5dca71f9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ConnectionStatus() {
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-connection-status"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.TRYING_TO_CONNECT), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.DISCONNECTED,
    fillColor: ui_Icon.IconColors.SENT,
    width: "14px",
    height: "14px"
  }));
}

module.exports = ConnectionStatus;
//# sourceMappingURL=ConnectionStatus.js.map