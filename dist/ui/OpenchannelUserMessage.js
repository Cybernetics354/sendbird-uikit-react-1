import { a as __spreadArray } from '../tslib.es6-6b1ce61a.js';
import React__default, { useContext, useRef, useState, useMemo, useEffect } from 'react';
import { f as format } from '../index-6e7e7eaa.js';
import Avatar from './Avatar.js';
import ContextMenu, { MenuItems, MenuItem } from './ContextMenu.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-96f2ca18.js';
import Loader from './Loader.js';
import ConnectedUserProfile from './UserProfile.js';
import { U as UserProfileContext } from '../UserProfileContext-7c91714e.js';
import { u as useLocalization } from '../LocalizationContext-bdb56d81.js';
import { c as copyToClipboard } from '../utils-698a3c6a.js';
import { u as uuidv4 } from '../uuid-21b2a5db.js';
import { c as checkIsByMe, g as getSenderFromMessage, s as showMenuTrigger, i as isFineCopy, a as isFineEdit, b as isFineResend, d as isFineDelete, e as checkIsPending, f as checkIsFailed } from '../openChannelUtils-54e03a56.js';
import '../index-8d5e2563.js';
import './ImageRenderer.js';
import 'prop-types';
import '../index-f2c869d7.js';
import '../_rollupPluginBabelHelpers-5522a8f6.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-1cad1dbf.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-e87f2985.js';
import '../utils-d6f171ef.js';
import '../index-1187996f.js';

function OpenchannelUserMessage(_a) {
  var className = _a.className,
      message = _a.message,
      userId = _a.userId,
      resendMessage = _a.resendMessage,
      disabled = _a.disabled,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      chainTop = _a.chainTop;

  if (!message || message.messageType !== 'user') {
    return null;
  } // hooks


  var _b = useLocalization(),
      stringSet = _b.stringSet,
      dateLocale = _b.dateLocale;

  var _c = useContext(UserProfileContext),
      disableUserProfile = _c.disableUserProfile,
      renderUserProfile = _c.renderUserProfile;

  var messageRef = useRef(null);
  var avatarRef = useRef(null);
  var contextMenuRef = useRef(null);

  var _d = useState({}),
      contextStyle = _d[0],
      setContextStyle = _d[1]; // consts


  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
  var isByMe = checkIsByMe(message, userId);
  var isPending = checkIsPending(status);
  var isFailed = checkIsFailed(status);
  var sender = getSenderFromMessage(message);
  var MemoizedMessageText = useMemo(function () {
    return function () {
      var splitMessage = message.message.split(/\r/);
      var matchedMessage = splitMessage.map(function (word) {
        return word !== '' ? word : /*#__PURE__*/React__default.createElement("br", null);
      });

      if (message.updatedAt > 0) {
        matchedMessage.push( /*#__PURE__*/React__default.createElement(Label, {
          key: uuidv4(),
          type: LabelTypography.BODY_1,
          color: LabelColors.ONBACKGROUND_2,
          calssName: "sendbird-openchannel-user-message-word"
        }, " ".concat(stringSet.MESSAGE_EDITED, " ")));
      }

      return matchedMessage;
    };
  }, [message, message.updatedAt]); // place context menu top depending clientHeight of message component

  useEffect(function () {
    var _a;

    if (((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) > 36) {
      setContextStyle({
        top: '8px '
      });
    } else {
      setContextStyle({
        top: '2px'
      });
    }
  }, [window.innerWidth]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-user-message'], false).join(' '),
    ref: messageRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-user-message__left"
  }, !chainTop && /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        className: "sendbird-openchannel-user-message__left__avatar",
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
    className: "sendbird-openchannel-user-message__right"
  }, !chainTop && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-user-message__right__top"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-user-message__right__top__sender-name",
    type: LabelTypography.CAPTION_2,
    color: isByMe ? LabelColors.SECONDARY_3 : LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-user-message__right__top__sent-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && format(message === null || message === void 0 ? void 0 : message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-user-message__right__bottom"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-user-message__right__bottom__message",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_1
  }, MemoizedMessageText())), (isPending || isFailed) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-user-message__right__tail"
  }, isPending && /*#__PURE__*/React__default.createElement(Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-user-message__right__tail__pending",
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-openchannel-user-message__right__tail__failed",
    type: IconTypes.ERROR,
    fillColor: IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-user-message__context-menu",
    ref: contextMenuRef,
    style: contextStyle
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(IconButton, {
        className: "sendbird-openchannel-user-message__context-menu--icon",
        width: "32px",
        height: "32px",
        onClick: function () {
          toggleDropdown();
        }
      }, /*#__PURE__*/React__default.createElement(Icon, {
        type: IconTypes.MORE,
        fillColor: IconColors.CONTENT_INVERSE,
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
      }, isFineCopy({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-user-message__context-menu__copy",
        onClick: function () {
          copyToClipboard(message.message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__COPY), isFineEdit({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-user-message__context-menu__edit",
        onClick: function () {
          if (disabled) {
            return;
          }

          showEdit(true);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__EDIT), isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-user-message__context-menu__resend",
        onClick: function () {
          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default.createElement(MenuItem, {
        className: "sendbird-openchannel-user-message__context-menu__delete",
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

export { OpenchannelUserMessage as default };
//# sourceMappingURL=OpenchannelUserMessage.js.map
