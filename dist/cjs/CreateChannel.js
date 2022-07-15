'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-c96b0a6e.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-ca286580.js');
require('./LocalizationContext-44ed70a4.js');
require('./stringSet-6cea29d9.js');
require('./index-f0b59409.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-5122729b.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-9a3f2ed1.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-73892caf.js');
require('./index-1a5c5200.js');
require('./utils-fedac650.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-81f77266.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-c037b76e.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-368356cd.js');
require('./ui/ContextMenu.js');
require('./index-129ce994.js');
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
