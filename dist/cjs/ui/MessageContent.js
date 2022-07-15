'use strict';

var React = require('react');
var index$1 = require('../index-3913cf07.js');
var ui_Avatar = require('./Avatar.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_MessageStatus = require('./MessageStatus.js');
var ui_MessageItemMenu = require('./MessageItemMenu.js');
var ui_MessageItemReactionMenu = require('./MessageItemReactionMenu.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-1a5c5200.js');
var ui_EmojiReactions = require('./EmojiReactions.js');
var ui_AdminMessage = require('./AdminMessage.js');
var ui_TextMessageItemBody = require('./TextMessageItemBody.js');
var ui_FileMessageItemBody = require('./FileMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('./ThumbnailMessageItemBody.js');
var ui_OGMessageItemBody = require('./OGMessageItemBody.js');
var ui_UnknownMessageItemBody = require('./UnknownMessageItemBody.js');
var ui_QuoteMessage = require('./QuoteMessage.js');
var index = require('../index-129ce994.js');
var UserProfileContext = require('../UserProfileContext-81f77266.js');
var LocalizationContext = require('../LocalizationContext-44ed70a4.js');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
require('../index-f0b59409.js');
require('../tslib.es6-ca286580.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-c037b76e.js');
require('../withSendbird.js');
require('../_rollupPluginBabelHelpers-5122729b.js');
require('../sendbirdSelectors.js');
require('../topics-368356cd.js');
require('../utils-fedac650.js');
require('../index-73892caf.js');
require('./Loader.js');
require('../stringSet-6cea29d9.js');
require('./IconButton.js');
require('./ReactionButton.js');
require('react-dom');
require('./SortByRow.js');
require('./Tooltip.js');
require('./TooltipWrapper.js');
require('./ReactionBadge.js');
require('./Word.js');
require('./LinkLabel.js');
require('./MentionLabel.js');
require('./TextButton.js');
require('../color-49dea9d5.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MessageContent(_a) {
  var _b, _c, _d, _e, _f;

  var className = _a.className,
      userId = _a.userId,
      channel = _a.channel,
      message = _a.message,
      _g = _a.disabled,
      disabled = _g === void 0 ? false : _g,
      _h = _a.chainTop,
      chainTop = _h === void 0 ? false : _h,
      _j = _a.chainBottom,
      chainBottom = _j === void 0 ? false : _j,
      _k = _a.isReactionEnabled,
      isReactionEnabled = _k === void 0 ? false : _k,
      replyType = _a.replyType,
      nicknamesMap = _a.nicknamesMap,
      emojiContainer = _a.emojiContainer,
      scrollToMessage = _a.scrollToMessage,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      showFileViewer = _a.showFileViewer,
      resendMessage = _a.resendMessage,
      toggleReaction = _a.toggleReaction,
      setQuoteMessage = _a.setQuoteMessage;
  var messageTypes = index.getUIKitMessageTypes();
  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var config = ((useSendbirdStateContext === null || useSendbirdStateContext === void 0 ? void 0 : useSendbirdStateContext()) || {}).config;

  var _l = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _l.disableUserProfile,
      renderUserProfile = _l.renderUserProfile;

  var avatarRef = React.useRef(null);

  var _m = React.useState(false),
      mouseHover = _m[0],
      setMouseHover = _m[1];

  var _o = React.useState(false),
      supposedHover = _o[0],
      setSupposedHover = _o[1];

  var isByMe = userId === ((_b = message === null || message === void 0 ? void 0 : message.sender) === null || _b === void 0 ? void 0 : _b.userId) || message.sendingStatus === 'pending' || message.sendingStatus === 'failed';
  var isByMeClassName = isByMe ? 'outgoing' : 'incoming';
  var chainTopClassName = chainTop ? 'chain-top' : '';
  var isReactionEnabledClassName = isReactionEnabled ? 'use-reactions' : '';
  var supposedHoverClassName = supposedHover ? 'supposed-hover' : '';
  var useReplying = !!(replyType === 'QUOTE_REPLY' && (message === null || message === void 0 ? void 0 : message.parentMessageId) && (message === null || message === void 0 ? void 0 : message.parentMessage));
  var useReplyingClassName = useReplying ? 'use-quote' : '';

  if (((_c = message === null || message === void 0 ? void 0 : message.isAdminMessage) === null || _c === void 0 ? void 0 : _c.call(message)) || (message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
    return /*#__PURE__*/React__default["default"].createElement(ui_AdminMessage, {
      message: message
    });
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-message-content', isByMeClassName]),
    onMouseOver: function () {
      return setMouseHover(true);
    },
    onMouseLeave: function () {
      return setMouseHover(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__left', isReactionEnabledClassName, isByMeClassName, useReplyingClassName])
  }, !isByMe && !chainBottom &&
  /*#__PURE__*/

  /** user profile */
  React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      var _a, _b, _c;

      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        className: "sendbird-message-content__left__avatar" // @ts-ignore
        ,
        src: ((_b = (_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.find(function (member) {
          var _a;

          return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
        })) === null || _b === void 0 ? void 0 : _b.profileUrl) || ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.profileUrl) || '' // TODO: Divide getting profileUrl logic to utils
        ,
        ref: avatarRef,
        width: "28px",
        height: "28px",
        onClick: function () {
          if (!disableUserProfile) toggleDropdown();
        }
      });
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems
      /**
      * parentRef: For catching location(x, y) of MenuItems
      * parentContainRef: For toggling more options(menus & reactions)
      */
      , {
        parentRef: avatarRef,
        parentContainRef: avatarRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile // @ts-ignore
      ? renderUserProfile({
        user: message === null || message === void 0 ? void 0 : message.sender,
        close: closeDropdown
      }) // @ts-ignore
      : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        user: message.sender,
        onSuccess: closeDropdown
      }));
    }
  }), isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-menu', isReactionEnabledClassName, supposedHoverClassName, isByMeClassName])
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageItemMenu, {
    className: "sendbird-message-content-menu__normal-menu",
    channel: channel,
    message: message,
    isByMe: isByMe,
    replyType: replyType,
    disabled: disabled,
    showEdit: showEdit,
    showRemove: showRemove,
    resendMessage: resendMessage,
    setQuoteMessage: setQuoteMessage,
    setSupposedHover: setSupposedHover
  }), isReactionEnabled && /*#__PURE__*/React__default["default"].createElement(ui_MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-content__middle"
  }, !isByMe && !chainTop && !useReplying && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-content__middle__sender-name",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, // @ts-ignore
  ((_e = (_d = channel === null || channel === void 0 ? void 0 : channel.members) === null || _d === void 0 ? void 0 : _d.find(function (member) {
    var _a;

    return (member === null || member === void 0 ? void 0 : member.userId) === ((_a = message === null || message === void 0 ? void 0 : message.sender) === null || _a === void 0 ? void 0 : _a.userId);
  })) === null || _e === void 0 ? void 0 : _e.nickname) || index.getSenderName(message) // TODO: Divide getting profileUrl logic to utils
  ), useReplying ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__quote-message', isByMe ? 'outgoing' : 'incoming', useReplyingClassName])
  }, /*#__PURE__*/React__default["default"].createElement(ui_QuoteMessage, {
    message: message,
    userId: userId,
    isByMe: isByMe,
    onClick: function () {
      var _a;

      if (((_a = message === null || message === void 0 ? void 0 : message.parentMessage) === null || _a === void 0 ? void 0 : _a.createdAt) && (message === null || message === void 0 ? void 0 : message.parentMessageId)) {
        scrollToMessage(message.parentMessage.createdAt, message.parentMessageId);
      }
    }
  })) : null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__body-container'])
  }, isByMe && !chainBottom && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__middle__body-container__created-at', 'left', supposedHoverClassName])
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-content__middle__body-container__created-at__component-container"
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageStatus["default"], {
    message: message,
    channel: channel
  }))), index.isTextMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_TextMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), index.isOGMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_OGMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
  }), index.getUIKitMessageType(message) === messageTypes.FILE && /*#__PURE__*/React__default["default"].createElement(ui_FileMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), index.isThumbnailMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_ThumbnailMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover,
    showFileViewer: showFileViewer
  }), index.getUIKitMessageType(message) === messageTypes.UNKNOWN && /*#__PURE__*/React__default["default"].createElement(ui_UnknownMessageItemBody, {
    className: "sendbird-message-content__middle__message-item-body",
    message: message,
    isByMe: isByMe,
    mouseHover: mouseHover
  }), isReactionEnabled && ((_f = message === null || message === void 0 ? void 0 : message.reactions) === null || _f === void 0 ? void 0 : _f.length) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-reactions', !isByMe || index.isThumbnailMessage(message) || index.isOGMessage(message) ? '' : 'primary', mouseHover ? 'mouse-hover' : ''])
  }, /*#__PURE__*/React__default["default"].createElement(ui_EmojiReactions, {
    userId: userId,
    message: message,
    isByMe: isByMe,
    emojiContainer: emojiContainer,
    memberNicknamesMap: nicknamesMap,
    toggleReaction: toggleReaction
  })), !isByMe && !chainBottom && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: index.getClassName(['sendbird-message-content__middle__body-container__created-at', 'right', supposedHoverClassName]),
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content__right', chainTopClassName, isReactionEnabledClassName, useReplyingClassName])
  }, !isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-message-content-menu', chainTopClassName, supposedHoverClassName, isByMeClassName])
  }, isReactionEnabled && /*#__PURE__*/React__default["default"].createElement(ui_MessageItemReactionMenu, {
    className: "sendbird-message-content-menu__reaction-menu",
    message: message,
    userId: userId,
    spaceFromTrigger: {},
    emojiContainer: emojiContainer,
    toggleReaction: toggleReaction,
    setSupposedHover: setSupposedHover
  }), /*#__PURE__*/React__default["default"].createElement(ui_MessageItemMenu, {
    className: "sendbird-message-content-menu__normal-menu",
    channel: channel,
    message: message,
    isByMe: isByMe,
    replyType: replyType,
    disabled: disabled,
    showRemove: showRemove,
    resendMessage: resendMessage,
    setQuoteMessage: setQuoteMessage,
    setSupposedHover: setSupposedHover
  }))));
}

module.exports = MessageContent;
//# sourceMappingURL=MessageContent.js.map
