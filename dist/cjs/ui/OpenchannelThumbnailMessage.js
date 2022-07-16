'use strict';

var tslib_es6 = require('../tslib.es6-87d8a6c3.js');
var React = require('react');
var index = require('../index-184956b3.js');
var LocalizationContext = require('../LocalizationContext-7124ef76.js');
var ui_Avatar = require('./Avatar.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_Label = require('../index-9ad5c786.js');
var ui_Loader = require('./Loader.js');
var ui_UserProfile = require('./UserProfile.js');
var UserProfileContext = require('../UserProfileContext-4574eaff.js');
var openChannelUtils = require('../openChannelUtils-b0fd401a.js');
require('../index-80df9998.js');
require('../stringSet-ca0cf06e.js');
require('../uuid-cfc8429e.js');
require('prop-types');
require('../index-f6c81602.js');
require('../_rollupPluginBabelHelpers-d0fefa20.js');
require('react-dom');
require('./SortByRow.js');
require('../withSendbird.js');
require('../sendbirdSelectors.js');
require('../topics-55f51c3d.js');
require('../utils-d6de0e43.js');
require('../index-c5f391d0.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SUPPORTING_TYPES = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  UNSUPPORTED: 'UNSUPPORTED'
};
var SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
};
var getSupportingFileType = function (type) {
  if (SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0) {
    return SUPPORTING_TYPES.IMAGE;
  }

  if (SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0) {
    return SUPPORTING_TYPES.VIDEO;
  }

  return SUPPORTING_TYPES.UNSUPPORTED;
};

function OpenchannelThumbnailMessage(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      disabled = _a.disabled,
      userId = _a.userId,
      chainTop = _a.chainTop,
      onClick = _a.onClick,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage;
  var type = message.type,
      url = message.url,
      thumbnails = message.thumbnails,
      localUrl = message.localUrl;
  var status = message === null || message === void 0 ? void 0 : message.sendingStatus;
  var thumbnailUrl = thumbnails && thumbnails.length > 0 && thumbnails[0].url || null;

  var _c = LocalizationContext.useLocalization(),
      stringSet = _c.stringSet,
      dateLocale = _c.dateLocale;

  var _d = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _d.disableUserProfile,
      renderUserProfile = _d.renderUserProfile;

  var _e = React.useState(360),
      messageWidth = _e[0],
      setMessageWidth = _e[1];

  var messageRef = React.useRef(null);
  var contextMenuRef = React.useRef(null);
  var avatarRef = React.useRef(null);
  var memorizedThumbnailPlaceHolder = React.useMemo(function () {
    return function (type) {
      return function (_a) {
        var style = _a.style;
        return (
          /*#__PURE__*/
          // eslint-disable-line
          React__default["default"].createElement("div", {
            style: style
          }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
            type: type,
            fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
            width: "56px",
            height: "56px"
          }))
        );
      };
    };
  }, []);
  var isByMe = openChannelUtils.checkIsByMe(message, userId);
  var isMessageSent = openChannelUtils.checkIsSent(status);
  var isPending = openChannelUtils.checkIsPending(status);
  var isFailed = openChannelUtils.checkIsFailed(status);
  var sender = openChannelUtils.getSenderFromMessage(message);
  React.useEffect(function () {
    var _a;

    var thumbnailWidth = ((_a = messageRef === null || messageRef === void 0 ? void 0 : messageRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) - 80;
    setMessageWidth(thumbnailWidth > 360 ? 360 : thumbnailWidth);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-thumbnail-message'], false).join(' '),
    ref: messageRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__left"
  }, !chainTop && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        className: "sendbird-openchannel-thumbnail-message__left__avatar",
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
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
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
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        user: sender,
        onSuccess: closeDropdown,
        disableMessaging: true
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right"
  }, !chainTop && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__title"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-thumbnail-message__right__title__sender-name",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: isByMe ? ui_Label.LabelColors.SECONDARY_3 : ui_Label.LabelColors.ONBACKGROUND_2
  }, sender && (sender.friendName || sender.nickname || sender.userId)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-thumbnail-message__right__title__sent-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, (message === null || message === void 0 ? void 0 : message.createdAt) && index.format(message.createdAt, 'p', {
    locale: dateLocale
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap",
    role: "button",
    onClick: function () {
      if (isMessageSent) {
        onClick(true);
      }
    },
    onKeyDown: function () {
      if (isMessageSent) {
        onClick(true);
      }
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__overlay"
  }), (_b = {}, _b[SUPPORTING_TYPES.VIDEO] = url || localUrl ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video"
  }, thumbnailUrl ? /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video",
    url: thumbnailUrl,
    width: messageWidth,
    height: "270px",
    alt: "image",
    placeHolder: memorizedThumbnailPlaceHolder(ui_Icon.IconTypes.PLAY)
  }) : /*#__PURE__*/React__default["default"].createElement("video", {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: url || localUrl,
    type: type
  })), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video__icon",
    type: ui_Icon.IconTypes.PLAY,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  })) : /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__video--icon",
    type: ui_Icon.IconTypes.PHOTO,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b[SUPPORTING_TYPES.IMAGE] = url || localUrl ? /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image",
    url: thumbnailUrl || url || localUrl,
    alt: "image",
    width: messageWidth,
    height: "270px",
    placeHolder: memorizedThumbnailPlaceHolder(ui_Icon.IconTypes.PHOTO)
  }) : /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__image--icon",
    type: ui_Icon.IconTypes.PHOTO,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b[SUPPORTING_TYPES.UNSUPPORTED] = /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__body__wrap__unknown",
    type: ui_Icon.IconTypes.PHOTO,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
    width: "56px",
    height: "56px"
  }), _b)[getSupportingFileType(type)])), (isPending || isFailed) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__right__tail"
  }, isPending && /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__tail__pending",
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })), isFailed && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-openchannel-thumbnail-message__right__tail__failed",
    type: ui_Icon.IconTypes.ERROR,
    fillColor: ui_Icon.IconColors.ERROR,
    width: "16px",
    height: "16px"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-thumbnail-message__context-menu",
    ref: contextMenuRef
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      return openChannelUtils.showMenuTrigger({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
        className: "sendbird-openchannel-thumbnail-message__context-menu--icon",
        width: "32px",
        height: "32px",
        onClick: toggleDropdown
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.MORE,
        fillColor: ui_Icon.IconColors.CONTENT_INVERSE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        parentRef: contextMenuRef,
        parentContainRef: contextMenuRef,
        closeDropdown: closeDropdown,
        openLeft: true
      }, openChannelUtils.isFineResend({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        onClick: function () {
          resendMessage(message);
          closeDropdown();
        }
      }, stringSet.CONTEXT_MENU_DROPDOWN__RESEND), openChannelUtils.isFineDelete({
        message: message,
        userId: userId,
        status: status
      }) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
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

module.exports = OpenchannelThumbnailMessage;
//# sourceMappingURL=OpenchannelThumbnailMessage.js.map
