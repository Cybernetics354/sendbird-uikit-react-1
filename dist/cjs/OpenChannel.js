'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-6caff9d3.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('prop-types');
require('./const-538ffca7.js');
require('./const-e7009964.js');
require('./ui/IconButton.js');
require('./index-a189c9f3.js');
require('./index-1ac2a868.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-8daa2cfb.js');
require('./tslib.es6-c3158c01.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-11d3ef5e.js');
require('./index-25c36c94.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-749e1f81.js');
require('./index-52d3e5e9.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendbird.js');
require('./sendbirdSelectors.js');
require('./topics-1218aada.js');
require('./utils-f60a9a5a.js');
require('./UserProfileContext-80f2ddb9.js');
require('./utils-fee91431.js');
require('./openChannelUtils-1a041bb3.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-334c9fb8.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-6e41140f.js');
require('./ui/Modal.js');
require('./useSendbirdStateContext.js');
require('./compareIds-99bee171.js');
require('./openChannel-b20cd052.js');
require('./__bundle-ba710a09-8573aa4e.js');

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
