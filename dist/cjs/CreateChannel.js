'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-f0c58d70.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-90bf9fc5.js');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-675dba65.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-86c744f1.js');
require('./index-2777b3d9.js');
require('./utils-8f0d7826.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-a3f3d44c.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-04261033.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-efe1f803.js');
require('./ui/ContextMenu.js');
require('./index-67d733e9.js');
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
