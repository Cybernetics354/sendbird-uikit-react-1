'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_Icon = require('../../ui/Icon.js');
var OpenChannelSettings_context = require('../context.js');
var OpenChannelSettings_components_OpenChannelProfile = require('./OpenChannelProfile.js');
var ui_Modal = require('../../ui/Modal.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var OpenChannelSettings_components_ParticipantUI = require('./ParticipantUI.js');
var ui_Accordion = require('../../ui/Accordion.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('prop-types');
require('../../UserProfileContext-24790fe2.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../ui/TextButton.js');
require('../../color-35fbd517.js');
require('../../ui/OpenChannelAvatar.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-d427ce45.js');
require('../../utils-0e1ac091.js');
require('./EditDetailsModal.js');
require('../../ui/Input.js');
require('../../index-51cd7ad2.js');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../ui/IconButton.js');
require('../../utils-ae4d63e2.js');
require('../../context-f4dc80ee.js');
require('../../ui/UserListItem.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../topics-9b308b83.js');
require('../../ui/ContextMenu.js');
require('../../index-6292ff33.js');
require('../../ui/SortByRow.js');
require('../../ui/AccordionGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DeleteChannel() {
  var _a, _b;

  var _c = React.useState(false),
      showDeleteChannelModal = _c[0],
      setShowDeleteChannelModal = _c[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var globalState = useSendbirdStateContext();
  var isOnline = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.logger;

  var _d = OpenChannelSettings_context.useOpenChannelSettingsContext(),
      channel = _d.channel,
      onDeleteChannel = _d.onDeleteChannel;

  var deleteChannel = function () {
    channel === null || channel === void 0 ? void 0 : channel.delete().then(function (response) {
      logger.info('OpenChannelSettings: Delete channel success', response);

      if (onDeleteChannel) {
        onDeleteChannel(channel);
      }
    }).catch(function (error) {
      logger.warning('OpenChannelSettings: Delete channel failed', error);
    });
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__panel-item\n          sendbird-openchannel-settings__delete-channel\n            ".concat(!isOnline ? 'sendbird-openchannel-settings__panel-item__disabled' : ''),
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      if (!isOnline) {
        return;
      }

      setShowDeleteChannelModal(true);
    },
    onClick: function () {
      if (!isOnline) {
        return;
      }

      setShowDeleteChannelModal(true);
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.DELETE,
    className: ['sendbird-openchannel-settings__panel-icon-left', 'sendbird-openchannel-settings__panel-icon__delete'].join(' '),
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)), showDeleteChannelModal && /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    onCancel: function () {
      setShowDeleteChannelModal(false);
    },
    onSubmit: function () {
      deleteChannel();
    },
    submitText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_SUBMIT,
    titleText: stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_TITLE
  }));
}

var copyToClipboard = function (text) {
  // @ts-ignore: Unreachable code error
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    // @ts-ignore: Unreachable code error
    return window.clipboardData.setData('Text', text);
  }

  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.

    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand('copy'); // Security exception may be thrown by some browsers.
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }

  return false;
};
var OperatorUI = function (_a) {
  var renderChannelProfile = _a.renderChannelProfile;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _b = OpenChannelSettings_context.useOpenChannelSettingsContext(),
      onCloseClick = _b.onCloseClick,
      channel = _b.channel;

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-settings__close-icon",
    type: ui_Icon.IconTypes.CLOSE,
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__profile"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_OpenChannelProfile, null)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__url"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-settings__copy-icon",
    type: ui_Icon.IconTypes.COPY,
    height: "22px",
    width: "22px",
    onClick: function () {
      copyToClipboard(channel === null || channel === void 0 ? void 0 : channel.url);
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-settings__url-label",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-settings__url-value",
    type: ui_Label.LabelTypography.SUBTITLE_2
  }, channel === null || channel === void 0 ? void 0 : channel.url)), /*#__PURE__*/React__default["default"].createElement(ui_Accordion.AccordionGroup, null, /*#__PURE__*/React__default["default"].createElement(ui_Accordion["default"], {
    className: "sendbird-channel-settings__operators-list",
    id: "participants",
    renderTitle: function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MEMBERS,
        fillColor: ui_Icon.IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-openchannel-settings__operator-accordion-icon"
      }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
        type: ui_Label.LabelTypography.SUBTITLE_1,
        color: ui_Label.LabelColors.ONBACKGROUND_1
      }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE));
    },
    renderContent: function () {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_ParticipantUI, null));
    }
  })), /*#__PURE__*/React__default["default"].createElement(DeleteChannel, null));
};

exports.OperatorUI = OperatorUI;
exports.copyToClipboard = copyToClipboard;
exports["default"] = OperatorUI;
//# sourceMappingURL=OperatorUI.js.map
