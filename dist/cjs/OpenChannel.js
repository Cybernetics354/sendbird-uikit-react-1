'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-830b8e4c.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('prop-types');
require('./const-295db437.js');
require('./const-a4d49809.js');
require('./ui/IconButton.js');
require('./index-51cd7ad2.js');
require('./index-2dfdb9de.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-6292ff33.js');
require('./tslib.es6-bd7bd76d.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-d427ce45.js');
require('./index-2b606866.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-c173eafb.js');
require('./index-09c690af.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendbird.js');
require('./sendbirdSelectors.js');
require('./topics-9b308b83.js');
require('./utils-ae4d63e2.js');
require('./UserProfileContext-24790fe2.js');
require('./utils-31fb5def.js');
require('./openChannelUtils-0447ba44.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-35fbd517.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-77afdf6b.js');
require('./ui/Modal.js');
require('./useSendbirdStateContext.js');
require('./compareIds-9caf1355.js');
require('./openChannel-d0283ff1.js');
require('./__bundle-ba710a09-af5d7380.js');

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
