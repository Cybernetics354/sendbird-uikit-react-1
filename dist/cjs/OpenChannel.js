'use strict';

var React = require('react');
var OpenChannel_components_OpenChannelUI = require('./OpenChannel/components/OpenChannelUI.js');
var OpenChannel_context = require('./OpenChannelProvider-869db398.js');
require('./OpenChannel/components/OpenChannelInput.js');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./ui/MessageInput.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('prop-types');
require('./const-4be69557.js');
require('./const-13b2476d.js');
require('./ui/IconButton.js');
require('./index-86c744f1.js');
require('./index-2777b3d9.js');
require('./ui/MentionUserLabel.js');
require('./ui/Icon.js');
require('./index-67d733e9.js');
require('./tslib.es6-90bf9fc5.js');
require('./OpenChannel/components/FrozenChannelNotification.js');
require('./OpenChannel/components/OpenChannelHeader.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-04261033.js');
require('./index-354a9223.js');
require('./ui/Loader.js');
require('./OpenChannel/components/OpenChannelMessageList.js');
require('./index-7929fe7e.js');
require('./index-442b142d.js');
require('./OpenChannel/components/OpenChannelMessage.js');
require('./ui/OpenchannelUserMessage.js');
require('./ui/ContextMenu.js');
require('react-dom');
require('./ui/SortByRow.js');
require('./ui/UserProfile.js');
require('./withSendbird.js');
require('./sendbirdSelectors.js');
require('./topics-efe1f803.js');
require('./utils-8f0d7826.js');
require('./UserProfileContext-a3f3d44c.js');
require('./utils-ad5299ea.js');
require('./openChannelUtils-83cf72d0.js');
require('./ui/OpenChannelAdminMessage.js');
require('./ui/OpenchannelOGMessage.js');
require('./ui/LinkLabel.js');
require('./ui/OpenchannelThumbnailMessage.js');
require('./ui/OpenchannelFileMessage.js');
require('./ui/TextButton.js');
require('./color-bc0e6525.js');
require('./ui/DateSeparator.js');
require('./ui/FileViewer.js');
require('./index-675dba65.js');
require('./ui/Modal.js');
require('./useSendbirdStateContext.js');
require('./compareIds-30eeee5f.js');
require('./openChannel-2414f69c.js');
require('./__bundle-ba710a09-5006ce8c.js');

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
