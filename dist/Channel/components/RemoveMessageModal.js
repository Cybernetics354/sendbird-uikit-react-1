import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-8c1601f6.js';
import { a as LocalizationContext } from '../../LocalizationContext-09cb5078.js';
import { u as useChannelContext } from '../../ChannelProvider-25539394.js';
import 'prop-types';
import 'react-dom';
import '../../index-58f6a33c.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-6a3c1c63.js';
import '../../ui/Icon.js';
import '../../index-8eb795c0.js';
import '../../stringSet-9cd89798.js';
import '../../utils-20d05a65.js';
import '../../index-5b9a7c71.js';
import '../../UserProfileContext-63091e16.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-d9dcc9ce.js';
import '../../topics-a22af37d.js';
import '../../index-af6c813e.js';
import '../../tslib.es6-21381414.js';
import '../../compareIds-954f7a96.js';
import '../../const-80c30e70.js';
import '../../groupChannel-439dbe93.js';
import '../../__bundle-7dfccc8c-926961b2.js';
import '../../uuid-ee711734.js';
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
