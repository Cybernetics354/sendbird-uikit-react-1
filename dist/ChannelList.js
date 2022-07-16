import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-ba978866.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-bdfb18b0.js';
import './groupChannel-e68120a4.js';
import './__bundle-ba710a09-4a7e5f3a.js';
import './topics-fc458762.js';
import './uuid-4b033040.js';
import './utils-c830dbcc.js';
import './UserProfileContext-c84a4f87.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-2c484fe0.js';
import './index-bb395be0.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-6dc0d190.js';
import './stringSet-acf9d2a1.js';
import './index-527c3bc4.js';
import './index-ed7103e1.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-c5e9269f.js';
import './sendbirdSelectors.js';
import './CreateChannel/components/InviteUsers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-bf6cbc46.js';
import './index-28e59bab.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-cbdd30a8.js';
import './ui/Badge.js';
import './index-22b3d8ea.js';
import './index-567adb28.js';
import './index-2133a7e3.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-1874bbe2.js';
import './compareIds-92f2c773.js';
import './const-b8ee874a.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-2c0997c4.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-9d1ce766.js';
import './actionTypes-85d4d50d.js';
import './index-92e8a1d4.js';

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
