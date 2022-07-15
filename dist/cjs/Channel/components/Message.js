'use strict';

var tslib_es6 = require('../../tslib.es6-c9f1dea2.js');
var React = require('react');
var index$1 = require('../../index-81be9e1d.js');
var Channel_components_SuggestedMentionList = require('./SuggestedMentionList.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../../ChannelProvider-25c55d83.js');
var index = require('../../index-029c9c4b.js');
var _const = require('../../const-a82a653e.js');
var ui_DateSeparator = require('../../ui/DateSeparator.js');
var ui_Label = require('../../index-7309809e.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var ui_MessageContent = require('../../ui/MessageContent.js');
var Channel_components_FileViewer = require('./FileViewer.js');
var Channel_components_RemoveMessageModal = require('./RemoveMessageModal.js');
var _const$1 = require('../../const-f7b68670.js');
var LocalizationContext = require('../../LocalizationContext-219f1540.js');
require('../../index-6ada6170.js');
require('../../ui/Icon.js');
require('prop-types');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-428cb2f7.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-404a108a.js');
require('../../UserProfileContext-b48e5176.js');
require('../../topics-0f4db8a1.js');
require('../../compareIds-87d05f16.js');
require('../../groupChannel-665fb651.js');
require('../../__bundle-ba710a09-a84711b1.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../stringSet-49111b06.js');
require('../../ui/ReactionButton.js');
require('../../color-bea80080.js');
require('../../ui/IconButton.js');
require('../../index-50918912.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../utils-703c21fc.js');
require('../../ui/MessageStatus.js');
require('../../ui/Loader.js');
require('../../ui/MessageItemMenu.js');
require('../../ui/MessageItemReactionMenu.js');
require('../../ui/EmojiReactions.js');
require('../../ui/Tooltip.js');
require('../../ui/TooltipWrapper.js');
require('../../ui/ReactionBadge.js');
require('../../ui/AdminMessage.js');
require('../../ui/TextMessageItemBody.js');
require('../../ui/Word.js');
require('../../ui/LinkLabel.js');
require('../../ui/MentionLabel.js');
require('../../ui/FileMessageItemBody.js');
require('../../ui/TextButton.js');
require('../../ui/ThumbnailMessageItemBody.js');
require('../../ui/OGMessageItemBody.js');
require('../../ui/UnknownMessageItemBody.js');
require('../../ui/QuoteMessage.js');
require('../../index-b13049fa.js');
require('../../ui/Modal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  })))), (renderMessageContent === null || renderMessageContent === void 0 ? void 0 : renderMessageContent()) || /*#__PURE__*/React__default["default"].createElement(ui_MessageContent, {
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

module.exports = Message;
//# sourceMappingURL=Message.js.map
