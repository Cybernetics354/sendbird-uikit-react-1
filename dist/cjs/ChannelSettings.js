'use strict';

var React = require('react');
var ChannelSettings_components_ChannelSettingsUI = require('./ChannelSettings/components/ChannelSettingsUI.js');
var ChannelSettings_context = require('./ChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('./index-25c36c94.js');
require('prop-types');
require('./ui/Icon.js');
require('./ui/Loader.js');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./index-1ac2a868.js');
require('./ui/IconButton.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-c3158c01.js');
require('./ui/ImageRenderer.js');
require('./uuid-11d3ef5e.js');
require('./utils-48aa919f.js');
require('./ui/TextButton.js');
require('./color-334c9fb8.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-6e41140f.js');
require('./index-a189c9f3.js');
require('./utils-f60a9a5a.js');
require('./ui/Input.js');
require('./ChannelSettings/components/ModerationPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./context-dd849a84.js');
require('./ui/Badge.js');
require('./ui/ContextMenu.js');
require('./index-8daa2cfb.js');
require('./ui/SortByRow.js');
require('./ChannelSettings/components/UserListItem.js');
require('./UserProfileContext-80f2ddb9.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-1218aada.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./MemberList-859163ae.js');
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
