import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-c7299a1f.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-e63b92dd.js';
import './stringSet-e139b667.js';
import './index-e851fa9b.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-a25c3f8a.js';
import 'prop-types';
import './const-249ebbab.js';
import './const-92587921.js';
import './ui/IconButton.js';
import './index-b422234e.js';
import './index-a401bc58.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-ee45e5fc.js';
import './tslib.es6-1d5f2fa9.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-6e50e4c4.js';
import './index-1acd5943.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-43893ec1.js';
import './index-0daadd03.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-f928ee3e.js';
import './utils-c794f866.js';
import './UserProfileContext-9e885899.js';
import './utils-c19598c1.js';
import './openChannelUtils-ec928990.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-105e93f7.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-e56e31b3.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-a43728b9.js';
import './openChannel-5082ff44.js';
import './__bundle-ba710a09-60e8438d.js';

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
