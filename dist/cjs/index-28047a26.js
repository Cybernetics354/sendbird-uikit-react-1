'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var SendbirdProvider = require('./SendbirdProvider.js');
var ChannelList = require('./ChannelList.js');
var Channel_context = require('./ChannelProvider-c0942911.js');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
var ui_PlaceHolder = require('./index-2b606866.js');
var ui_ConnectionStatus = require('./ui/ConnectionStatus.js');
var Channel_components_ChannelHeader = require('./Channel/components/ChannelHeader.js');
var index$2 = require('./index-c173eafb.js');
var ui_Icon = require('./ui/Icon.js');
var tslib_es6 = require('./tslib.es6-bd7bd76d.js');
var index$1 = require('./index-09c690af.js');
var Channel_components_SuggestedMentionList = require('./Channel/components/SuggestedMentionList.js');
var index = require('./index-6292ff33.js');
var _const = require('./const-a4d49809.js');
var ui_DateSeparator = require('./ui/DateSeparator.js');
var ui_Label = require('./index-2dfdb9de.js');
var ui_MessageInput = require('./ui/MessageInput.js');
var ui_Avatar = require('./ui/Avatar.js');
var ui_UserProfile = require('./ui/UserProfile.js');
var ui_MessageStatus = require('./ui/MessageStatus.js');
var ui_MessageItemMenu = require('./ui/MessageItemMenu.js');
var ui_MessageItemReactionMenu = require('./ui/MessageItemReactionMenu.js');
var ui_ContextMenu = require('./ui/ContextMenu.js');
var ui_EmojiReactions = require('./ui/EmojiReactions.js');
var ui_AdminMessage = require('./ui/AdminMessage.js');
var ui_TextMessageItemBody = require('./ui/TextMessageItemBody.js');
var ui_FileMessageItemBody = require('./ui/FileMessageItemBody.js');
var ui_ThumbnailMessageItemBody = require('./ui/ThumbnailMessageItemBody.js');
var ui_ImageRenderer = require('./ui/ImageRenderer.js');
var ui_OGMessageItemBody = require('./ui/OGMessageItemBody.js');
var ui_UnknownMessageItemBody = require('./ui/UnknownMessageItemBody.js');
var ui_QuoteMessage = require('./ui/QuoteMessage.js');
var UserProfileContext = require('./UserProfileContext-24790fe2.js');
var LocalizationContext = require('./LocalizationContext-ea1242a7.js');
var ChannelSettings = require('./ChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');
var Channel_components_FileViewer = require('./Channel/components/FileViewer.js');
var Channel_components_RemoveMessageModal = require('./Channel/components/RemoveMessageModal.js');
var _const$1 = require('./const-295db437.js');
var uuid = require('./uuid-d427ce45.js');
var Channel_components_TypingIndicator = require('./Channel/components/TypingIndicator.js');
var Channel_components_FrozenNotification = require('./Channel/components/FrozenNotification.js');
var Channel_components_UnreadCount = require('./Channel/components/UnreadCount.js');
var ui_QuoteMessageInput = require('./ui/QuoteMessageInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function S3ThumbnailMessageItemBody(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      _c = _a.isByMe,
      isByMe = _c === void 0 ? false : _c,
      _d = _a.mouseHover,
      mouseHover = _d === void 0 ? false : _d,
      showFileViewer = _a.showFileViewer;

  var _e = React.useState(false);
      _e[0];
      var setImageRendered = _e[1];

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-thumbnail-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 ? 'reactions' : '']),
    onClick: function () {
      if (index.isSentMessage(message)) {
        showFileViewer(true);
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-thumbnail-message-item-body__thumbnail",
    url: message.message,
    alt: message.message,
    width: "360px",
    height: "270px",
    onLoad: function () {
      setImageRendered(true);
    },
    placeHolder: function (style) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-thumbnail-message-item-body__placeholder",
        style: style
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "sendbird-thumbnail-message-item-body__placeholder__icon"
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        type: ui_Icon.IconTypes.PHOTO,
        fillColor: ui_Icon.IconColors.ON_BACKGROUND_2,
        width: "34px",
        height: "34px"
      })));
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-thumbnail-message-item-body__image-cover"
  }));
}

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

  var _m = React.useContext(FileInputContext),
      externalBucketUrl = _m.externalBucketUrl,
      renderCustomMessage = _m.renderCustomMessage;

  var avatarRef = React.useRef(null);

  var _o = React.useState(false),
      mouseHover = _o[0],
      setMouseHover = _o[1];

  var _p = React.useState(false),
      supposedHover = _p[0],
      setSupposedHover = _p[1];

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

  function RenderMessageContent() {
    var renderedItem = renderCustomMessage({
      className: "sendbird-message-content__middle__message-item-body",
      isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false,
      message: message,
      isByMe: isByMe,
      mouseHover: mouseHover,
      showFileViewer: showFileViewer
    });

    if (renderedItem) {
      return /*#__PURE__*/React__default["default"].createElement("div", null, renderedItem);
    }

    return /*#__PURE__*/React__default["default"].createElement("div", null, index.isTextMessage(message, externalBucketUrl) && /*#__PURE__*/React__default["default"].createElement(ui_TextMessageItemBody, {
      className: "sendbird-message-content__middle__message-item-body",
      message: message,
      isByMe: isByMe,
      mouseHover: mouseHover,
      isMentionEnabled: (config === null || config === void 0 ? void 0 : config.isMentionEnabled) || false
    }), index.isS3ImageMessage(message, externalBucketUrl) && /*#__PURE__*/React__default["default"].createElement(S3ThumbnailMessageItemBody, {
      className: "sendbird-message-content__middle__message-item-body",
      message: message,
      isByMe: isByMe,
      mouseHover: mouseHover,
      showFileViewer: showFileViewer
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
    }));
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
  }))), /*#__PURE__*/React__default["default"].createElement(RenderMessageContent, null), isReactionEnabled && ((_f = message === null || message === void 0 ? void 0 : message.reactions) === null || _f === void 0 ? void 0 : _f.length) > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
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

