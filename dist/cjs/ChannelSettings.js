'use strict';

var React = require('react');
var ChannelSettings_components_ChannelSettingsUI = require('./ChannelSettings/components/ChannelSettingsUI.js');
var ChannelSettings_context = require('./ChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('./index-2b606866.js');
require('prop-types');
require('./ui/Icon.js');
require('./ui/Loader.js');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./index-2dfdb9de.js');
require('./ui/IconButton.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-bd7bd76d.js');
require('./ui/ImageRenderer.js');
require('./uuid-d427ce45.js');
require('./utils-0e1ac091.js');
require('./ui/TextButton.js');
require('./color-35fbd517.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-77afdf6b.js');
require('./index-51cd7ad2.js');
require('./utils-ae4d63e2.js');
require('./ui/Input.js');
require('./ChannelSettings/components/ModerationPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./context-f4dc80ee.js');
require('./ui/Badge.js');
require('./ui/ContextMenu.js');
require('./index-6292ff33.js');
require('./ui/SortByRow.js');
require('./ChannelSettings/components/UserListItem.js');
require('./UserProfileContext-24790fe2.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-9b308b83.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./MemberList-1bbd5789.js');
require('./ChannelSettings/components/LeaveChannel.js');
require('./ChannelSettings/components/UserPanel.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelSettings = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_context.ChannelSettingsProvider, {
    channelUrl: props.channelUrl,
    onCloseClick: props === null || props === void 0 ? void 0 : props.onCloseClick,
    onChannelModified: props === null || props === void 0 ? void 0 : props.onChannelModified,
    onBeforeUpdateChannel: props === null || props === void 0 ? void 0 : props.onBeforeUpdateChannel,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile
  }, /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_ChannelSettingsUI, {
    renderPlaceholderError: props === null || props === void 0 ? void 0 : props.renderPlaceholderError,
    renderChannelProfile: props === null || props === void 0 ? void 0 : props.renderChannelProfile,
    renderModerationPanel: props === null || props === void 0 ? void 0 : props.renderModerationPanel,
    renderLeaveChannel: props === null || props === void 0 ? void 0 : props.renderLeaveChannel
  }));
};

module.exports = ChannelSettings;
//# sourceMappingURL=ChannelSettings.js.map
