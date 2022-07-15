import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-96d2b192.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-09cb5078.js';
import './stringSet-9cd89798.js';
import './index-5b9a7c71.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-6a3c1c63.js';
import 'prop-types';
import './const-eb43aee9.js';
import './const-80c30e70.js';
import './ui/IconButton.js';
import './index-8c1601f6.js';
import './index-8eb795c0.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-af6c813e.js';
import './tslib.es6-21381414.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-ee711734.js';
import './index-0f0112ef.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-0ede53fb.js';
import './index-d9dcc9ce.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-a22af37d.js';
import './utils-20d05a65.js';
import './UserProfileContext-63091e16.js';
import './utils-c5f0e02b.js';
import './openChannelUtils-07a41ae6.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-ed716a44.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-58f6a33c.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-954f7a96.js';
import './openChannel-5f15f91b.js';
import './__bundle-7dfccc8c-926961b2.js';

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
