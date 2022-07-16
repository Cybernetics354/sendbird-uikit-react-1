'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var CreateChannel = require('../../CreateChannel.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('prop-types');
require('../../CreateChannel/components/CreateChannelUI.js');
require('../../CreateChannelProvider-f0c58d70.js');
require('../../sendbirdSelectors.js');
require('../../topics-efe1f803.js');
require('../../utils-8f0d7826.js');
require('../../CreateChannel/components/InviteUsers.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../LocalizationContext-b96a3e25.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('../../ui/Modal.js');
require('react-dom');
require('../../index-675dba65.js');
require('../../index-86c744f1.js');
require('../../index-2777b3d9.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-a3f3d44c.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-04261033.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../withSendbird.js');
require('../../ui/ContextMenu.js');
require('../../index-67d733e9.js');
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
