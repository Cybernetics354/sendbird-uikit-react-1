import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-12a49911.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-c172bbe1.js';
import '../../stringSet-1980c44a.js';
import '../../index-f2df602e.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import 'prop-types';
import '../../const-8515f91a.js';
import '../../const-169ab7cc.js';
import '../../ui/IconButton.js';
import '../../index-6b3586e6.js';
import '../../index-b990bb50.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-5075c241.js';
import '../../tslib.es6-7262cbaf.js';
import '../../index-2580d704.js';
import '../../UserProfileContext-82d9c025.js';
import '../../compareIds-01d1c3e1.js';
import '../../topics-de8d1abb.js';
import '../../openChannel-dd56e39d.js';
import '../../__bundle-ba710a09-f2231fe3.js';
import '../../uuid-5ca3889a.js';
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
