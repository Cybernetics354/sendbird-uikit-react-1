'use strict';

var React = require('react');
var ChannelList_context = require('./ChannelListProvider-97dcb17d.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./tslib.es6-90bf9fc5.js');
require('./groupChannel-dd5d6911.js');
require('./__bundle-ba710a09-5006ce8c.js');
require('./topics-efe1f803.js');
require('./uuid-04261033.js');
require('./utils-8f0d7826.js');
require('./UserProfileContext-a3f3d44c.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('./index-67d733e9.js');
require('./ChannelList/components/ChannelListHeader.js');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./index-2777b3d9.js');
require('./ui/IconButton.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./ChannelList/components/AddChannel.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./CreateChannelProvider-f0c58d70.js');
require('./sendbirdSelectors.js');
require('./CreateChannel/components/InviteUsers.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-675dba65.js');
require('./index-86c744f1.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ui/ChannelAvatar.js');
require('./utils-2ed63c9b.js');
require('./ui/Badge.js');
require('./index-4d90133e.js');
require('./index-7929fe7e.js');
require('./index-442b142d.js');
require('./ui/MentionUserLabel.js');
require('./Channel/components/TypingIndicator.js');
require('./ChannelProvider-9d51623d.js');
require('./compareIds-30eeee5f.js');
require('./const-13b2476d.js');
require('./ui/ReactionButton.js');
require('./ui/MessageStatus.js');
require('./ui/Loader.js');
require('./ChannelList/components/ChannelPreviewAction.js');
require('./EditUserProfile.js');
require('./index-aa55a181.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./color-bc0e6525.js');
require('./actionTypes-1b25234b.js');
require('./index-354a9223.js');

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
