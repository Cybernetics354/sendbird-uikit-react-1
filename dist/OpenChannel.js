import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-2951d70b.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-bdb56d81.js';
import './stringSet-1cad1dbf.js';
import './index-8d5e2563.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-5522a8f6.js';
import 'prop-types';
import './const-f5c14b82.js';
import './const-1cfee98a.js';
import './ui/IconButton.js';
import './index-1187996f.js';
import './index-96f2ca18.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-f2c869d7.js';
import './tslib.es6-6b1ce61a.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-21b2a5db.js';
import './index-fc9ccd03.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-7183b40a.js';
import './index-6e7e7eaa.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-e87f2985.js';
import './utils-d6f171ef.js';
import './UserProfileContext-7c91714e.js';
import './utils-698a3c6a.js';
import './openChannelUtils-54e03a56.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-717a18f9.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-deb6aab1.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-14392765.js';
import './openChannel-64614117.js';
import './__bundle-ba710a09-e080d3fa.js';

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
