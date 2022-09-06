import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-67a9797a.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-1d5f2fa9.js';
import './groupChannel-8bf47932.js';
import './__bundle-ba710a09-60e8438d.js';
import './topics-f928ee3e.js';
import './uuid-6e50e4c4.js';
import './utils-c794f866.js';
import './UserProfileContext-9e885899.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-a25c3f8a.js';
import './index-ee45e5fc.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-e63b92dd.js';
import './stringSet-e139b667.js';
import './index-e851fa9b.js';
import './index-a401bc58.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-4ce233f3.js';
import './sendbirdSelectors.js';
import './CreateChannel/components/InviteUsers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-e56e31b3.js';
import './index-b422234e.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-4c07fc7c.js';
import './ui/Badge.js';
import './index-b25a473a.js';
import './index-43893ec1.js';
import './index-0daadd03.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-7f17dfa8.js';
import './compareIds-a43728b9.js';
import './const-92587921.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-b8139dfc.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-105e93f7.js';
import './actionTypes-19d999d4.js';
import './index-1acd5943.js';

var ChannelList = function (props) {
  return /*#__PURE__*/React__default.createElement(ChannelListProvider, {
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit,
    onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel,
    onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange,
    onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess,
    onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect,
    sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect,
    isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled,
    isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled
  }, /*#__PURE__*/React__default.createElement(ChannelListUI, {
    renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

export { ChannelList as default };
//# sourceMappingURL=ChannelList.js.map
