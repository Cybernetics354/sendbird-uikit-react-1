'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-50918912.js');
var LocalizationContext = require('../../LocalizationContext-219f1540.js');
var Channel_context = require('../../ChannelProvider-25c55d83.js');
require('prop-types');
require('react-dom');
require('../../index-b13049fa.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-404a108a.js');
require('../../ui/Icon.js');
require('../../index-7309809e.js');
require('../../stringSet-49111b06.js');
require('../../utils-703c21fc.js');
require('../../index-6ada6170.js');
require('../../UserProfileContext-b48e5176.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-81be9e1d.js');
require('../../topics-0f4db8a1.js');
require('../../index-029c9c4b.js');
require('../../tslib.es6-c9f1dea2.js');
require('../../compareIds-87d05f16.js');
require('../../const-a82a653e.js');
require('../../groupChannel-665fb651.js');
require('../../__bundle-ba710a09-a84711b1.js');
require('../../uuid-428cb2f7.js');
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
