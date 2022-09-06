import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-a25c3f8a.js';
import './index-1acd5943.js';
import 'prop-types';
import './ui/Icon.js';
import './ui/Loader.js';
import './LocalizationContext-e63b92dd.js';
import './stringSet-e139b667.js';
import './index-e851fa9b.js';
import './index-a401bc58.js';
import './ui/IconButton.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-1d5f2fa9.js';
import './ui/ImageRenderer.js';
import './uuid-6e50e4c4.js';
import './utils-4c07fc7c.js';
import './ui/TextButton.js';
import './color-105e93f7.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-e56e31b3.js';
import './index-b422234e.js';
import './utils-c794f866.js';
import './ui/Input.js';
import './ChannelSettings/components/ModerationPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-e04eb92d.js';
import './ui/Badge.js';
import './ui/ContextMenu.js';
import './index-ee45e5fc.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './UserProfileContext-9e885899.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-f928ee3e.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './MemberList-d2c1e1c1.js';
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
