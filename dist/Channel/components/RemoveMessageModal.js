import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-bd1b8bfb.js';
import { a as LocalizationContext } from '../../LocalizationContext-8a121e1d.js';
import { u as useChannelContext } from '../../ChannelProvider-0b5d664d.js';
import 'prop-types';
import 'react-dom';
import '../../index-675ee70c.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-4dd1a6d8.js';
import '../../ui/Icon.js';
import '../../index-2cd7fa96.js';
import '../../stringSet-955abea5.js';
import '../../utils-d8815494.js';
import '../../index-76197404.js';
import '../../UserProfileContext-aa0ce103.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-5588c8e9.js';
import '../../topics-e07cc011.js';
import '../../index-2dbecfe3.js';
import '../../tslib.es6-4021ca51.js';
import '../../compareIds-53874ec3.js';
import '../../const-9b2b8324.js';
import '../../groupChannel-9c210d53.js';
import '../../__bundle-ba710a09-6e75e504.js';
import '../../uuid-c5fe47ff.js';
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
