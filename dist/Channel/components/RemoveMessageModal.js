import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-d7f84f9a.js';
import { a as LocalizationContext } from '../../LocalizationContext-c6c43024.js';
import { u as useChannelContext } from '../../ChannelProvider-b32f7603.js';
import 'prop-types';
import 'react-dom';
import '../../index-3ea1545e.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-5ef7889e.js';
import '../../ui/Icon.js';
import '../../index-dd7d2c20.js';
import '../../stringSet-bc59be04.js';
import '../../utils-338c9de2.js';
import '../../index-7ce5a58a.js';
import '../../UserProfileContext-c80e77ff.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-f9f73baa.js';
import '../../topics-16b6b21b.js';
import '../../index-5b610291.js';
import '../../tslib.es6-5837fd36.js';
import '../../compareIds-625ff628.js';
import '../../const-54c1f5b2.js';
import '../../groupChannel-31808834.js';
import '../../__bundle-ba710a09-d0f8c8de.js';
import '../../uuid-bf348b66.js';
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
