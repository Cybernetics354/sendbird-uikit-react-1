import React__default from 'react';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import Badge from '../../ui/Badge.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { c as LabelStringSet, L as Label, a as LabelTypography, b as LabelColors } from '../../index-53585fab.js';
import { i as isToday, a as isYesterday, f as formatRelative } from '../../index-09009892.js';
import { f as format } from '../../index-35d9a787.js';
import { t as truncateString, q as isEditedMessage } from '../../index-fcb040ec.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useLocalization } from '../../LocalizationContext-d3e49456.js';
import MentionUserLabel from '../../ui/MentionUserLabel.js';
import { u as useChannelListContext } from '../../ChannelListProvider-0dc39a40.js';
import { TypingIndicatorText } from '../../Channel/components/TypingIndicator.js';
import MessageStatus from '../../ui/MessageStatus.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../ui/ImageRenderer.js';
import 'prop-types';
import '../../uuid-91011cda.js';
import '../../utils-aa207dba.js';
import '../../stringSet-49030004.js';
import '../../index-72d0c1dd.js';
import '../../index-a53c3ed1.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../groupChannel-9122d8b4.js';
import '../../__bundle-ba710a09-7de40396.js';
import '../../topics-480e2d9e.js';
import '../../utils-87c63da6.js';
import '../../UserProfileContext-153af432.js';
import '../../ChannelProvider-3db0a059.js';
import '../../compareIds-6991be9c.js';
import '../../const-f8fb2a4c.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/Loader.js';

const getChannelTitle = function () {
  var _channel$members;

  let channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let currentUserId = arguments.length > 1 ? arguments[1] : undefined;
  let stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LabelStringSet;

  if (!(channel !== null && channel !== void 0 && channel.name) && !(channel !== null && channel !== void 0 && channel.members)) {
    return stringSet.NO_TITLE;
  }

  if (channel !== null && channel !== void 0 && channel.name && channel.name !== 'Group Channel') {
    return channel.name;
  }

  if ((channel === null || channel === void 0 ? void 0 : (_channel$members = channel.members) === null || _channel$members === void 0 ? void 0 : _channel$members.length) === 1) {
    return stringSet.NO_MEMBERS;
  }

  return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).filter(_ref => {
    let {
      userId
    } = _ref;
    return userId !== currentUserId;
  }).map(_ref2 => {
    let {
      nickname
    } = _ref2;
    return nickname || stringSet.NO_NAME;
  }).join(', ');
};
const getLastMessageCreatedAt = (channel, locale) => {
  var _channel$lastMessage;

  const createdAt = channel === null || channel === void 0 ? void 0 : (_channel$lastMessage = channel.lastMessage) === null || _channel$lastMessage === void 0 ? void 0 : _channel$lastMessage.createdAt;
  const optionalParam = locale ? {
    locale
  } : null;

  if (!createdAt) {
    return '';
  }

  if (isToday(createdAt)) {
    return format(createdAt, 'p', optionalParam);
  }

  if (isYesterday(createdAt)) {
    return formatRelative(createdAt, new Date(), optionalParam);
  }

  return format(createdAt, 'MMM dd', optionalParam);
};
const getTotalMembers = channel => channel !== null && channel !== void 0 && channel.memberCount ? channel.memberCount : 0;

const getPrettyLastMessage = function () {
  let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const MAXLEN = 30;
  const {
    messageType,
    name
  } = message;

  if (messageType === 'file') {
    return truncateString(name, MAXLEN);
  }

  return message.message;
};

const getLastMessage = channel => channel !== null && channel !== void 0 && channel.lastMessage ? getPrettyLastMessage(channel.lastMessage) : '';
const getChannelUnreadMessageCount = channel => channel !== null && channel !== void 0 && channel.unreadMessageCount ? channel.unreadMessageCount : 0;

var ChannelPreview = function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k;

  var channel = _a.channel,
      _l = _a.isActive,
      isActive = _l === void 0 ? false : _l,
      _m = _a.isTyping,
      isTyping = _m === void 0 ? false : _m,
      renderChannelAction = _a.renderChannelAction,
      onClick = _a.onClick,
      tabIndex = _a.tabIndex;
  var sbState = useSendbirdStateContext();

  var _o = useChannelListContext(),
      _p = _o.isTypingIndicatorEnabled,
      isTypingIndicatorEnabled = _p === void 0 ? false : _p,
      _q = _o.isMessageReceiptStatusEnabled,
      isMessageReceiptStatusEnabled = _q === void 0 ? false : _q;

  var _r = useLocalization(),
      dateLocale = _r.dateLocale,
      stringSet = _r.stringSet;

  var userId = (_d = (_c = (_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
  var theme = (_e = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _e === void 0 ? void 0 : _e.theme;
  var isMentionEnabled = (_f = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _f === void 0 ? void 0 : _f.isMentionEnabled;
  var isFrozen = (channel === null || channel === void 0 ? void 0 : channel.isFrozen) || false;
  var isBroadcast = (channel === null || channel === void 0 ? void 0 : channel.isBroadcast) || false;
  var isChannelTyping = isTypingIndicatorEnabled && isTyping;
  var isMessageStatusEnabled = isMessageReceiptStatusEnabled && (((_g = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _g === void 0 ? void 0 : _g.messageType) === 'user' || ((_h = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _h === void 0 ? void 0 : _h.messageType) === 'file') && ((_k = (_j = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _j === void 0 ? void 0 : _j.sender) === null || _k === void 0 ? void 0 : _k.userId) === userId;
  return /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-channel-preview', isActive ? 'sendbird-channel-preview--active' : ''].join(' '),
    role: "link",
    onClick: onClick,
    onKeyPress: onClick,
    tabIndex: tabIndex
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__avatar"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper__header"
  }, isBroadcast && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__upper__header__broadcast-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.BROADCAST,
    fillColor: IconColors.SECONDARY,
    height: "16px",
    width: "16px"
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__header__channel-name",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, getChannelTitle(channel, userId, stringSet)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__header__total-members",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, getTotalMembers(channel)), isFrozen && /*#__PURE__*/React__default.createElement("div", {
    title: "Frozen",
    className: "sendbird-channel-preview__content__upper__header__frozen-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.FREEZE,
    fillColor: IconColors.PRIMARY,
    height: 12,
    width: 12
  }))), isMessageStatusEnabled ? /*#__PURE__*/React__default.createElement(MessageStatus, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    channel: channel,
    message: channel === null || channel === void 0 ? void 0 : channel.lastMessage
  }) : /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, isChannelTyping && /*#__PURE__*/React__default.createElement(TypingIndicatorText, {
    members: channel === null || channel === void 0 ? void 0 : channel.getTypingUsers()
  }), !isChannelTyping && getLastMessage(channel) + (isEditedMessage(channel === null || channel === void 0 ? void 0 : channel.lastMessage) ? " ".concat(stringSet.MESSAGE_EDITED) : '')), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, isMentionEnabled && (channel === null || channel === void 0 ? void 0 : channel.unreadMentionCount) > 0 ? /*#__PURE__*/React__default.createElement(MentionUserLabel, {
    className: "sendbird-channel-preview__content__lower__unread-message-count__mention",
    color: "purple"
  }, '@') : null, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default.createElement(Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-preview__action"
  }, renderChannelAction({
    channel: channel
  })));
};

export { ChannelPreview as default };
//# sourceMappingURL=ChannelPreview.js.map
