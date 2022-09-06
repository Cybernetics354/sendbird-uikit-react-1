'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-0a413c0f.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-bd7bd76d.js');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-77afdf6b.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-51cd7ad2.js');
require('./index-2dfdb9de.js');
require('./utils-ae4d63e2.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-24790fe2.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-d427ce45.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-9b308b83.js');
require('./ui/ContextMenu.js');
require('./index-6292ff33.js');
require('./ui/SortByRow.js');
require('./CreateChannel/components/SelectChannelType.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function (props) {
  var onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery,
      onCreateChannel = props.onCreateChannel,
      onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  return /*#__PURE__*/React__default["default"].createElement(CreateChannel_context.CreateChannelProvider, {
    onBeforeCreateChannel: onBeforeCreateChannel,
    userListQuery: userListQuery,
    onCreateChannel: onCreateChannel
  }, /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_CreateChannelUI, {
    renderStepOne: renderStepOne,
    onCancel: onCancel
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannel.js.map