var Message = function (props) {
  var _a;

  var message = props.message,
      hasSeparator = props.hasSeparator,
      chainTop = props.chainTop,
      chainBottom = props.chainBottom,
      handleScroll = props.handleScroll,
      renderCustomSeparator = props.renderCustomSeparator,
      renderEditInput = props.renderEditInput,
      renderMessage = props.renderMessage,
      renderMessageContent = props.renderMessageContent;
  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var globalStore = useSendbirdStateContext();

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      userId = _b.userId,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || _const.MAX_USER_MENTION_COUNT;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || _const.MAX_USER_SUGGESTION_COUNT;

  var _c = Channel_context.useChannelContext(),
      initialized = _c.initialized,
      currentGroupChannel = _c.currentGroupChannel,
      highLightedMessageId = _c.highLightedMessageId,
      setHighLightedMessageId = _c.setHighLightedMessageId,
      animatedMessageId = _c.animatedMessageId,
      setAnimatedMessageId = _c.setAnimatedMessageId,
      updateMessage = _c.updateMessage,
      scrollToMessage = _c.scrollToMessage,
      replyType = _c.replyType,
      isReactionEnabled = _c.isReactionEnabled,
      toggleReaction = _c.toggleReaction,
      emojiContainer = _c.emojiContainer,
      nicknamesMap = _c.nicknamesMap,
      setQuoteMessage = _c.setQuoteMessage,
      resendMessage = _c.resendMessage,
      renderUserMentionItem = _c.renderUserMentionItem;

  var _d = React.useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = React.useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = React.useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var _g = React.useState(false),
      isAnimated = _g[0],
      setIsAnimated = _g[1];

  var _h = React.useState(false),
      isHighlighted = _h[0],
      setIsHighlighted = _h[1];

  var _j = React.useState(''),
      mentionNickname = _j[0],
      setMentionNickname = _j[1];

  var _k = React.useState([]),
      mentionedUsers = _k[0],
      setMentionedUsers = _k[1];

  var _l = React.useState([]),
      mentionedUserIds = _l[0],
      setMentionedUserIds = _l[1];

  var _m = React.useState(null),
      messageInputEvent = _m[0],
      setMessageInputEvent = _m[1];

  var _o = React.useState(null),
      selectedUser = _o[0],
      setSelectedUser = _o[1];

  var _p = React.useState([]),
      mentionSuggestedUsers = _p[0],
      setMentionSuggestedUsers = _p[1];

  var _q = React.useState(true),
      ableMention = _q[0],
      setAbleMention = _q[1];

  var editMessageInputRef = React.useRef(null);
  var useMessageScrollRef = React.useRef(null);
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !Channel_context.isDisabledBecauseFrozen(currentGroupChannel) && !Channel_context.isDisabledBecauseMuted(currentGroupChannel);
  var disabled = !initialized || Channel_context.isDisabledBecauseFrozen(currentGroupChannel) || Channel_context.isDisabledBecauseMuted(currentGroupChannel) || !isOnline;
  React.useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  React.useEffect(function () {
    setMentionedUsers(mentionedUsers.filter(function (_a) {
      var userId = _a.userId;
      var i = mentionedUserIds.indexOf(userId);

      if (i < 0) {
        return false;
      } else {
        mentionedUserIds.splice(i, 1);
        return true;
      }
    }));
  }, [mentionedUserIds]);
  React.useLayoutEffect(function () {
    handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
  }, [showEdit, (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length]);
  React.useLayoutEffect(function () {
    if (highLightedMessageId === message.messageId) {
      if (useMessageScrollRef && useMessageScrollRef.current) {
        useMessageScrollRef.current.scrollIntoView({
          block: 'center',
          inline: 'center'
        });
        setIsAnimated(false);
        setTimeout(function () {
          setIsHighlighted(true);
        }, 500);
        setTimeout(function () {
          setHighLightedMessageId(0);
        }, 1600);
      }
    } else {
      setIsHighlighted(false);
    }
  }, [highLightedMessageId, useMessageScrollRef.current, message.messageId]);
  React.useLayoutEffect(function () {
    if (animatedMessageId === message.messageId) {
      if (useMessageScrollRef && useMessageScrollRef.current) {
        useMessageScrollRef.current.scrollIntoView({
          block: 'center',
          inline: 'center'
        });
        setIsHighlighted(false);
        setTimeout(function () {
          setIsAnimated(true);
        }, 500);
        setTimeout(function () {
          setAnimatedMessageId(0);
        }, 1600);
      }
    } else {
      setIsAnimated(false);
    }
  }, [animatedMessageId, useMessageScrollRef.current, message.messageId]);
  var renderedMessage = React.useMemo(function () {
    return renderMessage === null || renderMessage === void 0 ? void 0 : renderMessage({
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom
    });
  }, [message, renderMessage]);
  var renderedCustomSeparator = React.useMemo(function () {
    if (renderCustomSeparator) {
      return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator();
    }

    return null;
  }, [message, renderCustomSeparator]);

  if (renderedMessage) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      ref: useMessageScrollRef,
      className: index.getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : ''])
    }, // TODO: Add message instance as a function parameter
    hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default["default"].createElement(ui_DateSeparator, null, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
      type: ui_Label.LabelTypography.CAPTION_2,
      color: ui_Label.LabelColors.ONBACKGROUND_2
    }, index$1.format(message.createdAt, 'MMMM dd, yyyy', {
      locale: dateLocale
    })))), renderedMessage);
  }

  if (showEdit && message.isUserMessage()) {
    return (renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, displaySuggestedMentionList && /*#__PURE__*/React__default["default"].createElement(Channel_components_SuggestedMentionList, {
      targetNickname: mentionNickname,
      inputEvent: messageInputEvent,
      renderUserMentionItem: renderUserMentionItem,
      onUserItemClick: function (user) {
        if (user) {
          setMentionedUsers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], mentionedUsers, true), [user], false));
        }

        setMentionNickname('');
        setSelectedUser(user);
        setMessageInputEvent(null);
      },
      onFocusItemChange: function () {
        setMessageInputEvent(null);
      },
      onFetchUsers: function (users) {
        setMentionSuggestedUsers(users);
      },
      ableAddMention: ableMention,
      maxMentionCount: maxUserMentionCount,
      maxSuggestionCount: maxUserSuggestionCount
    }), /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
      isEdit: true,
      disabled: disabled,
      ref: editMessageInputRef,
      mentionSelectedUser: selectedUser,
      isMentionEnabled: isMentionEnabled,
      message: message,
      onUpdateMessage: function (_a) {
        var messageId = _a.messageId,
            message = _a.message,
            mentionTemplate = _a.mentionTemplate;
        updateMessage({
          messageId: messageId,
          message: message,
          mentionedUsers: mentionedUsers,
          mentionTemplate: mentionTemplate
        });
        setShowEdit(false);
      },
      onCancelEdit: function () {
        setMentionNickname('');
        setMentionedUsers([]);
        setMentionedUserIds([]);
        setMentionSuggestedUsers([]);
        setShowEdit(false);
      },
      onUserMentioned: function (user) {
        if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
          setSelectedUser(null);
          setMentionNickname('');
        }
      },
      onMentionStringChange: function (mentionText) {
        setMentionNickname(mentionText);
      },
      onMentionedUserIdsUpdated: function (userIds) {
        setMentionedUserIds(userIds);
      },
      onKeyDown: function (e) {
        if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === _const$1.MessageInputKeys.Enter && ableMention || e.key === _const$1.MessageInputKeys.ArrowUp || e.key === _const$1.MessageInputKeys.ArrowDown)) {
          setMessageInputEvent(e);
          return true;
        }

        return false;
      }
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : '']),
    style: {
      marginBottom: '2px'
    },
    ref: useMessageScrollRef
  }, hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default["default"].createElement(ui_DateSeparator, null, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index$1.format(message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  })))), (renderMessageContent === null || renderMessageContent === void 0 ? void 0 : renderMessageContent()) || /*#__PURE__*/React__default["default"].createElement(MessageContent, {
    className: "sendbird-message-hoc__message-content",
    userId: userId,
    scrollToMessage: scrollToMessage,
    channel: currentGroupChannel,
    message: message,
    disabled: !isOnline,
    chainTop: chainTop,
    chainBottom: chainBottom,
    isReactionEnabled: isReactionEnabled,
    replyType: replyType,
    nicknamesMap: nicknamesMap,
    emojiContainer: emojiContainer,
    showEdit: setShowEdit,
    showRemove: setShowRemove,
    showFileViewer: setShowFileViewer,
    resendMessage: resendMessage,
    toggleReaction: toggleReaction,
    setQuoteMessage: setQuoteMessage
  }), showRemove && /*#__PURE__*/React__default["default"].createElement(Channel_components_RemoveMessageModal, {
    message: message,
    onCancel: function () {
      return setShowRemove(false);
    }
  }), showFileViewer && /*#__PURE__*/React__default["default"].createElement(Channel_components_FileViewer["default"], {
    message: message,
    onCancel: function () {
      return setShowFileViewer(false);
    }
  }));
};

