import React__default, { useContext } from 'react';
import Avatar from '../../ui/Avatar.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import IconButton from '../../ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-a401bc58.js';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { u as useOpenChannelContext, k as kFormatter } from '../../OpenChannelProvider-c7299a1f.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../ui/ImageRenderer.js';
import 'prop-types';
import '../../uuid-6e50e4c4.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import '../../index-0daadd03.js';
import '../../UserProfileContext-9e885899.js';
import '../../compareIds-a43728b9.js';
import '../../topics-f928ee3e.js';
import '../../openChannel-5082ff44.js';
import '../../__bundle-ba710a09-60e8438d.js';
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
