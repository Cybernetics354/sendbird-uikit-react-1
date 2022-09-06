'use strict';

var React = require('react');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../../ChannelProvider-c0942911.js');
require('prop-types');
require('../../stringSet-c8c286da.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../ui/Avatar.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-d427ce45.js');
require('../../utils-0e1ac091.js');
require('../../index-10f7dd53.js');
require('../../withSendbird.js');
require('../../UserProfileContext-24790fe2.js');
require('../../index-09c690af.js');
require('../../topics-9b308b83.js');
require('../../index-6292ff33.js');
require('../../compareIds-9caf1355.js');
require('../../const-a4d49809.js');
require('../../groupChannel-a8a4082b.js');
require('../../__bundle-ba710a09-af5d7380.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var getChannelTitle = function (channel, currentUserId, stringSet) {
  var _a;

  var LABEL_STRING_SET = stringSet || ui_Label.LabelStringSet;

  if (!(channel === null || channel === void 0 ? void 0 : channel.name) && !(channel === null || channel === void 0 ? void 0 : channel.members)) {
    return LABEL_STRING_SET.NO_TITLE;
  }

  if ((channel === null || channel === void 0 ? void 0 : channel.name) && channel.name !== 'Group Channel') {
    return channel.name;
  }

  if (((_a = channel === null || channel === void 0 ? void 0 : channel.members) === null || _a === void 0 ? void 0 : _a.length) === 1) {
    return LABEL_STRING_SET.NO_MEMBERS;
  }

  return channel === null || channel === void 0 ? void 0 : channel.members.filter(function (_a) {
    var userId = _a.userId;
    return userId !== currentUserId;
  }).map(function (_a) {
    var nickname = _a.nickname;
    return nickname || LABEL_STRING_SET.NO_NAME;
  }).join(', ');
};

var ChatHeader = function () {
  var _a, _b, _c;

  var globalStore = useSendbirdStateContext();
  var userId = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.theme;
  var channelStore = Channel_context.useChannelContext();
  var currentGroupChannel = channelStore.currentGroupChannel,
      showSearchIcon = channelStore.showSearchIcon,
      onSearchClick = channelStore.onSearchClick,
      onChatHeaderActionClick = channelStore.onChatHeaderActionClick;
  var subTitle = (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.members) && ((_c = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.members) === null || _c === void 0 ? void 0 : _c.length) !== 2;
  var isMuted = (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.myMutedState) === "muted";
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-chat-header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-chat-header__left"
  }, /*#__PURE__*/React__default["default"].createElement(ui_ChannelAvatar, {
    theme: theme,
    channel: currentGroupChannel,
    userId: userId,
    height: 32,
    width: 32
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-chat-header__left__title",
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, getChannelTitle(currentGroupChannel, userId, stringSet)), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-chat-header__left__subtitle",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, subTitle)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-chat-header__right"
  }, (typeof isMuted === 'string' && isMuted === 'true' || typeof isMuted === 'boolean' && isMuted) && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-chat-header__right__mute",
    type: ui_Icon.IconTypes.NOTIFICATIONS_OFF_FILLED,
    width: "24px",
    height: "24px"
  }), showSearchIcon && /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    className: "sendbird-chat-header__right__search",
    width: "32px",
    height: "32px",
    onClick: onSearchClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SEARCH,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    className: "sendbird-chat-header__right__info",
    width: "32px",
    height: "32px",
    onClick: onChatHeaderActionClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.INFO,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
};

module.exports = ChatHeader;
//# sourceMappingURL=ChannelHeader.js.map
