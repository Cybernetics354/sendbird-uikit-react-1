import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-a25c3f8a.js';
import './UserProfileContext-9e885899.js';
import 'prop-types';
import './LocalizationContext-e63b92dd.js';
import './stringSet-e139b667.js';
import './index-e851fa9b.js';
import './index-a401bc58.js';
import './ui/Icon.js';
import './index-1acd5943.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './color-105e93f7.js';
import './ui/OpenChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-1d5f2fa9.js';
import './ui/ImageRenderer.js';
import './uuid-6e50e4c4.js';
import './utils-4c07fc7c.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-e56e31b3.js';
import './ui/IconButton.js';
import './index-b422234e.js';
import './utils-c794f866.js';
import './ui/Input.js';
import './OpenChannelSettings/components/ParticipantUI.js';
import './context-e04eb92d.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-f928ee3e.js';
import './ui/ContextMenu.js';
import './index-ee45e5fc.js';
import './ui/SortByRow.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';

var OpenChannelSetting = function (props) {
  return /*#__PURE__*/React__default.createElement(OpenChannelSettingsProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default.createElement(OpenChannelUI, {
    renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI,
    renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList
  }));
};

export { OpenChannelSetting as default };
//# sourceMappingURL=OpenChannelSettings.js.map
