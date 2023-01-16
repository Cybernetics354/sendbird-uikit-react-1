import React__default from 'react';
import { C as ChannelListProvider } from './ChannelListProvider-05e93e6a.js';
import ChannelListUI from './ChannelList/components/ChannelListUI.js';
import './tslib.es6-cb5d3fd4.js';
import './groupChannel-bf257729.js';
import './__bundle-ba710a09-823d594c.js';
import './topics-72f59d50.js';
import './uuid-361fa4d5.js';
import './utils-c7026724.js';
import './UserProfileContext-701bbd1d.js';
import 'prop-types';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-33833b5a.js';
import './index-130c824d.js';
import './ChannelList/components/ChannelListHeader.js';
import './LocalizationContext-d22b125b.js';
import './stringSet-3b6413f0.js';
import './index-b218dad1.js';
import './index-af45308d.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-1275ff37.js';
import './ui/Badge.js';
import './index-3686d447.js';
import './index-82f04370.js';
import './index-a4d30062.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-314c5144.js';
import './compareIds-f1c069c5.js';
import './const-31ddacec.js';
import './ui/ContextMenu.js';
import 'react-dom';
import './ui/SortByRow.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './ui/IconButton.js';
import './ui/Modal.js';
import './index-54145d22.js';
import './index-44bf1b6e.js';
import './EditUserProfile.js';
import './index-cd235668.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-e2562070.js';
import './actionTypes-47000015.js';
import './index-5e91d18b.js';

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
