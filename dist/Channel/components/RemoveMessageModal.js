import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-1187996f.js';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import { u as useChannelContext } from '../../ChannelProvider-4400f751.js';
import 'prop-types';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../ui/Icon.js';
import '../../index-96f2ca18.js';
import '../../stringSet-1cad1dbf.js';
import '../../utils-d6f171ef.js';
import '../../index-8d5e2563.js';
import '../../UserProfileContext-7c91714e.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-6e7e7eaa.js';
import '../../topics-e87f2985.js';
import '../../index-f2c869d7.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../compareIds-14392765.js';
import '../../const-1cfee98a.js';
import '../../groupChannel-bddb1f44.js';
import '../../__bundle-ba710a09-e080d3fa.js';
import '../../uuid-21b2a5db.js';
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
