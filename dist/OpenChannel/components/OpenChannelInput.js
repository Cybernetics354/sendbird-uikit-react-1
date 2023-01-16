import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-f2486c30.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-2d64019d.js';
import '../../stringSet-5c50e96e.js';
import '../../index-bfc04e6e.js';
import '../../_rollupPluginBabelHelpers-848c5853.js';
import 'prop-types';
import '../../const-3640e36f.js';
import '../../const-38038f0e.js';
import '../../ui/IconButton.js';
import '../../index-9a801843.js';
import '../../index-19cce0bb.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-42611471.js';
import '../../tslib.es6-19dec4e0.js';
import '../../index-a08d70ad.js';
import '../../UserProfileContext-8fcecbac.js';
import '../../compareIds-3145b5b2.js';
import '../../topics-351221d8.js';
import '../../openChannel-2b407453.js';
import '../../__bundle-ba710a09-9d691cce.js';
import '../../uuid-30725b60.js';
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
