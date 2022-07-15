'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-525fc07d.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-c9f1dea2.js');
require('./LocalizationContext-219f1540.js');
require('./stringSet-49111b06.js');
require('./index-6ada6170.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-404a108a.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-b13049fa.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-50918912.js');
require('./index-7309809e.js');
require('./utils-703c21fc.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-b48e5176.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-428cb2f7.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-0f4db8a1.js');
require('./ui/ContextMenu.js');
require('./index-029c9c4b.js');
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
