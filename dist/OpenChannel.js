import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-d38b5906.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-6b2a3bfd.js';
import './stringSet-bfbe6996.js';
import './index-139e5f19.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-42f11fe4.js';
import 'prop-types';
import './const-cb851d82.js';
import './const-b6b0314e.js';
import './ui/IconButton.js';
import './index-fc0130a5.js';
import './index-d9ca04bb.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-5ddc9ee9.js';
import './tslib.es6-5cbf2d41.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-ffa79983.js';
import './index-026bbb79.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-85f5245b.js';
import './index-4cc90022.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-5b2e6feb.js';
import './utils-1fc25d9a.js';
import './UserProfileContext-0d690a96.js';
import './utils-5e6c9d4e.js';
import './openChannelUtils-b2f974d4.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-395a9ce9.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-ec60ce57.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-8f332743.js';
import './openChannel-e1be8728.js';
import './__bundle-ba710a09-50a7d4d5.js';

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
