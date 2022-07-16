'use strict';

var React = require('react');
var OpenChannelSettings_components_OpenChannelSettingsUI = require('./OpenChannelSettings/components/OpenChannelSettingsUI.js');
var OpenChannelSettings_context = require('./OpenChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-95f9644b.js');
require('./UserProfileContext-7343163c.js');
require('prop-types');
require('./LocalizationContext-c4e6256c.js');
require('./stringSet-6c45946e.js');
require('./index-5a900a14.js');
require('./index-9235a70d.js');
require('./ui/Icon.js');
require('./index-64607ce1.js');
require('./ui/Loader.js');
require('./OpenChannelSettings/components/OperatorUI.js');
require('./OpenChannelSettings/components/OpenChannelProfile.js');
require('./ui/TextButton.js');
require('./color-65c1a1ff.js');
require('./ui/OpenChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-79d6c001.js');
require('./ui/ImageRenderer.js');
require('./uuid-35ad849a.js');
require('./utils-277d6b83.js');
require('./OpenChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-c0ef2913.js');
require('./ui/IconButton.js');
require('./index-d3743106.js');
require('./utils-787f6393.js');
require('./ui/Input.js');
require('./OpenChannelSettings/components/ParticipantUI.js');
require('./context-17ecc336.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-9033c412.js');
require('./ui/ContextMenu.js');
require('./index-442b2a43.js');
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
