'use strict';

var React = require('react');
var CreateChannel_components_CreateChannelUI = require('./CreateChannel/components/CreateChannelUI.js');
var CreateChannel_context = require('./CreateChannelProvider-d6a9b815.js');
require('./CreateChannel/components/InviteUsers.js');
require('./tslib.es6-0c558e49.js');
require('./LocalizationContext-9105d37e.js');
require('./stringSet-038031af.js');
require('./index-eb4297e8.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./_rollupPluginBabelHelpers-3b162d85.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./index-1a4cafc8.js');
require('./ui/IconButton.js');
require('./ui/Icon.js');
require('./index-8e1b77e0.js');
require('./index-2e53ce20.js');
require('./utils-863d220f.js');
require('./ui/UserListItem.js');
require('./UserProfileContext-dd094164.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('./uuid-02d8b98a.js');
require('./ui/MutedAvatarOverlay.js');
require('./ui/Checkbox.js');
require('./ui/UserProfile.js');
require('./sendbirdSelectors.js');
require('./topics-1f4bc730.js');
require('./ui/ContextMenu.js');
require('./index-6cfeab1e.js');
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
