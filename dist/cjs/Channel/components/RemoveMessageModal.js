'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-37c2c6ef.js');
var LocalizationContext = require('../../LocalizationContext-06295289.js');
var Channel_context = require('../../ChannelProvider-366d865b.js');
require('prop-types');
require('react-dom');
require('../../index-2ebbabef.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-2157fc28.js');
require('../../ui/Icon.js');
require('../../index-06ad9a23.js');
require('../../stringSet-c0b7ef0b.js');
require('../../utils-d52c5709.js');
require('../../index-46a833a2.js');
require('../../UserProfileContext-647b15e6.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-8934b8f3.js');
require('../../topics-e5b39d00.js');
require('../../index-8f34af30.js');
require('../../tslib.es6-43d4c54c.js');
require('../../compareIds-191f1b57.js');
require('../../const-635e3ce8.js');
require('../../groupChannel-8d0a6976.js');
require('../../__bundle-ba710a09-ff4335dc.js');
require('../../uuid-3cedbe50.js');
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
