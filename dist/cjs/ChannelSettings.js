'use strict';

var React = require('react');
var ChannelSettings_components_ChannelSettingsUI = require('./ChannelSettings/components/ChannelSettingsUI.js');
var ChannelSettings_context = require('./ChannelSettings/context.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('./index-354a9223.js');
require('prop-types');
require('./ui/Icon.js');
require('./ui/Loader.js');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./index-2777b3d9.js');
require('./ui/IconButton.js');
require('./ChannelSettings/components/ChannelProfile.js');
require('./ui/ChannelAvatar.js');
require('./ui/Avatar.js');
require('./tslib.es6-90bf9fc5.js');
require('./ui/ImageRenderer.js');
require('./uuid-04261033.js');
require('./utils-2ed63c9b.js');
require('./ui/TextButton.js');
require('./color-bc0e6525.js');
require('./ChannelSettings/components/EditDetailsModal.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-675dba65.js');
require('./index-86c744f1.js');
require('./utils-8f0d7826.js');
require('./ui/Input.js');
require('./ChannelSettings/components/ModerationPanel.js');
require('./ui/Accordion.js');
require('./ui/AccordionGroup.js');
require('./context-3c2ffd8e.js');
require('./ui/Badge.js');
require('./ui/ContextMenu.js');
require('./index-67d733e9.js');
require('./ui/SortByRow.js');
require('./ChannelSettings/components/UserListItem.js');
require('./UserProfileContext-a3f3d44c.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-efe1f803.js');
require('./ui/UserListItem.js');
require('./ui/Checkbox.js');
require('./MemberList-f1672aea.js');
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
