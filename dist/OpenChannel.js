import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-c172bbe1.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-12a49911.js';
import './stringSet-1980c44a.js';
import './index-f2df602e.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-edb8daf2.js';
import 'prop-types';
import './const-8515f91a.js';
import './const-169ab7cc.js';
import './ui/IconButton.js';
import './index-6b3586e6.js';
import './index-b990bb50.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-5075c241.js';
import './tslib.es6-7262cbaf.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-5ca3889a.js';
import './index-e36dbc48.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-37a7f86a.js';
import './index-2580d704.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-de8d1abb.js';
import './utils-67d0347a.js';
import './UserProfileContext-82d9c025.js';
import './utils-d4407aa5.js';
import './openChannelUtils-3d206439.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-5ff88e0d.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-4a28b1a1.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-01d1c3e1.js';
import './openChannel-dd56e39d.js';
import './__bundle-ba710a09-f2231fe3.js';

var OpenChannel = function (props) {
  return /*#__PURE__*/React__default.createElement(OpenChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    messageLimit: props === null || props === void 0 ? void 0 : props.messageLimit,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default.createElement(OpenChannelUI, {
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderInput: props === null || props === void 0 ? void 0 : props.renderInput,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { OpenChannel as default };
//# sourceMappingURL=OpenChannel.js.map
