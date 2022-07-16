import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-a6e62fa0.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import 'prop-types';
import '../../const-79bcca88.js';
import '../../const-b8ee874a.js';
import '../../ui/IconButton.js';
import '../../index-28e59bab.js';
import '../../index-ed7103e1.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-bb395be0.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../index-2133a7e3.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../compareIds-92f2c773.js';
import '../../topics-fc458762.js';
import '../../openChannel-1ee60e13.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../uuid-4b033040.js';
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
