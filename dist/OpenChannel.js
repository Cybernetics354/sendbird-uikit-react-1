import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-c3332d15.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-d3e49456.js';
import './stringSet-49030004.js';
import './index-a53c3ed1.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-59897f6c.js';
import 'prop-types';
import './const-e626a5c7.js';
import './const-f8fb2a4c.js';
import './ui/IconButton.js';
import './index-d880236d.js';
import './index-53585fab.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-fcb040ec.js';
import './tslib.es6-4a4f5c58.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-91011cda.js';
import './index-005a14f3.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-72d0c1dd.js';
import './index-35d9a787.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-480e2d9e.js';
import './utils-87c63da6.js';
import './UserProfileContext-153af432.js';
import './utils-62d358b3.js';
import './openChannelUtils-c29ded89.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-ea1c9845.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-6bfe08d8.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-6991be9c.js';
import './openChannel-f30b9999.js';
import './__bundle-ba710a09-7de40396.js';

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
