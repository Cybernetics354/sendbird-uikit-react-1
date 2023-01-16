'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-f5ed4eb1.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-c3158c01.js');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-6e41140f.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-a189c9f3.js');
require('./index-1ac2a868.js');
require('./utils-f60a9a5a.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-80f2ddb9.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-11d3ef5e.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-1218aada.js');
require('./ui/ContextMenu.js');
require('./index-8daa2cfb.js');
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