var SCROLL_REF_CLASS_NAME = '.sendbird-msg--scroll-ref';

var MessageList = function (props) {
  var renderMessage = props.renderMessage,
      renderPlaceholderEmpty = props.renderPlaceholderEmpty,
      renderCustomSeparator = props.renderCustomSeparator;

  var _a = Channel_context.useChannelContext(),
      allMessages = _a.allMessages,
      hasMorePrev = _a.hasMorePrev,
      setInitialTimeStamp = _a.setInitialTimeStamp,
      setAnimatedMessageId = _a.setAnimatedMessageId,
      setHighLightedMessageId = _a.setHighLightedMessageId,
      isMessageGroupingEnabled = _a.isMessageGroupingEnabled,
      scrollRef = _a.scrollRef,
      onScrollCallback = _a.onScrollCallback,
      onScrollDownCallback = _a.onScrollDownCallback,
      messagesDispatcher = _a.messagesDispatcher,
      messageActionTypes = _a.messageActionTypes,
      currentGroupChannel = _a.currentGroupChannel;

  var _b = React.useState(0),
      scrollBottom = _b[0],
      setScrollBottom = _b[1];

  var onScroll = function (e) {
    var element = e.target;
    var scrollTop = element.scrollTop,
        clientHeight = element.clientHeight,
        scrollHeight = element.scrollHeight;

    if (scrollTop === 0) {
      if (!hasMorePrev) {
        return;
      }

      var nodes = scrollRef.current.querySelectorAll(SCROLL_REF_CLASS_NAME);
      var first_1 = nodes && nodes[0];
      onScrollCallback(function (_a) {
        var messages = _a[0];

        if (messages) {
          // https://github.com/scabbiaza/react-scroll-position-on-updating-dom
          // Set block to nearest to prevent unexpected scrolling from outer components
          try {
            first_1.scrollIntoView({
              block: "start",
              inline: "nearest"
            });
          } catch (error) {//
          }
        }
      });
    }

    if (Channel_context.isAboutSame(clientHeight + scrollTop, scrollHeight, 10)) {
      onScrollDownCallback(function (_a) {
        var messages = _a[0];

        if (messages) {
          try {
            element.scrollTop = scrollHeight - clientHeight;
          } catch (error) {//
          }
        }
      });
    } // save the lastest scroll bottom value


    if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
      var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;
      setScrollBottom(current.scrollHeight - current.scrollTop - current.offsetHeight);
    } // do this later


    setTimeout(function () {
      // mark as read if scroll is at end
      if (clientHeight + scrollTop === scrollHeight) {
        messagesDispatcher({
          type: messageActionTypes.MARK_AS_READ,
          payload: {
            channel: currentGroupChannel
          }
        });
        currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.markAsRead();
      }
    }, 500);
  };

  var onClickScrollBot = function () {
    var _a, _b, _c;

    setInitialTimeStamp === null || setInitialTimeStamp === void 0 ? void 0 : setInitialTimeStamp(null);
    setAnimatedMessageId === null || setAnimatedMessageId === void 0 ? void 0 : setAnimatedMessageId(null);
    setHighLightedMessageId === null || setHighLightedMessageId === void 0 ? void 0 : setHighLightedMessageId(null);

    if (((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) > -1) {
      scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
    }
  }; // Because every message components are re-rendered everytime by every scroll events


  var memoizedAllMessages = React.useMemo(function () {
    return allMessages.map(function (m, idx) {
      var previousMessage = allMessages[idx - 1];
      var nextMessage = allMessages[idx + 1];

      var _a = isMessageGroupingEnabled ? Channel_context.compareMessagesForGrouping(previousMessage, m, nextMessage) : [false, false],
          chainTop = _a[0],
          chainBottom = _a[1];

      var previousMessageCreatedAt = previousMessage === null || previousMessage === void 0 ? void 0 : previousMessage.createdAt;
      var currentCreatedAt = m.createdAt; // https://stackoverflow.com/a/41855608

      var hasSeparator = !(previousMessageCreatedAt && index$2.isSameDay(currentCreatedAt, previousMessageCreatedAt));

      var handleScroll = function () {
        var current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current;

        if (current) {
          var bottom = current.scrollHeight - current.scrollTop - current.offsetHeight;

          if (scrollBottom < bottom) {
            current.scrollTop += bottom - scrollBottom;
          }
        }
      };

      return /*#__PURE__*/React__default["default"].createElement(Message, {
        handleScroll: handleScroll,
        renderMessage: renderMessage,
        message: m,
        hasSeparator: hasSeparator,
        chainTop: chainTop,
        chainBottom: chainBottom,
        renderCustomSeparator: renderCustomSeparator,
        key: m.messageId + uuid.uuidv4()
      });
    });
  }, [allMessages]);

  if (allMessages.length < 1) {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (renderPlaceholderEmpty === null || renderPlaceholderEmpty === void 0 ? void 0 : renderPlaceholderEmpty()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      className: "sendbird-conversation__no-messages",
      type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__messages"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__scroll-container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__padding"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__messages-padding",
    ref: scrollRef,
    onScroll: onScroll
  }, memoizedAllMessages)), // This flag is an unmatched variable
  scrollBottom > 1 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__scroll-bottom-button",
    onClick: onClickScrollBot,
    onKeyDown: onClickScrollBot,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    width: "24px",
    height: "24px",
    type: ui_Icon.IconTypes.CHEVRON_DOWN,
    fillColor: ui_Icon.IconColors.PRIMARY
  })));
};

