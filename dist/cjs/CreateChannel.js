'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-aea8e5da.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-43d4c54c.js');
require('./LocalizationContext-06295289.js');
require('./stringSet-c0b7ef0b.js');
require('./index-46a833a2.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-2157fc28.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-2ebbabef.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-37c2c6ef.js');
require('./index-06ad9a23.js');
require('./utils-d52c5709.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-647b15e6.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-3cedbe50.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-e5b39d00.js');
require('./ui/ContextMenu.js');
require('./index-8f34af30.js');
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
