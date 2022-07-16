import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-a6e62fa0.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-6dc0d190.js';
import './stringSet-acf9d2a1.js';
import './index-527c3bc4.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-2c484fe0.js';
import 'prop-types';
import './const-79bcca88.js';
import './const-b8ee874a.js';
import './ui/IconButton.js';
import './index-28e59bab.js';
import './index-ed7103e1.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-bb395be0.js';
import './tslib.es6-bdfb18b0.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-4b033040.js';
import './index-92e8a1d4.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-567adb28.js';
import './index-2133a7e3.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-fc458762.js';
import './utils-c830dbcc.js';
import './UserProfileContext-c84a4f87.js';
import './utils-40f3dba3.js';
import './openChannelUtils-6de2dcb3.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-9d1ce766.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-bf6cbc46.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-92f2c773.js';
import './openChannel-1ee60e13.js';
import './__bundle-ba710a09-4a7e5f3a.js';

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