var MessageInputWrapper = function () {
  var _a = Channel_context.useChannelContext(),
      currentGroupChannel = _a.currentGroupChannel,
      initialized = _a.initialized,
      quoteMessage = _a.quoteMessage,
      sendMessage = _a.sendMessage,
      sendFileMessage = _a.sendFileMessage,
      setQuoteMessage = _a.setQuoteMessage,
      messageInputRef = _a.messageInputRef,
      renderUserMentionItem = _a.renderUserMentionItem;

  var globalStore = useSendbirdStateContext();
  var channel = currentGroupChannel;

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15;
  var onFilePicked = React.useContext(FileInputContext).onFilePicked;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _c = React.useState(""),
      mentionNickname = _c[0],
      setMentionNickname = _c[1];

  var _d = React.useState([]),
      mentionedUsers = _d[0],
      setMentionedUsers = _d[1];

  var _e = React.useState([]),
      mentionedUserIds = _e[0],
      setMentionedUserIds = _e[1];

  var _f = React.useState(null),
      selectedUser = _f[0],
      setSelectedUser = _f[1];

  var _g = React.useState([]),
      mentionSuggestedUsers = _g[0],
      setMentionSuggestedUsers = _g[1];

  var _h = React.useState(true),
      ableMention = _h[0],
      setAbleMention = _h[1];

  var _j = React.useState(null),
      messageInputEvent = _j[0],
      setMessageInputEvent = _j[1];

  var disabled = !initialized || Channel_context.isDisabledBecauseFrozen(channel) || Channel_context.isDisabledBecauseMuted(channel) || !isOnline;
  var isOperator = Channel_context.isOperator(channel);
  var isBroadcast = channel === null || channel === void 0 ? void 0 : channel.isBroadcast;
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !Channel_context.isDisabledBecauseFrozen(channel) && !Channel_context.isDisabledBecauseMuted(channel); // Reset when channel changes

  React.useEffect(function () {
    setMentionNickname("");
    setMentionedUsers([]);
    setMentionedUserIds([]);
    setSelectedUser(null);
    setMentionSuggestedUsers([]);
    setAbleMention(true);
    setMessageInputEvent(null);
  }, [channel === null || channel === void 0 ? void 0 : channel.url]);
  React.useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  React.useEffect(function () {
    setMentionedUsers(mentionedUsers.filter(function (_a) {
      var userId = _a.userId;
      var i = mentionedUserIds.indexOf(userId);

      if (i < 0) {
        return false;
      } else {
        mentionedUserIds.splice(i, 1);
        return true;
      }
    }));
  }, [mentionedUserIds]); // broadcast channel + not operator

  if (isBroadcast && !isOperator) {
    return null;
  } // other conditions


  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper"
  }, displaySuggestedMentionList && /*#__PURE__*/React__default["default"].createElement(Channel_components_SuggestedMentionList, {
    targetNickname: mentionNickname,
    inputEvent: messageInputEvent,
    renderUserMentionItem: renderUserMentionItem,
    onUserItemClick: function (user) {
      if (user) {
        setMentionedUsers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], mentionedUsers, true), [user], false));
      }

      setMentionNickname("");
      setSelectedUser(user);
      setMessageInputEvent(null);
    },
    onFocusItemChange: function () {
      setMessageInputEvent(null);
    },
    onFetchUsers: function (users) {
      setMentionSuggestedUsers(users);
    },
    ableAddMention: ableMention,
    maxMentionCount: maxUserMentionCount,
    maxSuggestionCount: maxUserSuggestionCount
  }), quoteMessage && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper__quote-message-input"
  }, /*#__PURE__*/React__default["default"].createElement(ui_QuoteMessageInput, {
    replyingMessage: quoteMessage,
    onClose: function () {
      return setQuoteMessage(null);
    }
  })), /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    className: "sendbird-message-input-wrapper__message-input",
    channelUrl: channel === null || channel === void 0 ? void 0 : channel.url,
    mentionSelectedUser: selectedUser,
    isMentionEnabled: isMentionEnabled,
    placeholder: quoteMessage && stringSet.MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER || Channel_context.isDisabledBecauseFrozen(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED || Channel_context.isDisabledBecauseMuted(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED,
    ref: messageInputRef,
    disabled: disabled,
    onStartTyping: function () {
      channel === null || channel === void 0 ? void 0 : channel.startTyping();
    },
    onSendMessage: function (_a) {
      var message = _a.message,
          mentionTemplate = _a.mentionTemplate;
      sendMessage({
        message: message,
        quoteMessage: quoteMessage,
        mentionedUsers: mentionedUsers,
        mentionTemplate: mentionTemplate
      });
      setMentionNickname("");
      setMentionedUsers([]);
      setQuoteMessage(null);
      channel === null || channel === void 0 ? void 0 : channel.endTyping();
    },
    onFileUpload: function (file) {
      // TODO: upload to s3
      onFilePicked(file).then(function (result) {
        if (!result) {
          return;
        }

        console.log(result);

        switch (result.type) {
          case "message":
            return sendMessage({
              message: result.message
            });

          case "upload-to-sendbird":
            return sendFileMessage(file, quoteMessage);
        }
      });
      setQuoteMessage(null);
    },
    onUserMentioned: function (user) {
      if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
        setSelectedUser(null);
        setMentionNickname("");
      }
    },
    onMentionStringChange: function (mentionText) {
      setMentionNickname(mentionText);
    },
    onMentionedUserIdsUpdated: function (userIds) {
      setMentionedUserIds(userIds);
    },
    onKeyDown: function (e) {
      if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === _const$1.MessageInputKeys.Enter && ableMention || e.key === _const$1.MessageInputKeys.ArrowUp || e.key === _const$1.MessageInputKeys.ArrowDown)) {
        setMessageInputEvent(e);
        return true;
      }

      return false;
    }
  }));
};

