import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-2951d70b.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import 'prop-types';
import '../../const-f5c14b82.js';
import '../../const-1cfee98a.js';
import '../../ui/IconButton.js';
import '../../index-1187996f.js';
import '../../index-96f2ca18.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-f2c869d7.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../index-6e7e7eaa.js';
import '../../UserProfileContext-7c91714e.js';
import '../../compareIds-14392765.js';
import '../../topics-e87f2985.js';
import '../../openChannel-64614117.js';
import '../../__bundle-ba710a09-e080d3fa.js';
import '../../uuid-21b2a5db.js';
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
