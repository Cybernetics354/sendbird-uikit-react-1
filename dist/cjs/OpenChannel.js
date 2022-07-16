'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-f800467e.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-7124ef76.js');
require('./stringSet-ca0cf06e.js');
require('./index-80df9998.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-d0fefa20.js');
require('prop-types');
require('./const-af3f8214.js');
require('./const-fb7538f3.js');
require('./ui/IconButton.js');
require('./index-c5f391d0.js');
require('./index-9ad5c786.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-f6c81602.js');
require('./tslib.es6-87d8a6c3.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-cfc8429e.js');
require('./index-09e0347e.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-358d0bff.js');
require('./index-184956b3.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendbird.js');
require('./sendbirdSelectors.js');
require('./topics-55f51c3d.js');
require('./utils-d6de0e43.js');
require('./UserProfileContext-4574eaff.js');
require('./utils-302c7255.js');
require('./openChannelUtils-b0fd401a.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-670a89e1.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-74e1c32a.js');
require('./ui/Modal.js');
require('./useSendbirdStateContext.js');
require('./compareIds-61a570a9.js');
require('./openChannel-94bc2692.js');
require('./__bundle-ba710a09-156cd2ec.js');

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