var MessageInputWrapper$1 = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

var ChannelUI = function (_a) {
  var _b, _c, _d, _e;

  var renderPlaceholderLoader = _a.renderPlaceholderLoader,
      renderPlaceholderInvalid = _a.renderPlaceholderInvalid,
      renderPlaceholderEmpty = _a.renderPlaceholderEmpty,
      renderChannelHeader = _a.renderChannelHeader,
      renderMessage = _a.renderMessage,
      renderMessageInput = _a.renderMessageInput,
      renderTypingIndicator = _a.renderTypingIndicator,
      renderCustomSeparator = _a.renderCustomSeparator;

  var _f = Channel_context.useChannelContext(),
      currentGroupChannel = _f.currentGroupChannel,
      channelUrl = _f.channelUrl,
      isInvalid = _f.isInvalid,
      unreadSince = _f.unreadSince,
      loading = _f.loading,
      setInitialTimeStamp = _f.setInitialTimeStamp,
      setAnimatedMessageId = _f.setAnimatedMessageId,
      setHighLightedMessageId = _f.setHighLightedMessageId,
      scrollRef = _f.scrollRef,
      messagesDispatcher = _f.messagesDispatcher;

  var _g = React.useState(0),
      unreadCount = _g[0],
      setUnreadCount = _g[1];

  React.useEffect(function () {
    setUnreadCount(currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount);
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount]);
  var globalStore = useSendbirdStateContext();
  var sdkError = (_c = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.error;
  var logger = (_d = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _d === void 0 ? void 0 : _d.logger;
  var isOnline = (_e = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _e === void 0 ? void 0 : _e.isOnline;

  if (!channelUrl) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (isInvalid) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    }));
  }

  if (sdkError) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG,
      retryToConnect: function () {
        logger.info('Channel: reconnecting'); // reconnect();
      }
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderChannelHeader === null || renderChannelHeader === void 0 ? void 0 : renderChannelHeader()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_ChannelHeader, null), (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && /*#__PURE__*/React__default["default"].createElement(Channel_components_FrozenNotification, null), unreadCount > 0 && /*#__PURE__*/React__default["default"].createElement(Channel_components_UnreadCount, {
    count: unreadCount,
    time: unreadSince,
    onClick: function () {
      var _a, _b, _c;

      setUnreadCount(0);

      if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) {
        scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
      }

      currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.markAsRead();
      messagesDispatcher({
        type: Channel_context.MARK_AS_READ,
        payload: {
          channel: currentGroupChannel
        }
      });
      setInitialTimeStamp(null);
      setAnimatedMessageId(null);
      setHighLightedMessageId(null);
    }
  }), loading ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderPlaceholderLoader === null || renderPlaceholderLoader === void 0 ? void 0 : renderPlaceholderLoader()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.LOADING
  })) : /*#__PURE__*/React__default["default"].createElement(MessageList, {
    renderMessage: renderMessage,
    renderPlaceholderEmpty: renderPlaceholderEmpty,
    renderCustomSeparator: renderCustomSeparator
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer"
  }, (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || /*#__PURE__*/React__default["default"].createElement(MessageInputWrapper$1, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer__typing-indicator"
  }, (renderTypingIndicator === null || renderTypingIndicator === void 0 ? void 0 : renderTypingIndicator()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_TypingIndicator["default"], null), !isOnline && /*#__PURE__*/React__default["default"].createElement(ui_ConnectionStatus, null))));
};

