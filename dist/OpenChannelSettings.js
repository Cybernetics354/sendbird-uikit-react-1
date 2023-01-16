import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-5522a8f6.js';
import './UserProfileContext-7c91714e.js';
import 'prop-types';
import './LocalizationContext-bdb56d81.js';
import './stringSet-1cad1dbf.js';
import './index-8d5e2563.js';
import './index-96f2ca18.js';
import './ui/Icon.js';
import './index-fc9ccd03.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './color-717a18f9.js';
import './ui/OpenChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-6b1ce61a.js';
import './ui/ImageRenderer.js';
import './uuid-21b2a5db.js';
import './utils-ce7905db.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-deb6aab1.js';
import './ui/IconButton.js';
import './index-1187996f.js';
import './utils-d6f171ef.js';
import './ui/Input.js';
import './OpenChannelSettings/components/ParticipantUI.js';
import './context-2465ab00.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-e87f2985.js';
import './ui/ContextMenu.js';
import './index-f2c869d7.js';
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
