'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('./UserProfileContext-80f2ddb9.js');
require('prop-types');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./index-1ac2a868.js');
require('./ui/Icon.js');
require('./index-25c36c94.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./color-334c9fb8.js');
require('./ui/OpenChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-c3158c01.js');
require('./ui/ImageRenderer.js');
require('./uuid-11d3ef5e.js');
require('./utils-48aa919f.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-6e41140f.js');
require('./ui/IconButton.js');
require('./index-a189c9f3.js');
require('./utils-f60a9a5a.js');
require('./ui/Input.js');
require('./OpenChannelSettings/components/ParticipantUI.js');
require('./context-dd849a84.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-1218aada.js');
require('./ui/ContextMenu.js');
require('./index-8daa2cfb.js');
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
