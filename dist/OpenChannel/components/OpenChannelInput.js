import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d22b125b.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-706e8c07.js';
import '../../stringSet-3b6413f0.js';
import '../../index-b218dad1.js';
import '../../_rollupPluginBabelHelpers-33833b5a.js';
import 'prop-types';
import '../../const-69f44db1.js';
import '../../const-31ddacec.js';
import '../../ui/IconButton.js';
import '../../index-44bf1b6e.js';
import '../../index-af45308d.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-130c824d.js';
import '../../tslib.es6-cb5d3fd4.js';
import '../../index-a4d30062.js';
import '../../UserProfileContext-701bbd1d.js';
import '../../compareIds-f1c069c5.js';
import '../../topics-72f59d50.js';
import '../../openChannel-6b4962c3.js';
import '../../__bundle-ba710a09-823d594c.js';
import '../../uuid-361fa4d5.js';
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
