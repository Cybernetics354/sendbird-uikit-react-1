'use strict';

var React = require('react');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Label = require('../../index-9235a70d.js');
var LocalizationContext = require('../../LocalizationContext-c4e6256c.js');
var OpenChannel_context = require('../../OpenChannelProvider-e0b3c618.js');
require('../../tslib.es6-79d6c001.js');
require('../../ui/ImageRenderer.js');
require('prop-types');
require('../../uuid-35ad849a.js');
require('../../_rollupPluginBabelHelpers-95f9644b.js');
require('../../stringSet-6c45946e.js');
require('../../index-5a900a14.js');
require('../../index-e992811c.js');
require('../../UserProfileContext-7343163c.js');
require('../../compareIds-3c8f7012.js');
require('../../topics-9033c412.js');
require('../../openChannel-3debd87b.js');
require('../../__bundle-ba710a09-aa384520.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenchannelConversationHeader() {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _a = OpenChannel_context.useOpenChannelContext(),
      currentOpenChannel = _a.currentOpenChannel,
      onChatHeaderActionClick = _a.onChatHeaderActionClick,
      amIOperator = _a.amIOperator;

  var title = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.name;
  var subTitle = "".concat(OpenChannel_context.kFormatter(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.participantCount), " ").concat(stringSet.OPEN_CHANNEL_CONVERSATION__TITLE_PARTICIPANTS);
  var coverImage = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.coverUrl;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__left"
  }, coverImage ? /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    className: "sendbird-openchannel-conversation-header__left__cover-image",
    src: coverImage,
    alt: "channel cover image",
    width: "32px",
    height: "32px"
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__left__cover-image--icon",
    style: {
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CHANNELS,
    fillColor: ui_Icon.IconColors.CONTENT,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-conversation-header__left__title",
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, title || stringSet.NO_TITLE), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-openchannel-conversation-header__left__sub-title",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, subTitle || stringSet.NO_TITLE)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-header__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    className: "sendbird-openchannel-conversation-header__right__trigger",
    width: "32px",
    height: "32px",
    onClick: onChatHeaderActionClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: amIOperator ? ui_Icon.IconTypes.INFO : ui_Icon.IconTypes.MEMBERS,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
}

module.exports = OpenchannelConversationHeader;
//# sourceMappingURL=OpenChannelHeader.js.map
