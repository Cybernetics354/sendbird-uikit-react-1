import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-5522a8f6.js';
import './index-fc9ccd03.js';
import 'prop-types';
import './ui/Icon.js';
import './ui/Loader.js';
import './LocalizationContext-bdb56d81.js';
import './stringSet-1cad1dbf.js';
import './index-8d5e2563.js';
import './index-96f2ca18.js';
import './ui/IconButton.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-6b1ce61a.js';
import './ui/ImageRenderer.js';
import './uuid-21b2a5db.js';
import './utils-ce7905db.js';
import './ui/TextButton.js';
import './color-717a18f9.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-deb6aab1.js';
import './index-1187996f.js';
import './utils-d6f171ef.js';
import './ui/Input.js';
import './ChannelSettings/components/ModerationPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-2465ab00.js';
import './ui/Badge.js';
import './ui/ContextMenu.js';
import './index-f2c869d7.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './UserProfileContext-7c91714e.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-e87f2985.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './MemberList-f9126529.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';

var ChannelSettings = function (props) {
  return /*#__PURE__*/React__default.createElement(ChannelSettingsProvider, {
    channelUrl: props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile
  }, /*#__PURE__*/React__default.createElement(ChannelSettingsUI, {
    renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError,
    renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile,
    renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel,
    renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel
  }));
};

export { ChannelSettings as default };
//# sourceMappingURL=ChannelSettings.js.map
