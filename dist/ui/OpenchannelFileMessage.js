import { a as __spreadArray } from '../tslib.es6-4a4f5c58.js';
import React__default, { useRef, useContext } from 'react';
import { f as format } from '../index-35d9a787.js';
import Avatar from './Avatar.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import Loader from './Loader.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import TextButton from './TextButton.js';
import ConnectedUserProfile from './UserProfile.js';
import { U as UserProfileContext } from '../UserProfileContext-153af432.js';
import { u as useLocalization } from '../LocalizationContext-d3e49456.js';
import { c as checkIsByMe, g as getSenderFromMessage, s as showMenuTrigger, b as isFineResend, d as isFineDelete, e as checkIsPending, f as checkIsFailed } from '../openChannelUtils-c29ded89.js';
import '../index-a53c3ed1.js';
import './ImageRenderer.js';
import 'prop-types';
import '../uuid-91011cda.js';
import '../index-fcb040ec.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-49030004.js';
import '../color-ea1c9845.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-480e2d9e.js';
import '../utils-87c63da6.js';
import '../index-d880236d.js';

var checkFileType = function (fileUrl) {
  var audioFile = /(\.mp3)$/i;
  var gifFile = /(\.gif)$/i;

  if (audioFile.test(fileUrl)) {
    return IconTypes.FILE_AUDIO;
  }

  if (gifFile.test(fileUrl)) {
    return IconTypes.GIF;
  }

  return IconTypes.FILE_DOCUMENT;
};
var truncate = function (fullStr, strLen) {
  if (fullStr === null || fullStr === undefined) return '';
  if (fullStr.length <= strLen) return fullStr;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = strLen - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
};

function OpenchannelFileMessage(_a) {
  var className = _a.className,
      message = _a.message,
      userId = _a.userId,
      disabled = _a.disabled,
      chainTop = _a.chainTop,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage;
  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;

  var _b = useLocalization(),
      dateLocale = _b.dateLocale,
      stringSet = _b.stringSet;

  var contextMenuRef = useRef(null);
  var avatarRef = useRef(null);

  var _c = useContext(UserProfileContext),
      disableUserProfile = _c.disableUserProfile,
      renderUserProfile = _c.renderUserProfile;

  var openFileUrl = function () {
    window.open(message.url);
  };

  var isByMe = checkIsByMe(message, userId);
  var isPending = checkIsPending(status);
  var isFailed = checkIsFailed(status);
  var sender = getSenderFromMessage(message);
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-file-message'], false).join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__left"
  }, !chainTop && /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        className: "sendbird-openchannel-file-message__left__avatar",
        src: sender.profileUrl || '',
        ref: avatarRef,
        width: "28px",
        height: "28px",
        onClick: function () {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        }
      });
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems, {
        parentRef: avatarRef,
        parentContainRef: avatarRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: sender,
        close: closeDropdown
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        user: sender,
        onSuccess: closeDropdown,
        disableMessaging: true
      }));
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__right"
  }, !chainTop && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__right__title"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-file-message__right__title__sender-name",
    type: LabelTypography.CAPTION_2,
    color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-file-message__right__title__sent-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && format(message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__right__body"
  }, checkFileType(message.url) && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-file-message__right__body__icon",
    type: checkFileType(message.url),
    fillColor: IconColors.PRIMARY,
    width: "48px",
    height: "48px"
  }), /*#__PURE__*/React__default.createElement(TextButton, {
    className: "sendbird-openchannel-file-message__right__body__file-name",
    onClick: openFileUrl
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_1
  }, truncate(message.name || message.url, 40)))), (isPending || isFailed) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__right__tail"
  }, isPending && /*#__PURE__*/React__default.createElement(Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-file-message__right__tail__pending",
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-file-message__right__tail__failed",
    type: IconTypes.ERROR,
    fillColor: IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-file-message__context-menu",
    ref: contextMenuRef
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(IconButton, {
        className: "sendbird-openchannel-file-message__context-menu__icon",
        width: "32px",
        height: "32px",
        onClick: toggleDropdown
      }, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MORE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems, {
        parentRef: contextMenuRef,
        parentContainRef: contextMenuRef,
        closeDropdown: closeDropdown,
        openLeft: true
      }, isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        onClick: function () {
          if (disabled) {
            return;
          }

          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        onClick: function () {
          if (disabled) {
            return;
          }

          showRemove(true);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__DELETE));
    }
  })));
}

export { OpenchannelFileMessage as default };
//# sourceMappingURL=OpenchannelFileMessage.js.map