var Channel = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(Channel_context.ChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    isReactionEnabled: props === null || props === void 0 ? void 0 : props.isReactionEnabled,
    isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled,
    showSearchIcon: props === null || props === void 0 ? void 0 : props.showSearchIcon,
    highlightedMessage: props === null || props === void 0 ? void 0 : props.highlightedMessage,
    startingPoint: props === null || props === void 0 ? void 0 : props.startingPoint,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onBeforeUpdateUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeUpdateUserMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    onSearchClick: props === null || props === void 0 ? void 0 : props.onSearchClick,
    replyType: props === null || props === void 0 ? void 0 : props.replyType,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default["default"].createElement(ChannelUI, {
    renderPlaceholderLoader: props === null || props === void 0 ? void 0 : props.renderPlaceholderLoader,
    renderPlaceholderInvalid: props === null || props === void 0 ? void 0 : props.renderPlaceholderInvalid,
    renderPlaceholderEmpty: props === null || props === void 0 ? void 0 : props.renderPlaceholderEmpty,
    renderChannelHeader: props === null || props === void 0 ? void 0 : props.renderChannelHeader,
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput,
    renderTypingIndicator: props === null || props === void 0 ? void 0 : props.renderTypingIndicator,
    renderCustomSeparator: props === null || props === void 0 ? void 0 : props.renderCustomSeparator
  }));
};

