import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-fc0130a5.js';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { u as useChannelContext } from '../../ChannelProvider-477ebebb.js';
import 'prop-types';
import 'react-dom';
import '../../index-ec60ce57.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../ui/Icon.js';
import '../../index-d9ca04bb.js';
import '../../stringSet-bfbe6996.js';
import '../../utils-1fc25d9a.js';
import '../../index-139e5f19.js';
import '../../UserProfileContext-0d690a96.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-4cc90022.js';
import '../../topics-5b2e6feb.js';
import '../../index-5ddc9ee9.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../compareIds-8f332743.js';
import '../../const-b6b0314e.js';
import '../../groupChannel-5d4b44d8.js';
import '../../__bundle-ba710a09-50a7d4d5.js';
import '../../uuid-ffa79983.js';
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
