import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-2c484fe0.js';
import './UserProfileContext-c84a4f87.js';
import 'prop-types';
import './LocalizationContext-6dc0d190.js';
import './stringSet-acf9d2a1.js';
import './index-527c3bc4.js';
import './index-ed7103e1.js';
import './ui/Icon.js';
import './index-92e8a1d4.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './color-9d1ce766.js';
import './ui/OpenChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-bdfb18b0.js';
import './ui/ImageRenderer.js';
import './uuid-4b033040.js';
import './utils-cbdd30a8.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-bf6cbc46.js';
import './ui/IconButton.js';
import './index-28e59bab.js';
import './utils-c830dbcc.js';
import './ui/Input.js';
import './OpenChannelSettings/components/ParticipantUI.js';
import './context-3af6d6de.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-fc458762.js';
import './ui/ContextMenu.js';
import './index-bb395be0.js';
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
