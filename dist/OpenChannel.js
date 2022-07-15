import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-622f103b.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-c6c43024.js';
import './stringSet-bc59be04.js';
import './index-7ce5a58a.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-5ef7889e.js';
import 'prop-types';
import './const-fc5867a3.js';
import './const-54c1f5b2.js';
import './ui/IconButton.js';
import './index-d7f84f9a.js';
import './index-dd7d2c20.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-5b610291.js';
import './tslib.es6-5837fd36.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-bf348b66.js';
import './index-b12dead7.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-c14a4189.js';
import './index-f9f73baa.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-16b6b21b.js';
import './utils-338c9de2.js';
import './UserProfileContext-c80e77ff.js';
import './utils-8a45d0ac.js';
import './openChannelUtils-9c778942.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-8de22fb2.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-3ea1545e.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-625ff628.js';
import './openChannel-a64f8d8e.js';
import './__bundle-ba710a09-d0f8c8de.js';

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