/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
const FileInputContext = /*#__PURE__*/React.createContext({
  onFilePicked: file => {
    return {
      type: "upload-to-sendbird"
    };
  },
  externalBucketUrl: "",
  renderCustomMessage: props => {
    return null;
  }
});
function App(props) {
  const {
    appId,
    userId,
    accessToken,
    theme,
    userListQuery,
    nickname,
    profileUrl,
    dateLocale,
    config = {},
    isReactionEnabled,
    isMentionEnabled,
    replyType,
    isMessageGroupingEnabled,
    colorSet,
    stringSet,
    allowProfileEdit,
    disableUserProfile,
    renderUserProfile,
    showSearchIcon,
    onProfileEditSuccess,
    imageCompression,
    disableAutoSelect,
    isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList,
    onFilePicked,
    externalBucketUrl,
    renderCustomMessage
  } = props;
  const [currentChannelUrl, setCurrentChannelUrl] = React.useState(null);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [highlightedMessage, setHighlightedMessage] = React.useState(null);
  const [startingPoint, setStartingPoint] = React.useState(null);
  return /*#__PURE__*/React__default["default"].createElement(FileInputContext.Provider, {
    value: {
      onFilePicked,
      externalBucketUrl,
      renderCustomMessage
    }
  }, /*#__PURE__*/React__default["default"].createElement(SendbirdProvider, {
    stringSet: stringSet,
    appId: appId,
    userId: userId,
    accessToken: accessToken,
    theme: theme,
    nickname: nickname,
    profileUrl: profileUrl,
    dateLocale: dateLocale,
    userListQuery: userListQuery,
    config: config,
    colorSet: colorSet,
    disableUserProfile: disableUserProfile,
    renderUserProfile: renderUserProfile,
    imageCompression: imageCompression,
    isReactionEnabled: isReactionEnabled,
    isMentionEnabled: isMentionEnabled,
    isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__wrap"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__channellist-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList, {
    allowProfileEdit: allowProfileEdit,
    onProfileEditSuccess: onProfileEditSuccess,
    disableAutoSelect: disableAutoSelect,
    onChannelSelect: channel => {
      setStartingPoint(null);
      setHighlightedMessage(null);

      if (channel !== null && channel !== void 0 && channel.url) {
        setCurrentChannelUrl(channel.url);
      } else {
        setCurrentChannelUrl("");
      }
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `
              ${showSettings ? "sendbird-app__conversation--settings-open" : ""}
              ${showSearch ? "sendbird-app__conversation--search-open" : ""}
              sendbird-app__conversation-wrap
            `
  }, /*#__PURE__*/React__default["default"].createElement(Channel, {
    channelUrl: currentChannelUrl,
    onChatHeaderActionClick: () => {
      setShowSearch(false);
      setShowSettings(!showSettings);
    },
    onSearchClick: () => {
      setShowSettings(false);
      setShowSearch(!showSearch);
    },
    showSearchIcon: showSearchIcon,
    startingPoint: startingPoint,
    highlightedMessage: highlightedMessage,
    isReactionEnabled: isReactionEnabled,
    replyType: replyType,
    isMessageGroupingEnabled: isMessageGroupingEnabled
  })), showSettings && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__settingspanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelSettings, {
    className: "sendbird-channel-settings",
    channelUrl: currentChannelUrl,
    onCloseClick: () => {
      setShowSettings(false);
    }
  })), showSearch && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__searchpanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(MessageSearch, {
    channelUrl: currentChannelUrl,
    onResultClick: message => {
      if (message.messageId === highlightedMessage) {
        setHighlightedMessage(null);
        setTimeout(() => {
          setHighlightedMessage(message.messageId);
        });
      } else {
        setStartingPoint(message.createdAt);
        setHighlightedMessage(message.messageId);
      }
    },
    onCloseClick: () => {
      setShowSearch(false);
    }
  })))));
}
App.propTypes = {
  appId: PropTypes__default["default"].string.isRequired,
  userId: PropTypes__default["default"].string.isRequired,
  accessToken: PropTypes__default["default"].string,
  theme: PropTypes__default["default"].string,
  userListQuery: PropTypes__default["default"].func,
  nickname: PropTypes__default["default"].string,
  profileUrl: PropTypes__default["default"].string,
  allowProfileEdit: PropTypes__default["default"].bool,
  disableUserProfile: PropTypes__default["default"].bool,
  renderUserProfile: PropTypes__default["default"].func,
  onProfileEditSuccess: PropTypes__default["default"].func,
  dateLocale: PropTypes__default["default"].shape({}),
  config: PropTypes__default["default"].shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
  }),
  isReactionEnabled: PropTypes__default["default"].bool,
  replyType: PropTypes__default["default"].oneOf(["NONE", "QUOTE_REPLY", "THREAD"]),
  showSearchIcon: PropTypes__default["default"].bool,
  isMessageGroupingEnabled: PropTypes__default["default"].bool,
  stringSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  colorSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  imageCompression: PropTypes__default["default"].shape({
    compressionRate: PropTypes__default["default"].number,
    resizingWidth: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
    resizingHeight: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }),
  disableAutoSelect: PropTypes__default["default"].bool,
  isMentionEnabled: PropTypes__default["default"].bool,
  isTypingIndicatorEnabledOnChannelList: PropTypes__default["default"].bool,
  isMessageReceiptStatusEnabledOnChannelList: PropTypes__default["default"].bool,
  onFilePicked: PropTypes__default["default"].object,
  externalBucketUrl: PropTypes__default["default"].string,
  renderCustomMessage: PropTypes__default["default"].object
};
App.defaultProps = {
  accessToken: "",
  theme: "light",
  nickname: "",
  profileUrl: "",
  userListQuery: null,
  dateLocale: null,
  allowProfileEdit: false,
  onProfileEditSuccess: null,
  disableUserProfile: false,
  showSearchIcon: false,
  renderUserProfile: null,
  config: {},
  isReactionEnabled: true,
  isMentionEnabled: false,
  replyType: "NONE",
  isMessageGroupingEnabled: true,
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  disableAutoSelect: false,
  isTypingIndicatorEnabledOnChannelList: false,
  isMessageReceiptStatusEnabledOnChannelList: false,
  onFilePicked: file => {
    return {
      type: "upload-to-sendbird"
    };
  },
  externalBucketUrl: "",
  renderCustomMessage: props => {
    return null;
  }
};

exports.App = App;
exports.Channel = Channel;
exports.ChannelUI = ChannelUI;
exports.FileInputContext = FileInputContext;
exports.Message = Message;
exports.MessageContent = MessageContent;
exports.MessageInputWrapper = MessageInputWrapper$1;
exports.MessageList = MessageList;
//# sourceMappingURL=index-28047a26.js.map
