'use strict';

var React = require('react');
var ChannelList_context = require('./ChannelListProvider-bffb9384.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./tslib.es6-c3158c01.js');
require('./groupChannel-4c8b1fc9.js');
require('./__bundle-ba710a09-8573aa4e.js');
require('./topics-1218aada.js');
require('./uuid-11d3ef5e.js');
require('./utils-f60a9a5a.js');
require('./UserProfileContext-80f2ddb9.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('./index-8daa2cfb.js');
require('./ChannelList/components/ChannelListHeader.js');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./index-1ac2a868.js');
require('./ui/IconButton.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./ChannelList/components/AddChannel.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./CreateChannelProvider-f5ed4eb1.js');
require('./sendbirdSelectors.js');
require('./CreateChannel/components/InviteUsers.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-6e41140f.js');
require('./index-a189c9f3.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ui/ChannelAvatar.js');
require('./utils-48aa919f.js');
require('./ui/Badge.js');
require('./index-d74761dd.js');
require('./index-749e1f81.js');
require('./index-52d3e5e9.js');
require('./ui/MentionUserLabel.js');
require('./Channel/components/TypingIndicator.js');
require('./ChannelProvider-8470d3ae.js');
require('./compareIds-99bee171.js');
require('./const-e7009964.js');
require('./ui/ReactionButton.js');
require('./ui/MessageStatus.js');
require('./ui/Loader.js');
require('./ChannelList/components/ChannelPreviewAction.js');
require('./EditUserProfile.js');
require('./index-3e0dc61c.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./color-334c9fb8.js');
require('./actionTypes-dd3d8b10.js');
require('./index-25c36c94.js');

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
