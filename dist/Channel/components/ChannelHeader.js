import React__default, { useContext } from 'react';
import { c as LabelStringSet, L as Label, a as LabelTypography, b as LabelColors } from '../../index-ed7103e1.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useChannelContext } from '../../ChannelProvider-1874bbe2.js';
import 'prop-types';
import '../../stringSet-acf9d2a1.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-4b033040.js';
import '../../utils-cbdd30a8.js';
import '../../index-527c3bc4.js';
import '../../withSendbird.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../index-2133a7e3.js';
import '../../topics-fc458762.js';
import '../../index-bb395be0.js';
import '../../compareIds-92f2c773.js';
import '../../const-b8ee874a.js';
import '../../groupChannel-e68120a4.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';

var getChannelTitle = function (channel, currentUserId, stringSet) {
  var _a;

  var LABEL_STRING_SET = stringSet || LabelStringSet;

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
  var channelStore = useChannelContext();
  var currentGroupChannel = channelStore.currentGroupChannel,
      showSearchIcon = channelStore.showSearchIcon,
      onSearchClick = channelStore.onSearchClick,
      onChatHeaderActionClick = channelStore.onChatHeaderActionClick;
  var subTitle = (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.members) && ((_c = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.members) === null || _c === void 0 ? void 0 : _c.length) !== 2;
  var isMuted = (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.myMutedState) === "muted";
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header__left"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    theme: theme,
    channel: currentGroupChannel,
    userId: userId,
    height: 32,
    width: 32
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-chat-header__left__title",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, getChannelTitle(currentGroupChannel, userId, stringSet)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-chat-header__left__subtitle",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, subTitle)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header__right"
  }, (typeof isMuted === 'string' && isMuted === 'true' || typeof isMuted === 'boolean' && isMuted) && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-chat-header__right__mute",
    type: IconTypes.NOTIFICATIONS_OFF_FILLED,
    width: "24px",
    height: "24px"
  }), showSearchIcon && /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-chat-header__right__search",
    width: "32px",
    height: "32px",
    onClick: onSearchClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SEARCH,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-chat-header__right__info",
    width: "32px",
    height: "32px",
    onClick: onChatHeaderActionClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.INFO,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
};

export { ChatHeader as default };
//# sourceMappingURL=ChannelHeader.js.map
