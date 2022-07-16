'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-41fa033b.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-79d6c001.js');
require('./LocalizationContext-c4e6256c.js');
require('./stringSet-6c45946e.js');
require('./index-5a900a14.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-95f9644b.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-c0ef2913.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-d3743106.js');
require('./index-9235a70d.js');
require('./utils-787f6393.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-7343163c.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-35ad849a.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-9033c412.js');
require('./ui/ContextMenu.js');
require('./index-442b2a43.js');
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
