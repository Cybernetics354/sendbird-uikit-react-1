'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var ui_PlaceHolder = require('../../index-2b606866.js');
var ui_Label = require('../../index-2dfdb9de.js');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ChannelSettings_components_ChannelProfile = require('./ChannelProfile.js');
var ChannelSettings_components_ModerationPanel = require('./ModerationPanel.js');
var ChannelSettings_components_LeaveChannel = require('./LeaveChannel.js');
var ChannelSettings_components_UserPanel = require('./UserPanel.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../UserProfileContext-24790fe2.js');
require('prop-types');
require('../../uuid-d427ce45.js');
require('../../ui/Loader.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('../../ui/ChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../ui/ImageRenderer.js');
require('../../utils-0e1ac091.js');
require('../../ui/TextButton.js');
require('../../color-35fbd517.js');
require('./EditDetailsModal.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../index-51cd7ad2.js');
require('../../utils-ae4d63e2.js');
require('../../ui/Input.js');
require('../../ui/Accordion.js');
require('../../ui/AccordionGroup.js');
require('../../context-f4dc80ee.js');
require('../../ui/Badge.js');
require('../../ui/ContextMenu.js');
require('../../index-6292ff33.js');
require('../../ui/SortByRow.js');
require('./UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../topics-9b308b83.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../MemberList-1bbd5789.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelSettingsUI = function (props) {
  var _a, _b;

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var state = useSendbirdStateContext();
  var channelSettingStore = ChannelSettings_context.useChannelSettingsContext();

  var _c = React.useState(false),
      showLeaveChannelModal = _c[0],
      setShowLeaveChannelModal = _c[1];

  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var channel = channelSettingStore.channel,
      invalidChannel = channelSettingStore.invalidChannel,
      onCloseClick = channelSettingStore.onCloseClick;
  var renderPlaceholderError = props.renderPlaceholderError,
      renderChannelProfile = props.renderChannelProfile,
      renderModerationPanel = props.renderModerationPanel,
      renderLeaveChannel = props.renderLeaveChannel;

  if (!channel || invalidChannel) {
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-channel-settings__header"
    }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
      type: ui_Label.LabelTypography.H_2,
      color: ui_Label.LabelColors.ONBACKGROUND_1
    }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
      className: "sendbird-channel-settings__close-icon",
      type: ui_Icon.IconTypes.CLOSE,
      height: "24px",
      width: "24px",
      onClick: function () {
        logger.info('ChannelSettings: Click close');
        onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
      }
    })), /*#__PURE__*/React__default["default"].createElement("div", null, renderPlaceholderError ? renderPlaceholderError() : /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    })));
  }

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings__header-icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    width: "32px",
    height: "32px",
    onClick: function () {
      logger.info('ChannelSettings: Click close');
      onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-channel-settings__close-icon",
    type: ui_Icon.IconTypes.CLOSE,
    height: "22px",
    width: "22px"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings__scroll-area"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_ChannelProfile, null), (renderModerationPanel === null || renderModerationPanel === void 0 ? void 0 : renderModerationPanel()) || ((channel === null || channel === void 0 ? void 0 : channel.myRole) === 'operator' ? /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_ModerationPanel, null) : /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_UserPanel, null)), (renderLeaveChannel === null || renderLeaveChannel === void 0 ? void 0 : renderLeaveChannel()) || /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__leave-channel', !isOnline ? 'sendbird-channel-settings__panel-item__disabled' : ''].join(' '),
    role: "button",
    onKeyDown: function () {
      if (!isOnline) {
        return;
      }

      setShowLeaveChannelModal(true);
    },
    onClick: function () {
      if (!isOnline) {
        return;
      }

      setShowLeaveChannelModal(true);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: ['sendbird-channel-settings__panel-icon-left', 'sendbird-channel-settings__panel-icon__leave'].join(' '),
    type: ui_Icon.IconTypes.LEAVE,
    fillColor: ui_Icon.IconColors.ERROR,
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE)), showLeaveChannelModal && /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_LeaveChannel, {
    onCancel: function () {
      setShowLeaveChannelModal(false);
    },
    onSubmit: function () {
      setShowLeaveChannelModal(false);
      onCloseClick === null || onCloseClick === void 0 ? void 0 : onCloseClick();
    }
  })));
};

module.exports = ChannelSettingsUI;
//# sourceMappingURL=ChannelSettingsUI.js.map
