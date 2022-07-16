'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-e0b3c618.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-c4e6256c.js');
require('./stringSet-6c45946e.js');
require('./index-5a900a14.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-95f9644b.js');
require('prop-types');
require('./const-c035bdfd.js');
require('./const-7bb52067.js');
require('./ui/IconButton.js');
require('./index-d3743106.js');
require('./index-9235a70d.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-442b2a43.js');
require('./tslib.es6-79d6c001.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-35ad849a.js');
require('./index-64607ce1.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-9025a406.js');
require('./index-e992811c.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendbird.js');
require('./sendbirdSelectors.js');
require('./topics-9033c412.js');
require('./utils-787f6393.js');
require('./UserProfileContext-7343163c.js');
require('./utils-6250a84b.js');
require('./openChannelUtils-35f6e0be.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-65c1a1ff.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-c0ef2913.js');
require('./ui/Modal.js');
require('./useSendbirdStateContext.js');
require('./compareIds-3c8f7012.js');
require('./openChannel-3debd87b.js');
require('./__bundle-ba710a09-aa384520.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OpenChannel = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(OpenChannel_context.OpenChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelUI, {
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderInput: props === null || props === void 0 ? void 0 : props.renderInput,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

module.exports = OpenChannel;
//# sourceMappingURL=OpenChannel.js.map
