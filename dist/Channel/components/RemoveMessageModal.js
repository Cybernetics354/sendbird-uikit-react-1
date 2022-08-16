import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-6b3586e6.js';
import { a as LocalizationContext } from '../../LocalizationContext-12a49911.js';
import { u as useChannelContext } from '../../ChannelProvider-22857348.js';
import 'prop-types';
import 'react-dom';
import '../../index-4a28b1a1.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import '../../ui/Icon.js';
import '../../index-b990bb50.js';
import '../../stringSet-1980c44a.js';
import '../../utils-67d0347a.js';
import '../../index-f2df602e.js';
import '../../UserProfileContext-82d9c025.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-2580d704.js';
import '../../topics-de8d1abb.js';
import '../../index-5075c241.js';
import '../../tslib.es6-7262cbaf.js';
import '../../compareIds-01d1c3e1.js';
import '../../const-169ab7cc.js';
import '../../groupChannel-e13c550e.js';
import '../../__bundle-ba710a09-f2231fe3.js';
import '../../uuid-5ca3889a.js';
import '../../ui/ContextMenu.js';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';

var RemoveMessage = function (props) {
  var _a;

  var onCancel = props.onCancel,
      message = props.message;
  var stringSet = useContext(LocalizationContext).stringSet;
  var deleteMessage = useChannelContext().deleteMessage;
  return /*#__PURE__*/React__default.createElement(Modal, {
    type: ButtonTypes.DANGER,
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

export { RemoveMessage as default };
//# sourceMappingURL=RemoveMessageModal.js.map
