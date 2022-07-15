'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-73892caf.js');
var LocalizationContext = require('../../LocalizationContext-44ed70a4.js');
var Channel_context = require('../../ChannelProvider-e0e2dc55.js');
require('prop-types');
require('react-dom');
require('../../index-9a3f2ed1.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-5122729b.js');
require('../../ui/Icon.js');
require('../../index-1a5c5200.js');
require('../../stringSet-6cea29d9.js');
require('../../utils-fedac650.js');
require('../../index-f0b59409.js');
require('../../UserProfileContext-81f77266.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-3913cf07.js');
require('../../topics-368356cd.js');
require('../../index-129ce994.js');
require('../../tslib.es6-ca286580.js');
require('../../compareIds-be5b54a0.js');
require('../../const-82799a29.js');
require('../../groupChannel-b2caa429.js');
require('../../__bundle-7dfccc8c-af5198e1.js');
require('../../uuid-c037b76e.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');
require('../../ui/ImageRenderer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RemoveMessage = function (props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var deleteMessage = Channel_context.useChannelContext().deleteMessage;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    type: ui_Button.ButtonTypes.DANGER,
    disabled: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0,
    onCancel: onCancel,
    onSubmit: function () {
      deleteMessage(message).then(function () {
        onCancel();
      });
    },
    submitText: stringSet.MESSAGE_MENU__DELETE,
    titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
  });
};

module.exports = RemoveMessage;
//# sourceMappingURL=RemoveMessageModal.js.map
