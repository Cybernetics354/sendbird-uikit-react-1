'use strict';

var React = require('react');
var ui_Modal = require('../../ui/Modal.js');
var ui_Button = require('../../index-86c744f1.js');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var Channel_context = require('../../ChannelProvider-9d51623d.js');
require('prop-types');
require('react-dom');
require('../../index-675dba65.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../ui/Icon.js');
require('../../index-2777b3d9.js');
require('../../stringSet-c701d85c.js');
require('../../utils-8f0d7826.js');
require('../../index-30aacb0e.js');
require('../../UserProfileContext-a3f3d44c.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../index-442b142d.js');
require('../../topics-efe1f803.js');
require('../../index-67d733e9.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../compareIds-30eeee5f.js');
require('../../const-13b2476d.js');
require('../../groupChannel-dd5d6911.js');
require('../../__bundle-ba710a09-5006ce8c.js');
require('../../uuid-04261033.js');
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
