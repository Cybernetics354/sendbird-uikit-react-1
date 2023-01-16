import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-6181c85b.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-6b1ce61a.js';
import './groupChannel-bddb1f44.js';
import './__bundle-ba710a09-e080d3fa.js';
import './topics-e87f2985.js';
import './uuid-21b2a5db.js';
import './utils-d6f171ef.js';
import './UserProfileContext-7c91714e.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-5522a8f6.js';
import './index-f2c869d7.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-bdb56d81.js';
import './stringSet-1cad1dbf.js';
import './index-8d5e2563.js';
import './index-96f2ca18.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-7ec47f78.js';
import './sendbirdSelectors.js';
import './CreateChannel/components/InviteUsers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-deb6aab1.js';
import './index-1187996f.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-ce7905db.js';
import './ui/Badge.js';
import './index-c75c3d33.js';
import './index-7183b40a.js';
import './index-6e7e7eaa.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-4400f751.js';
import './compareIds-14392765.js';
import './const-1cfee98a.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-db0ca2d2.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-717a18f9.js';
import './actionTypes-9da4719d.js';
import './index-fc9ccd03.js';

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
