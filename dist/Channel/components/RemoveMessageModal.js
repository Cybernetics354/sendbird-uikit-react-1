import React__default, { useContext } from 'react';
import Modal from '../../ui/Modal.js';
import { a as ButtonTypes } from '../../index-b422234e.js';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { u as useChannelContext } from '../../ChannelProvider-7f17dfa8.js';
import 'prop-types';
import 'react-dom';
import '../../index-e56e31b3.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../ui/Icon.js';
import '../../index-a401bc58.js';
import '../../stringSet-e139b667.js';
import '../../utils-c794f866.js';
import '../../index-e851fa9b.js';
import '../../UserProfileContext-9e885899.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../index-0daadd03.js';
import '../../topics-f928ee3e.js';
import '../../index-ee45e5fc.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../compareIds-a43728b9.js';
import '../../const-92587921.js';
import '../../groupChannel-8bf47932.js';
import '../../__bundle-ba710a09-60e8438d.js';
import '../../uuid-6e50e4c4.js';
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
