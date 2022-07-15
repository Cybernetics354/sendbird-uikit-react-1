import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-c6c43024.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-622f103b.js';
import '../../stringSet-bc59be04.js';
import '../../index-7ce5a58a.js';
import '../../_rollupPluginBabelHelpers-5ef7889e.js';
import 'prop-types';
import '../../const-fc5867a3.js';
import '../../const-54c1f5b2.js';
import '../../ui/IconButton.js';
import '../../index-d7f84f9a.js';
import '../../index-dd7d2c20.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-5b610291.js';
import '../../tslib.es6-5837fd36.js';
import '../../index-f9f73baa.js';
import '../../UserProfileContext-c80e77ff.js';
import '../../compareIds-625ff628.js';
import '../../topics-16b6b21b.js';
import '../../openChannel-a64f8d8e.js';
import '../../__bundle-ba710a09-d0f8c8de.js';
import '../../uuid-bf348b66.js';
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
