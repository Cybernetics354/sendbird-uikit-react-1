'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-8e1b77e0.js');
var LocalizationContext = require('../../LocalizationContext-9105d37e.js');
var Channel_context = require('../../ChannelProvider-4a1c1e69.js');
require('prop-types');
require('react-dom');
require('../../index-1a4cafc8.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-3b162d85.js');
require('../../ui/Icon.js');
require('../../index-2e53ce20.js');
require('../../stringSet-038031af.js');
require('../../utils-863d220f.js');
require('../../index-eb4297e8.js');
require('../../UserProfileContext-dd094164.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-cc891b98.js');
require('../../topics-1f4bc730.js');
require('../../index-6cfeab1e.js');
require('../../tslib.es6-0c558e49.js');
require('../../compareIds-e3040baa.js');
require('../../const-008ca7f2.js');
require('../../groupChannel-8e2b8493.js');
require('../../__bundle-ba710a09-2240fe7f.js');
require('../../uuid-02d8b98a.js');
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
