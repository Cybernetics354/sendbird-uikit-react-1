import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-44bf1b6e.js';
import { a as LocalizationContext } from '../../LocalizationContext-d22b125b.js';
import { u as useChannelContext } from '../../ChannelProvider-314c5144.js';
import 'prop-types';
import 'react-dom';
import '../../index-54145d22.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-33833b5a.js';
import '../../ui/Icon.js';
import '../../index-af45308d.js';
import '../../stringSet-3b6413f0.js';
import '../../utils-c7026724.js';
import '../../index-b218dad1.js';
import '../../UserProfileContext-701bbd1d.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-a4d30062.js';
import '../../topics-72f59d50.js';
import '../../index-130c824d.js';
import '../../tslib.es6-cb5d3fd4.js';
import '../../compareIds-f1c069c5.js';
import '../../const-31ddacec.js';
import '../../groupChannel-bf257729.js';
import '../../__bundle-ba710a09-823d594c.js';
import '../../uuid-361fa4d5.js';
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
