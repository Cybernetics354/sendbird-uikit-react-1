'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_context = require('../context.js');
var UserProfileContext = require('../../UserProfileContext-4574eaff.js');
var LocalizationContext = require('../../LocalizationContext-7124ef76.js');
var ui_Label = require('../../index-9ad5c786.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../index-09e0347e.js');
var OpenChannelSettings_components_OperatorUI = require('./OperatorUI.js');
var OpenChannelSettings_components_ParticipantUI = require('./ParticipantUI.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('prop-types');
require('../../stringSet-ca0cf06e.js');
require('../../index-80df9998.js');
require('../../ui/Loader.js');
require('./OpenChannelProfile.js');
require('../../ui/TextButton.js');
require('../../color-670a89e1.js');
require('../../ui/OpenChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-87d8a6c3.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-cfc8429e.js');
require('../../utils-2d9307d2.js');
require('./EditDetailsModal.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-74e1c32a.js');
require('../../ui/IconButton.js');
require('../../index-c5f391d0.js');
require('../../utils-d6de0e43.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../context-31aa8071.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../topics-55f51c3d.js');
require('../../ui/ContextMenu.js');
require('../../index-f6c81602.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function InvalidChannel(_a) {
  var onCloseClick = _a.onCloseClick;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__placeholder"
  }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes$1.WRONG
  })));
}

var OpenChannelUI = function (_a) {
  var _b, _c, _d;

  var renderOperatorUI = _a.renderOperatorUI,
      renderParticipantList = _a.renderParticipantList;

  var _e = OpenChannelSettings_context.useOpenChannelSettingsContext(),
      channel = _e.channel,
      onCloseClick = _e.onCloseClick;

  var globalStore = useSendbirdStateContext();
  var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
  var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  if (!channel) {
    return /*#__PURE__*/React__default["default"].createElement(InvalidChannel, {
      onCloseClick: function () {
        logger.info('OpenChannelSettings: Click close');

        if (onCloseClick) {
          onCloseClick();
        }
      }
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(UserProfileContext.UserProfileProvider, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings"
  }, (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_OperatorUI.OperatorUI, null)), !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__participant"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), (renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_ParticipantUI, null))));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelSettingsUI.js.map
