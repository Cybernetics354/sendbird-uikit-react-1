'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_ChannelAvatar = require('./ChannelAvatar.js');
var ui_Badge = require('./Badge.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-2777b3d9.js');
var LocalizationContext = require('../LocalizationContext-b96a3e25.js');
var index = require('../index-4d90133e.js');
var index$1 = require('../index-442b142d.js');
var index$2 = require('../index-67d733e9.js');
require('./Avatar.js');
require('../tslib.es6-90bf9fc5.js');
require('./ImageRenderer.js');
require('../uuid-04261033.js');
require('../utils-2ed63c9b.js');
require('../stringSet-c701d85c.js');
require('../index-30aacb0e.js');
require('../index-7929fe7e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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

function ChannelPreview(_ref) {
  let {
    channel,
    currentUser,
    isActive,
    ChannelAction,
    theme,
    onClick,
    tabIndex
  } = _ref;
  const {
    userId
  } = currentUser;
  const isFrozen = channel === null || channel === void 0 ? void 0 : channel.isFrozen;
  const isBroadcast = channel === null || channel === void 0 ? void 0 : channel.isBroadcast;
  const {
    dateLocale,
    stringSet
  } = LocalizationContext.useLocalization();
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
  }))), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__upper__last-message-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, getLastMessageCreatedAt(channel, dateLocale))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-preview__content__lower__last-message",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, getLastMessage(channel)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__content__lower__unread-message-count"
  }, getChannelUnreadMessageCount(channel) // return number
  ? /*#__PURE__*/React__default["default"].createElement(ui_Badge, {
    count: getChannelUnreadMessageCount(channel)
  }) : null))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-preview__action"
  }, ChannelAction));
}
ChannelPreview.propTypes = {
  /** Type: GroupChannel / OpenChannel(Not tested) */
  channel: PropTypes__default["default"].shape({
    members: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({})),
    coverUrl: PropTypes__default["default"].string,
    isBroadcast: PropTypes__default["default"].bool,
    isFrozen: PropTypes__default["default"].bool
  }),

  /** Type: User */
  currentUser: PropTypes__default["default"].shape({
    userId: PropTypes__default["default"].string
  }),
  isActive: PropTypes__default["default"].bool,

  /** To render dropdown menu */
  ChannelAction: PropTypes__default["default"].element.isRequired,
  theme: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  tabIndex: PropTypes__default["default"].number
};
ChannelPreview.defaultProps = {
  channel: {},
  currentUser: {},
  isActive: false,
  theme: 'light',
  onClick: () => {},
  tabIndex: 0
};

module.exports = ChannelPreview;
//# sourceMappingURL=ChannelPreview.js.map
