import React__default, { useContext } from 'react';
import Avatar from '../../ui/Avatar.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-d9ca04bb.js';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { u as useOpenChannelContext, k as kFormatter } from '../../OpenChannelProvider-d38b5906.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../ui/ImageRenderer.js';
import 'prop-types';
import '../../uuid-ffa79983.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import '../../index-4cc90022.js';
import '../../UserProfileContext-0d690a96.js';
import '../../compareIds-8f332743.js';
import '../../topics-5b2e6feb.js';
import '../../openChannel-e1be8728.js';
import '../../__bundle-ba710a09-50a7d4d5.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';

function OpenchannelConversationHeader() {
  var stringSet = useContext(LocalizationContext).stringSet;

  var _a = useOpenChannelContext(),
      currentOpenChannel = _a.currentOpenChannel,
      onChatHeaderActionClick = _a.onChatHeaderActionClick,
      amIOperator = _a.amIOperator;

  var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
  var subTitle = "".concat(kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
  var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__left"
  }, coverImage ? /*#__PURE__*/React__default.createElement(Avatar, {
    className: "sendbird-openchannel-conversation-header__left__cover-image",
    src: coverImage,
    alt: "channel cover image",
    width: "32px",
    height: "32px"
  }) : /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__left__cover-image--icon",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CHANNELS,
    fillColor: IconColors.CONTENT,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-conversation-header__left__title",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, title || stringSet.NO_TITLE), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-conversation-header__left__sub-title",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_2
  }, subTitle || stringSet.NO_TITLE)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-header__right"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-openchannel-conversation-header__right__trigger",
    width: "32px",
    height: "32px",
    onClick: onChatHeaderActionClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: amIOperator ? IconTypes.INFO : IconTypes.MEMBERS,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
}

export { OpenchannelConversationHeader as default };
//# sourceMappingURL=OpenChannelHeader.js.map
