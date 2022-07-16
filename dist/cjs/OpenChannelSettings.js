'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('./UserProfileContext-a3f3d44c.js');
require('prop-types');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./index-2777b3d9.js');
require('./ui/Icon.js');
require('./index-354a9223.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./color-bc0e6525.js');
require('./ui/OpenChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-90bf9fc5.js');
require('./ui/ImageRenderer.js');
require('./uuid-04261033.js');
require('./utils-2ed63c9b.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-675dba65.js');
require('./ui/IconButton.js');
require('./index-86c744f1.js');
require('./utils-8f0d7826.js');
require('./ui/Input.js');
require('./OpenChannelSettings/components/ParticipantUI.js');
require('./context-3c2ffd8e.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-efe1f803.js');
require('./ui/ContextMenu.js');
require('./index-67d733e9.js');
require('./ui/SortByRow.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OpenChannelSetting = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_context.OpenChannelSettingsProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onDeleteChannel: props === null || props === void 0 ? void 0 : props.onDeleteChannel,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile
  }, /*#__PURE__*/React__default["default"].createElement(OpenChannelSettings_components_OpenChannelSettingsUI, {
    renderOperatorUI: props === null || props === void 0 ? void 0 : props.renderOperatorUI,
    renderParticipantList: props === null || props === void 0 ? void 0 : props.renderParticipantList
  }));
};

module.exports = OpenChannelSetting;
//# sourceMappingURL=OpenChannelSettings.js.map
