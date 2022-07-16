'use strict';

var React = require('react');
var ChannelList_context = require('./ChannelListProvider-ed0c59af.js');
var ChannelList_components_ChannelListUI = require('./ChannelList/components/ChannelListUI.js');
require('./tslib.es6-79d6c001.js');
require('./groupChannel-506f10a9.js');
require('./__bundle-ba710a09-aa384520.js');
require('./topics-9033c412.js');
require('./uuid-35ad849a.js');
require('./utils-787f6393.js');
require('./UserProfileContext-7343163c.js');
require('prop-types');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-95f9644b.js');
require('./index-442b2a43.js');
require('./ChannelList/components/ChannelListHeader.js');
require('./LocalizationContext-c4e6256c.js');
require('./stringSet-6c45946e.js');
require('./index-5a900a14.js');
require('./index-9235a70d.js');
require('./ui/IconButton.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./ui/Icon.js');
require('./ChannelList/components/AddChannel.js');
require('./CreateChannel.js');
require('./CreateChannel/components/CreateChannelUI.js');
require('./CreateChannelProvider-41fa033b.js');
require('./sendbirdSelectors.js');
require('./CreateChannel/components/InviteUsers.js');
require('./ui/Modal.js');
require('react-dom');
require('./index-c0ef2913.js');
require('./index-d3743106.js');
require('./ui/UserListItem.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./ui/ContextMenu.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');
require('./ChannelList/components/ChannelPreview.js');
require('./ui/ChannelAvatar.js');
require('./utils-277d6b83.js');
require('./ui/Badge.js');
require('./index-36d68224.js');
require('./index-9025a406.js');
require('./index-e992811c.js');
require('./ui/MentionUserLabel.js');
require('./Channel/components/TypingIndicator.js');
require('./ChannelProvider-c6834144.js');
require('./compareIds-3c8f7012.js');
require('./const-7bb52067.js');
require('./ui/ReactionButton.js');
require('./ui/MessageStatus.js');
require('./ui/Loader.js');
require('./ChannelList/components/ChannelPreviewAction.js');
require('./EditUserProfile.js');
require('./index-8f73138f.js');
require('./ui/Input.js');
require('./ui/TextButton.js');
require('./color-65c1a1ff.js');
require('./actionTypes-7e9ccea7.js');
require('./index-64607ce1.js');

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
