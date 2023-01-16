'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var CreateChannel = require('../../CreateChannel.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../_rollupPluginBabelHelpers-652929ec.js');
require('prop-types');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../CreateChannelProvider-f5ed4eb1.js');
require('../../sendbirdSelectors.js');
require('../../topics-1218aada.js');
require('../../utils-f60a9a5a.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../tslib.es6-c3158c01.js');
require('../../LocalizationContext-4edc1945.js');
require('../../stringSet-8a123999.js');
require('../../index-1968df45.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-6e41140f.js');
require('../../index-a189c9f3.js');
require('../../index-1ac2a868.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-80f2ddb9.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-11d3ef5e.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../withSendbird.js');
require('../../ui/ContextMenu.js');
require('../../index-8daa2cfb.js');
require('../../ui/SortByRow.js');
require('../../CreateChannel/components/SelectChannelType.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var AddChannel = function () {
  var _a;

  var _b = React.useState(false),
      showModal = _b[0],
      setShowModal = _b[1];

  var state = useSendbirdStateContext();
  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var disabled = !isOnline;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    height: "32px",
    width: "32px",
    onClick: function () {
      setShowModal(true);
    },
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CREATE,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), showModal && /*#__PURE__*/React__default["default"].createElement(CreateChannel, {
    onCancel: function () {
      setShowModal(false);
    },
    onCreateChannel: function () {
      setShowModal(false);
    }
  }));
};

exports.AddChannel = AddChannel;
exports["default"] = AddChannel;
//# sourceMappingURL=AddChannel.js.map
