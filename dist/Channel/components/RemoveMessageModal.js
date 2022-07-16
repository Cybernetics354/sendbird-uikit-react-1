import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-28e59bab.js';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import { u as useChannelContext } from '../../ChannelProvider-1874bbe2.js';
import 'prop-types';
import 'react-dom';
import '../../index-bf6cbc46.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../ui/Icon.js';
import '../../index-ed7103e1.js';
import '../../stringSet-acf9d2a1.js';
import '../../utils-c830dbcc.js';
import '../../index-527c3bc4.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-2133a7e3.js';
import '../../topics-fc458762.js';
import '../../index-bb395be0.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../compareIds-92f2c773.js';
import '../../const-b8ee874a.js';
import '../../groupChannel-e68120a4.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../uuid-4b033040.js';
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
