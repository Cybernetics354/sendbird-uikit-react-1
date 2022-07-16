import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-c3332d15.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import 'prop-types';
import '../../const-e626a5c7.js';
import '../../const-f8fb2a4c.js';
import '../../ui/IconButton.js';
import '../../index-d880236d.js';
import '../../index-53585fab.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-fcb040ec.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../index-35d9a787.js';
import '../../UserProfileContext-153af432.js';
import '../../compareIds-6991be9c.js';
import '../../topics-480e2d9e.js';
import '../../openChannel-f30b9999.js';
import '../../__bundle-ba710a09-7de40396.js';
import '../../uuid-91011cda.js';
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
