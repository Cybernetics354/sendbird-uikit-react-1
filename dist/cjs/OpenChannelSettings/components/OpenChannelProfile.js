'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-4edc1945.js');
var ui_Label = require('../../index-1ac2a868.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_components_EditDetailsModal = require('./EditDetailsModal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
require('../../stringSet-8a123999.js');
require('../../index-1968df45.js');
require('prop-types');
require('../../color-334c9fb8.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-c3158c01.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../uuid-11d3ef5e.js');
require('../../utils-48aa919f.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-6e41140f.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-652929ec.js');
require('../../index-a189c9f3.js');
require('../../utils-f60a9a5a.js');
require('../../ui/Input.js');
require('../../withSendbird.js');
require('../../UserProfileContext-80f2ddb9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ChannelProfile() {
  var _a, _b;

  var globalState = useSendbirdStateContext();
  var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
  var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
  var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
  var title = channel === null || channel === void 0 ? void 0 : channel.name;

  var _c = React.useState(false),
      showModal = _c[0],
      setShowModal = _c[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-profile"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-profile--inner"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-profile__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_OpenChannelAvatar, {
    channel: channel,
    theme: theme,
    height: 80,
    width: 80
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1,
    className: "sendbird-openchannel-profile__title"
  }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE), /*#__PURE__*/React__default["default"].createElement(ui_TextButton, {
    disabled: disabled,
    className: "sendbird-openchannel-profile__edit",
    onClick: function () {
      if (disabled) {
        return;
      }

      setShowModal(true);
    },
    notUnderline: true
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BUTTON_1,
    color: disabled ? ui_Label.LabelColors.ONBACKGROUND_2 : ui_Label.LabelColors.PRIMARY
  }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)), showModal && /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_EditDetailsModal, {
    onCancel: function () {
      return setShowModal(false);
    }
  })));
}

module.exports = ChannelProfile;
//# sourceMappingURL=OpenChannelProfile.js.map
