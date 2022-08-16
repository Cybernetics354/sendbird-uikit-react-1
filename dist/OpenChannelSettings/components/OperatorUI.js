import React__default, { useState, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-12a49911.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-b990bb50.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { useOpenChannelSettingsContext } from '../context.js';
import ChannelProfile from './OpenChannelProfile.js';
import Modal from '../../ui/Modal.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import ParticipantsList from './ParticipantUI.js';
import Accordion, { AccordionGroup } from '../../ui/Accordion.js';
import '../../stringSet-1980c44a.js';
import '../../index-f2df602e.js';
import 'prop-types';
import '../../UserProfileContext-82d9c025.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import '../../ui/TextButton.js';
import '../../color-5ff88e0d.js';
import '../../ui/OpenChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-7262cbaf.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-5ca3889a.js';
import '../../utils-48844a97.js';
import './EditDetailsModal.js';
import '../../ui/Input.js';
import '../../index-6b3586e6.js';
import 'react-dom';
import '../../index-4a28b1a1.js';
import '../../ui/IconButton.js';
import '../../utils-67d0347a.js';
import '../../context-7440ccc3.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../topics-de8d1abb.js';
import '../../ui/ContextMenu.js';
import '../../index-5075c241.js';
import '../../ui/SortByRow.js';
import '../../ui/AccordionGroup.js';

function DeleteChannel() {
  var _a, _b;

  var _c = useState(false),
      showDeleteChannelModal = _c[0],
      setShowDeleteChannelModal = _c[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var globalState = useSendbirdStateContext();
  var isOnline = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var logger = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.logger;

  var _d = useOpenChannelSettingsContext(),
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

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
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
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DELETE,
    className: ['sendbird-openchannel-settings__panel-icon-left', 'sendbird-openchannel-settings__panel-icon__delete'].join(' '),
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__DELETE_CHANNEL_PANEL)), showDeleteChannelModal && /*#__PURE__*/React__default.createElement(Modal, {
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
  var stringSet = useContext(LocalizationContext).stringSet;

  var _b = useOpenChannelSettingsContext(),
      onCloseClick = _b.onCloseClick,
      channel = _b.channel;

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-settings__close-icon",
    type: IconTypes.CLOSE,
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__profile"
  }, (renderChannelProfile === null || renderChannelProfile === void 0 ? void 0 : renderChannelProfile()) || /*#__PURE__*/React__default.createElement(ChannelProfile, null)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__url"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-settings__copy-icon",
    type: IconTypes.COPY,
    height: "22px",
    width: "22px",
    onClick: function () {
      copyToClipboard(channel === null || channel === void 0 ? void 0 : channel.url);
    }
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-settings__url-label",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.OPEN_CHANNEL_SETTINGS__OPERATOR_URL), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-settings__url-value",
    type: LabelTypography.SUBTITLE_2
  }, channel === null || channel === void 0 ? void 0 : channel.url)), /*#__PURE__*/React__default.createElement(AccordionGroup, null, /*#__PURE__*/React__default.createElement(Accordion, {
    className: "sendbird-channel-settings__operators-list",
    id: "participants",
    renderTitle: function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MEMBERS,
        fillColor: IconColors.PRIMARY,
        width: 24,
        height: 24,
        className: "sendbird-openchannel-settings__operator-accordion-icon"
      }), /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.SUBTITLE_1,
        color: LabelColors.ONBACKGROUND_1
      }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_ACCORDION_TITLE));
    },
    renderContent: function () {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ParticipantsList, null));
    }
  })), /*#__PURE__*/React__default.createElement(DeleteChannel, null));
};

export { OperatorUI, copyToClipboard, OperatorUI as default };
//# sourceMappingURL=OperatorUI.js.map
