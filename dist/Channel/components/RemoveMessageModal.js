import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-d880236d.js';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import { u as useChannelContext } from '../../ChannelProvider-3db0a059.js';
import 'prop-types';
import 'react-dom';
import '../../index-6bfe08d8.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../ui/Icon.js';
import '../../index-53585fab.js';
import '../../stringSet-49030004.js';
import '../../utils-87c63da6.js';
import '../../index-a53c3ed1.js';
import '../../UserProfileContext-153af432.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-35d9a787.js';
import '../../topics-480e2d9e.js';
import '../../index-fcb040ec.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../compareIds-6991be9c.js';
import '../../const-f8fb2a4c.js';
import '../../groupChannel-9122d8b4.js';
import '../../__bundle-ba710a09-7de40396.js';
import '../../uuid-91011cda.js';
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
