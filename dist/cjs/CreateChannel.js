'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-b6e7dd7d.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-512de66a.js');
require('./LocalizationContext-1d24d5aa.js');
require('./stringSet-39290f11.js');
require('./index-80f7ae1e.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-db05c769.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-12d2e3e0.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-0f67da42.js');
require('./index-c19c70c5.js');
require('./utils-1b1f3464.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-0b5ac2eb.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-34245f96.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-438f3376.js');
require('./ui/ContextMenu.js');
require('./index-08297238.js');
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
