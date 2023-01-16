'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-865da959.js');
var LocalizationContext = require('../../LocalizationContext-92b5f010.js');
var Channel_context = require('../../ChannelProvider-7b1bce6b.js');
require('prop-types');
require('react-dom');
require('../../index-ef9f3a3e.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-0825dba8.js');
require('../../ui/Icon.js');
require('../../index-c05adf2d.js');
require('../../stringSet-827d08e2.js');
require('../../utils-f4c8ab45.js');
require('../../index-5dca71f9.js');
require('../../UserProfileContext-f85dab3b.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-6a589d8a.js');
require('../../topics-74cfc1f1.js');
require('../../index-bcaa279b.js');
require('../../tslib.es6-137d7ef9.js');
require('../../compareIds-e1644f6f.js');
require('../../const-1f118907.js');
require('../../groupChannel-7bc8e546.js');
require('../../__bundle-ba710a09-d8fef857.js');
require('../../uuid-0e49bd14.js');
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
