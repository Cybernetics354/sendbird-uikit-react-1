import React__default from 'react';
import OpenChannelUI from './OpenChannel/components/OpenChannelUI.js';
import { O as OpenChannelProvider } from './OpenChannelProvider-0bc44955.js';
import './OpenChannel/components/OpenChannelInput.js';
import './LocalizationContext-8a121e1d.js';
import './stringSet-955abea5.js';
import './index-76197404.js';
import './ui/MessageInput.js';
import './_rollupPluginBabelHelpers-4dd1a6d8.js';
import 'prop-types';
import './const-60e659d9.js';
import './const-9b2b8324.js';
import './ui/IconButton.js';
import './index-bd1b8bfb.js';
import './index-2cd7fa96.js';
import './ui/MentionUserLabel.js';
import './ui/Icon.js';
import './index-2dbecfe3.js';
import './tslib.es6-4021ca51.js';
import './OpenChannel/components/FrozenChannelNotification.js';
import './OpenChannel/components/OpenChannelHeader.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-c5fe47ff.js';
import './index-d99b9d37.js';
import './ui/Loader.js';
import './OpenChannel/components/OpenChannelMessageList.js';
import './index-04bd15e7.js';
import './index-5588c8e9.js';
import './OpenChannel/components/OpenChannelMessage.js';
import './ui/OpenchannelUserMessage.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/UserProfile.js';
import './withSendbird.js';
import './sendbirdSelectors.js';
import './topics-e07cc011.js';
import './utils-d8815494.js';
import './UserProfileContext-aa0ce103.js';
import './utils-0e3add1a.js';
import './openChannelUtils-fa8a1de7.js';
import './ui/OpenChannelAdminMessage.js';
import './ui/OpenchannelOGMessage.js';
import './ui/LinkLabel.js';
import './ui/OpenchannelThumbnailMessage.js';
import './ui/OpenchannelFileMessage.js';
import './ui/TextButton.js';
import './color-e35272b2.js';
import './ui/DateSeparator.js';
import './ui/FileViewer.js';
import './index-675ee70c.js';
import './ui/Modal.js';
import './useSendbirdStateContext.js';
import './compareIds-53874ec3.js';
import './openChannel-61944e1d.js';
import './__bundle-ba710a09-6e75e504.js';

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
