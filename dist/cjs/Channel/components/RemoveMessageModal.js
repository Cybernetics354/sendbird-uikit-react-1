'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-a189c9f3.js');
var LocalizationContext = require('../../LocalizationContext-4edc1945.js');
var Channel_context = require('../../ChannelProvider-8470d3ae.js');
require('prop-types');
require('react-dom');
require('../../index-6e41140f.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-652929ec.js');
require('../../ui/Icon.js');
require('../../index-1ac2a868.js');
require('../../stringSet-8a123999.js');
require('../../utils-f60a9a5a.js');
require('../../index-1968df45.js');
require('../../UserProfileContext-80f2ddb9.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-52d3e5e9.js');
require('../../topics-1218aada.js');
require('../../index-8daa2cfb.js');
require('../../tslib.es6-c3158c01.js');
require('../../compareIds-99bee171.js');
require('../../const-e7009964.js');
require('../../groupChannel-4c8b1fc9.js');
require('../../__bundle-ba710a09-8573aa4e.js');
require('../../uuid-11d3ef5e.js');
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
