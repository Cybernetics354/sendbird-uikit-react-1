import React__default from 'react';
import OpenChannelUI from './OpenChannelSettings/components/OpenChannelSettingsUI.js';
import { OpenChannelSettingsProvider } from './OpenChannelSettings/context.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-59897f6c.js';
import './UserProfileContext-153af432.js';
import 'prop-types';
import './LocalizationContext-d3e49456.js';
import './stringSet-49030004.js';
import './index-a53c3ed1.js';
import './index-53585fab.js';
import './ui/Icon.js';
import './index-005a14f3.js';
import './ui/Loader.js';
import './OpenChannelSettings/components/OperatorUI.js';
import './OpenChannelSettings/components/OpenChannelProfile.js';
import './ui/TextButton.js';
import './color-ea1c9845.js';
import './ui/OpenChannelAvatar.js';
import './ui/Avatar.js';
import './tslib.es6-4a4f5c58.js';
import './ui/ImageRenderer.js';
import './uuid-91011cda.js';
import './utils-aa207dba.js';
import './OpenChannelSettings/components/EditDetailsModal.js';
import './ui/Modal.js';
import 'react-dom';
import './index-6bfe08d8.js';
import './ui/IconButton.js';
import './index-d880236d.js';
import './utils-87c63da6.js';
import './ui/Input.js';
import './OpenChannelSettings/components/ParticipantUI.js';
import './context-f140605f.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-480e2d9e.js';
import './ui/ContextMenu.js';
import './index-fcb040ec.js';
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
