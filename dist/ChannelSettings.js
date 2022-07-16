import React__default from 'react';
import ChannelSettingsUI from './ChannelSettings/components/ChannelSettingsUI.js';
import { ChannelSettingsProvider } from './ChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-2c484fe0.js';
import './index-92e8a1d4.js';
import 'prop-types';
import './ui/Icon.js';
import './ui/Loader.js';
import './LocalizationContext-6dc0d190.js';
import './stringSet-acf9d2a1.js';
import './index-527c3bc4.js';
import './index-ed7103e1.js';
import './ui/IconButton.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ui/ChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-bdfb18b0.js';
import './ui/ImageRenderer.js';
import './uuid-4b033040.js';
import './utils-cbdd30a8.js';
import './ui/TextButton.js';
import './color-9d1ce766.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-bf6cbc46.js';
import './index-28e59bab.js';
import './utils-c830dbcc.js';
import './ui/Input.js';
import './ChannelSettings/components/ModerationPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-3af6d6de.js';
import './ui/Badge.js';
import './ui/ContextMenu.js';
import './index-bb395be0.js';
import './ui/SortByRow.js';
import './ChannelSettings/components/UserListItem.js';
import './UserProfileContext-c84a4f87.js';
import './ui/MutedAvatarOverlay.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-fc458762.js';
import './ui/UserListItem.js';
import './ui/Checkbox.js';
import './MemberList-60afa50d.js';
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
