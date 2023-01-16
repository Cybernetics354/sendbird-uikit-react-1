import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-9a801843.js';
import { a as LocalizationContext } from '../../LocalizationContext-f2486c30.js';
import { u as useChannelContext } from '../../ChannelProvider-fa939f5a.js';
import 'prop-types';
import 'react-dom';
import '../../index-3f12e269.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-848c5853.js';
import '../../ui/Icon.js';
import '../../index-19cce0bb.js';
import '../../stringSet-5c50e96e.js';
import '../../utils-21bd7664.js';
import '../../index-bfc04e6e.js';
import '../../UserProfileContext-8fcecbac.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-a08d70ad.js';
import '../../topics-351221d8.js';
import '../../index-42611471.js';
import '../../tslib.es6-19dec4e0.js';
import '../../compareIds-3145b5b2.js';
import '../../const-38038f0e.js';
import '../../groupChannel-64990697.js';
import '../../__bundle-ba710a09-9d691cce.js';
import '../../uuid-30725b60.js';
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
