'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-24d115a6.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-87d8a6c3.js');
require('./LocalizationContext-7124ef76.js');
require('./stringSet-ca0cf06e.js');
require('./index-80df9998.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-d0fefa20.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-74e1c32a.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-c5f391d0.js');
require('./index-9ad5c786.js');
require('./utils-d6de0e43.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-4574eaff.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-cfc8429e.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-55f51c3d.js');
require('./ui/ContextMenu.js');
require('./index-f6c81602.js');
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
