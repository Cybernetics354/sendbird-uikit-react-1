'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-51cd7ad2.js');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var Channel_context = require('../../ChannelProvider-c0942911.js');
require('prop-types');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../ui/Icon.js');
require('../../index-2dfdb9de.js');
require('../../stringSet-c8c286da.js');
require('../../utils-ae4d63e2.js');
require('../../index-10f7dd53.js');
require('../../UserProfileContext-24790fe2.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-09c690af.js');
require('../../topics-9b308b83.js');
require('../../index-6292ff33.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../compareIds-9caf1355.js');
require('../../const-a4d49809.js');
require('../../groupChannel-a8a4082b.js');
require('../../__bundle-ba710a09-af5d7380.js');
require('../../uuid-d427ce45.js');
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
