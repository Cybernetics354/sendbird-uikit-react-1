'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-0f67da42.js');
var LocalizationContext = require('../../LocalizationContext-1d24d5aa.js');
var Channel_context = require('../../ChannelProvider-7867c357.js');
require('prop-types');
require('react-dom');
require('../../index-12d2e3e0.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-db05c769.js');
require('../../ui/Icon.js');
require('../../index-c19c70c5.js');
require('../../stringSet-39290f11.js');
require('../../utils-1b1f3464.js');
require('../../index-80f7ae1e.js');
require('../../UserProfileContext-0b5ac2eb.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-ade9e29b.js');
require('../../topics-438f3376.js');
require('../../index-08297238.js');
require('../../tslib.es6-512de66a.js');
require('../../compareIds-67c645b6.js');
require('../../const-eb7d29de.js');
require('../../groupChannel-01761ce2.js');
require('../../__bundle-ba710a09-24158041.js');
require('../../uuid-34245f96.js');
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
