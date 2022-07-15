import { a as __spreadArray } from '../../tslib.es6-21381414.js';
import React__default, { useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react';
import { f as format } from '../../index-d9dcc9ce.js';
import SuggestedMentionList from './SuggestedMentionList.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useChannelContext, i as isDisabledBecauseFrozen, a as isDisabledBecauseMuted } from '../../ChannelProvider-25539394.js';
import { k as getClassName } from '../../index-af6c813e.js';
import { M as MAX_USER_MENTION_COUNT, a as MAX_USER_SUGGESTION_COUNT } from '../../const-80c30e70.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-8eb795c0.js';
import MessageInput from '../../ui/MessageInput.js';
import MessageContent from '../../ui/MessageContent.js';
import FileViewer from './FileViewer.js';
import RemoveMessage from './RemoveMessageModal.js';
import { M as MessageInputKeys } from '../../const-eb43aee9.js';
import { u as useLocalization } from '../../LocalizationContext-09cb5078.js';
import '../../index-5b9a7c71.js';
import '../../ui/Icon.js';
import 'prop-types';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-ee711734.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-6a3c1c63.js';
import '../../UserProfileContext-63091e16.js';
import '../../topics-a22af37d.js';
import '../../compareIds-954f7a96.js';
import '../../groupChannel-439dbe93.js';
import '../../__bundle-7dfccc8c-926961b2.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../stringSet-9cd89798.js';
import '../../ui/ReactionButton.js';
import '../../color-ed716a44.js';
import '../../ui/IconButton.js';
import '../../index-8c1601f6.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-20d05a65.js';
import '../../ui/MessageStatus.js';
import '../../ui/Loader.js';
import '../../ui/MessageItemMenu.js';
import '../../ui/MessageItemReactionMenu.js';
import '../../ui/EmojiReactions.js';
import '../../ui/Tooltip.js';
import '../../ui/TooltipWrapper.js';
import '../../ui/ReactionBadge.js';
import '../../ui/AdminMessage.js';
import '../../ui/TextMessageItemBody.js';
import '../../ui/Word.js';
import '../../ui/LinkLabel.js';
import '../../ui/MentionLabel.js';
import '../../ui/FileMessageItemBody.js';
import '../../ui/TextButton.js';
import '../../ui/ThumbnailMessageItemBody.js';
import '../../ui/OGMessageItemBody.js';
import '../../ui/UnknownMessageItemBody.js';
import '../../ui/QuoteMessage.js';
import '../../index-58f6a33c.js';
import '../../ui/Modal.js';

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
  var dateLocale = useLocalization().dateLocale;
  var globalStore = useSendbirdStateContext();

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      userId = _b.userId,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || MAX_USER_MENTION_COUNT;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || MAX_USER_SUGGESTION_COUNT;

  var _c = useChannelContext(),
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

  var _d = useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var _g = useState(false),
      isAnimated = _g[0],
      setIsAnimated = _g[1];

  var _h = useState(false),
      isHighlighted = _h[0],
      setIsHighlighted = _h[1];

  var _j = useState(''),
      mentionNickname = _j[0],
      setMentionNickname = _j[1];

  var _k = useState([]),
      mentionedUsers = _k[0],
      setMentionedUsers = _k[1];

  var _l = useState([]),
      mentionedUserIds = _l[0],
      setMentionedUserIds = _l[1];

  var _m = useState(null),
      messageInputEvent = _m[0],
      setMessageInputEvent = _m[1];

  var _o = useState(null),
      selectedUser = _o[0],
      setSelectedUser = _o[1];

  var _p = useState([]),
      mentionSuggestedUsers = _p[0],
      setMentionSuggestedUsers = _p[1];

  var _q = useState(true),
      ableMention = _q[0],
      setAbleMention = _q[1];

  var editMessageInputRef = useRef(null);
  var useMessageScrollRef = useRef(null);
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !isDisabledBecauseFrozen(currentGroupChannel) && !isDisabledBecauseMuted(currentGroupChannel);
  var disabled = !initialized || isDisabledBecauseFrozen(currentGroupChannel) || isDisabledBecauseMuted(currentGroupChannel) || !isOnline;
  useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  useEffect(function () {
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
  useLayoutEffect(function () {
    handleScroll === null || handleScroll === void 0 ? void 0 : handleScroll();
  }, [showEdit, (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.length]);
  useLayoutEffect(function () {
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
  useLayoutEffect(function () {
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
  var renderedMessage = useMemo(function () {
    return renderMessage === null || renderMessage === void 0 ? void 0 : renderMessage({
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom
    });
  }, [message, renderMessage]);
  var renderedCustomSeparator = useMemo(function () {
    if (renderCustomSeparator) {
      return renderCustomSeparator === null || renderCustomSeparator === void 0 ? void 0 : renderCustomSeparator();
    }

    return null;
  }, [message, renderCustomSeparator]);

  if (renderedMessage) {
    return /*#__PURE__*/React__default.createElement("div", {
      ref: useMessageScrollRef,
      className: getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : ''])
    }, // TODO: Add message instance as a function parameter
    hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
      type: LabelTypography.CAPTION_2,
      color: LabelColors.ONBACKGROUND_2
    }, format(message.createdAt, 'MMMM dd, yyyy', {
      locale: dateLocale
    })))), renderedMessage);
  }

  if (showEdit && message.isUserMessage()) {
    return (renderEditInput === null || renderEditInput === void 0 ? void 0 : renderEditInput()) || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, displaySuggestedMentionList && /*#__PURE__*/React__default.createElement(SuggestedMentionList, {
      targetNickname: mentionNickname,
      inputEvent: messageInputEvent,
      renderUserMentionItem: renderUserMentionItem,
      onUserItemClick: function (user) {
        if (user) {
          setMentionedUsers(__spreadArray(__spreadArray([], mentionedUsers, true), [user], false));
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
    }), /*#__PURE__*/React__default.createElement(MessageInput, {
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
        if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === MessageInputKeys.Enter && ableMention || e.key === MessageInputKeys.ArrowUp || e.key === MessageInputKeys.ArrowDown)) {
          setMessageInputEvent(e);
          return true;
        }

        return false;
      }
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-msg-hoc sendbird-msg--scroll-ref', isAnimated ? 'sendbird-msg-hoc__animated' : '', isHighlighted ? 'sendbird-msg-hoc__highlighted' : '']),
    style: {
      marginBottom: '2px'
    },
    ref: useMessageScrollRef
  }, hasSeparator && (renderedCustomSeparator || /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, format(message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  })))), (renderMessageContent === null || renderMessageContent === void 0 ? void 0 : renderMessageContent()) || /*#__PURE__*/React__default.createElement(MessageContent, {
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
  }), showRemove && /*#__PURE__*/React__default.createElement(RemoveMessage, {
    message: message,
    onCancel: function () {
      return setShowRemove(false);
    }
  }), showFileViewer && /*#__PURE__*/React__default.createElement(FileViewer, {
    message: message,
    onCancel: function () {
      return setShowFileViewer(false);
    }
  }));
};

export { Message as default };
//# sourceMappingURL=Message.js.map
