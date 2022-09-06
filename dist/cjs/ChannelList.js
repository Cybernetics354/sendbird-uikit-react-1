'use strict';

var React = require('react');
var ChannelList_context = require('./ChannelListProvider-65eb5db8.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./tslib.es6-bd7bd76d.js');
require('./groupChannel-a8a4082b.js');
require('./__bundle-ba710a09-af5d7380.js');
require('./topics-9b308b83.js');
require('./uuid-d427ce45.js');
require('./utils-ae4d63e2.js');
require('./UserProfileContext-24790fe2.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('./index-6292ff33.js');
require('./ChannelList/components/ChannelListHeader.js');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./index-2dfdb9de.js');
require('./ui/IconButton.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./ChannelList/components/AddChannel.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./CreateChannelProvider-0a413c0f.js');
require('./sendbirdSelectors.js');
require('./CreateChannel/components/InviteUsers.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-77afdf6b.js');
require('./index-51cd7ad2.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ui/ChannelAvatar.js');
require('./utils-0e1ac091.js');
require('./ui/Badge.js');
require('./index-0563a094.js');
require('./index-c173eafb.js');
require('./index-09c690af.js');
require('./ui/MentionUserLabel.js');
require('./Channel/components/TypingIndicator.js');
require('./ChannelProvider-c0942911.js');
require('./compareIds-9caf1355.js');
require('./const-a4d49809.js');
require('./ui/ReactionButton.js');
require('./ui/MessageStatus.js');
require('./ui/Loader.js');
require('./ChannelList/components/ChannelPreviewAction.js');
require('./EditUserProfile.js');
require('./index-e57a6dbb.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./color-35fbd517.js');
require('./actionTypes-40dfeb4c.js');
require('./index-2b606866.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelList = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(ChannelList_context.ChannelListProvider, {
    className: props === null || props === void 0 ? void 0 : props.className,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile,
    allowProfileEdit: props === null || props === void 0 ? void 0 : props.allowProfileEdit,
    onBeforeCreateChannel: props === null || props === void 0 ? void 0 : props.onBeforeCreateChannel,
    onThemeChange: props === null || props === void 0 ? void 0 : props.onThemeChange,
    onProfileEditSuccess: props === null || props === void 0 ? void 0 : props.onProfileEditSuccess,
    onChannelSelect: props === null || props === void 0 ? void 0 : props.onChannelSelect,
    sortChannelList: props === null || props === void 0 ? void 0 : props.sortChannelList,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    disableAutoSelect: props === null || props === void 0 ? void 0 : props.disableAutoSelect,
    isTypingIndicatorEnabled: props === null || props === void 0 ? void 0 : props.isTypingIndicatorEnabled,
    isMessageReceiptStatusEnabled: props === null || props === void 0 ? void 0 : props.isMessageReceiptStatusEnabled
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList_components_ChannelListUI, {
    renderChannelPreview: props === null || props === void 0 ? void 0 : props.renderChannelPreview,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    renderHeader: props === null || props === void 0 ? void 0 : props.renderHeader,
    renderPlaceHolderEmptyList: props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList,
    renderPlaceHolderError: props === null || props === void 0 ? void 0 : props.renderPlaceHolderError,
    renderPlaceHolderLoading: props === null || props === void 0 ? void 0 : props.renderPlaceHolderLoading
  }));
};

module.exports = ChannelList;
//# sourceMappingURL=ChannelList.js.map
