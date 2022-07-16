'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-d3743106.js');
var LocalizationContext = require('../../LocalizationContext-c4e6256c.js');
var Channel_context = require('../../ChannelProvider-c6834144.js');
require('prop-types');
require('react-dom');
require('../../index-c0ef2913.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-95f9644b.js');
require('../../ui/Icon.js');
require('../../index-9235a70d.js');
require('../../stringSet-6c45946e.js');
require('../../utils-787f6393.js');
require('../../index-5a900a14.js');
require('../../UserProfileContext-7343163c.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-e992811c.js');
require('../../topics-9033c412.js');
require('../../index-442b2a43.js');
require('../../tslib.es6-79d6c001.js');
require('../../compareIds-3c8f7012.js');
require('../../const-7bb52067.js');
require('../../groupChannel-506f10a9.js');
require('../../__bundle-ba710a09-aa384520.js');
require('../../uuid-35ad849a.js');
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
