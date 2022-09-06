import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import MessageInput from '../../ui/MessageInput.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-c7299a1f.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import 'prop-types';
import '../../const-249ebbab.js';
import '../../const-92587921.js';
import '../../ui/IconButton.js';
import '../../index-b422234e.js';
import '../../index-a401bc58.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-ee45e5fc.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../index-0daadd03.js';
import '../../UserProfileContext-9e885899.js';
import '../../compareIds-a43728b9.js';
import '../../topics-f928ee3e.js';
import '../../openChannel-5082ff44.js';
import '../../__bundle-ba710a09-60e8438d.js';
import '../../uuid-6e50e4c4.js';
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
