'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-c5f391d0.js');
var LocalizationContext = require('../../LocalizationContext-7124ef76.js');
var Channel_context = require('../../ChannelProvider-082cba59.js');
require('prop-types');
require('react-dom');
require('../../index-74e1c32a.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('../../ui/Icon.js');
require('../../index-9ad5c786.js');
require('../../stringSet-ca0cf06e.js');
require('../../utils-d6de0e43.js');
require('../../index-80df9998.js');
require('../../UserProfileContext-4574eaff.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-184956b3.js');
require('../../topics-55f51c3d.js');
require('../../index-f6c81602.js');
require('../../tslib.es6-87d8a6c3.js');
require('../../compareIds-61a570a9.js');
require('../../const-fb7538f3.js');
require('../../groupChannel-e4c9b876.js');
require('../../__bundle-ba710a09-156cd2ec.js');
require('../../uuid-cfc8429e.js');
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
