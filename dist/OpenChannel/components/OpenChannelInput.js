import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-09cb5078.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-96d2b192.js';
import '../../stringSet-9cd89798.js';
import '../../index-5b9a7c71.js';
import '../../_rollupPluginBabelHelpers-6a3c1c63.js';
import 'prop-types';
import '../../const-eb43aee9.js';
import '../../const-80c30e70.js';
import '../../ui/IconButton.js';
import '../../index-8c1601f6.js';
import '../../index-8eb795c0.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-af6c813e.js';
import '../../tslib.es6-21381414.js';
import '../../index-d9dcc9ce.js';
import '../../UserProfileContext-63091e16.js';
import '../../compareIds-954f7a96.js';
import '../../topics-a22af37d.js';
import '../../openChannel-5f15f91b.js';
import '../../__bundle-7dfccc8c-926961b2.js';
import '../../uuid-ee711734.js';
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
