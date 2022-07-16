import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-d38b5906.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import 'prop-types';
import '../../const-cb851d82.js';
import '../../const-b6b0314e.js';
import '../../ui/IconButton.js';
import '../../index-fc0130a5.js';
import '../../index-d9ca04bb.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-5ddc9ee9.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../index-4cc90022.js';
import '../../UserProfileContext-0d690a96.js';
import '../../compareIds-8f332743.js';
import '../../topics-5b2e6feb.js';
import '../../openChannel-e1be8728.js';
import '../../__bundle-ba710a09-50a7d4d5.js';
import '../../uuid-ffa79983.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';

var MessageInputWrapper = function (props, ref) {
  var _a = useOpenChannelContext(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default.createElement(MessageInput, {
    ref: ref,
    disabled: disabled,
    onSendMessage: handleSendMessage,
    onFileUpload: handleFileUpload,
    placeholder: disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

  }));
};

var OpenChannelInput = /*#__PURE__*/React__default.forwardRef(MessageInputWrapper);

export { OpenChannelInput as default };
//# sourceMappingURL=OpenChannelInput.js.map
