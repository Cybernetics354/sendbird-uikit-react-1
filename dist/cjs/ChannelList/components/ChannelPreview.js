'use strict';

var React = require('react');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var ui_Badge = require('../../ui/Badge.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Label = require('../../index-9235a70d.js');
var index = require('../../index-36d68224.js');
var index$1 = require('../../index-e992811c.js');
var index$2 = require('../../index-442b2a43.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var LocalizationContext = require('../../LocalizationContext-c4e6256c.js');
var ui_MentionUserLabel = require('../../ui/MentionUserLabel.js');
var ChannelList_context = require('../../ChannelListProvider-ed0c59af.js');
var Channel_components_TypingIndicator = require('../../Channel/components/TypingIndicator.js');
var ui_MessageStatus = require('../../ui/MessageStatus.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-79d6c001.js');
require('../../ui/ImageRenderer.js');
require('prop-types');
require('../../uuid-35ad849a.js');
require('../../utils-277d6b83.js');
require('../../stringSet-6c45946e.js');
require('../../index-9025a406.js');
require('../../index-5a900a14.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-95f9644b.js');
require('../../groupChannel-506f10a9.js');
require('../../__bundle-ba710a09-aa384520.js');
require('../../topics-9033c412.js');
require('../../utils-787f6393.js');
require('../../UserProfileContext-7343163c.js');
require('../../ChannelProvider-c6834144.js');
require('../../compareIds-3c8f7012.js');
require('../../const-7bb52067.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/Loader.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getChannelTitle = function () {
  var _channel$members;

  let channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let currentUserId = arguments.length > 1 ? arguments[1] : undefined;
  let stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ui_Label.LabelStringSet;

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

  if (index.isToday(createdAt)) {
    return index$1.format(createdAt, 'p', optionalParam);
  }

  if (index.isYesterday(createdAt)) {
    return index.formatRelative(createdAt, new Date(), optionalParam);
  }

  return index$1.format(createdAt, 'MMM dd', optionalParam);
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
    return index$2.truncateString(name, MAXLEN);
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

  var _o = ChannelList_context.useChannelListContext(),
      _p = _o.isTypingIndicatorEnabled,
      isTypingIndicatorEnabled = _p === void 0 ? false : _p,
      _q = _o.isMessageReceiptStatusEnabled,
      isMessageReceiptStatusEnabled = _q === void 0 ? false : _q;

  var _r = LocalizationContext.useLocalization(),
      dateLocale = _r.dateLocale,
      stringSet = _r.stringSet;

  var userId = (_d = (_c = (_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d.userId;
  var theme = (_e = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _e === void 0 ? void 0 : _e.theme;
  var isMentionEnabled = (_f = sbState === null || sbState === void 0 ? void 0 : sbState.config) === null || _f === void 0 ? void 0 : _f.isMentionEnabled;
  var isFrozen = (channel === null || channel === void 0 ? void 0 : channel.isFrozen) || false;
  var isBroadcast = (channel === null || channel === void 0 ? void 0 : channel.isBroadcast) || false;
  var isChannelTyping = isTypingIndicatorEnabled && isTyping;
  var isMessageStatusEnabled = isMessageReceiptStatusEnabled && (((_g = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _g === void 0 ? void 0 : _g.messageType) === 'user' || ((_h = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _h === void 0 ? void 0 : _h.messageType) === 'file') && ((_k = (_j = channel === null || channel === void 0 ? void 0 : channel.lastMessage) === null || _j === void 0 ? void 0 : _j.sender) === null || _k === void 0 ? void 0 : _k.userId) === userId;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-channel-preview', isActive ? 'sendbird-channel-preview--active' : ''].join(' '),
    role: "link",
    onClick: onClick,
    onKeyPress: onClick,
    tabIndex: tabIndex
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper__header"
  }, isBroadcast && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__upper__header__broadcast-icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.BROADCAST,
    fillColor: ui_Icon.IconColors.SECONDARY,
    height: "16px",
    width: "16px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__upper__header__channel-name",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, getChannelTitle(channel, userId, stringSet)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__upper__header__total-members",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, getTotalMembers(channel)), isFrozen && /*#__PURE__*/React__default["default"].createElement("div", {
    title: "Frozen",
    className: "sendbird-channel-preview__content__upper__header__frozen-icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.FREEZE,
    fillColor: ui_Icon.IconColors.PRIMARY,
    height: 12,
    width: 12
  }))), isMessageStatusEnabled ? /*#__PURE__*/React__default["default"].createElement(ui_MessageStatus["default"], {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    channel: channel,
    message: channel === null || channel === void 0 ? void 0 : channel.lastMessage
  }) : /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, isChannelTyping && /*#__PURE__*/React__default["default"].createElement(Channel_components_TypingIndicator.TypingIndicatorText, {
    members: channel === null || channel === void 0 ? void 0 : channel.getTypingUsers()
  }), !isChannelTyping && getLastMessage(channel) + (index$2.isEditedMessage(channel === null || channel === void 0 ? void 0 : channel.lastMessage) ? " ".concat(stringSet.MESSAGE_EDITED) : '')), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, isMentionEnabled && (channel === null || channel === void 0 ? void 0 : channel.unreadMentionCount) > 0 ? /*#__PURE__*/React__default["default"].createElement(ui_MentionUserLabel, {
    className: "sendbird-channel-preview__content__lower__unread-message-count__mention",
    color: "purple"
  }, '@') : null, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default["default"].createElement(ui_Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__action"
  }, renderChannelAction({
    channel: channel
  })));
};

module.exports = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map
