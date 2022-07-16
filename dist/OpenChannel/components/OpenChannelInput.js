import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-8a121e1d.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-0bc44955.js';
import '../../stringSet-955abea5.js';
import '../../index-76197404.js';
import '../../_rollupPluginBabelHelpers-4dd1a6d8.js';
import 'prop-types';
import '../../const-60e659d9.js';
import '../../const-9b2b8324.js';
import '../../ui/IconButton.js';
import '../../index-bd1b8bfb.js';
import '../../index-2cd7fa96.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-2dbecfe3.js';
import '../../tslib.es6-4021ca51.js';
import '../../index-5588c8e9.js';
import '../../UserProfileContext-aa0ce103.js';
import '../../compareIds-53874ec3.js';
import '../../topics-e07cc011.js';
import '../../openChannel-61944e1d.js';
import '../../__bundle-ba710a09-6e75e504.js';
import '../../uuid-c5fe47ff.js';
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
