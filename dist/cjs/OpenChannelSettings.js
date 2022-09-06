'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('./UserProfileContext-24790fe2.js');
require('prop-types');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./index-2dfdb9de.js');
require('./ui/Icon.js');
require('./index-2b606866.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./color-35fbd517.js');
require('./ui/OpenChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-bd7bd76d.js');
require('./ui/ImageRenderer.js');
require('./uuid-d427ce45.js');
require('./utils-0e1ac091.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-77afdf6b.js');
require('./ui/IconButton.js');
require('./index-51cd7ad2.js');
require('./utils-ae4d63e2.js');
require('./ui/Input.js');
require('./OpenChannelSettings/components/ParticipantUI.js');
require('./context-f4dc80ee.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-9b308b83.js');
require('./ui/ContextMenu.js');
require('./index-6292ff33.js');
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
