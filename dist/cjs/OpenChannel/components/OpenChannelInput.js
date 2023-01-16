'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-92b5f010.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-5cb09d2a.js');
require('../../stringSet-827d08e2.js');
require('../../index-5dca71f9.js');
require('../../_rollupPluginBabelHelpers-0825dba8.js');
require('prop-types');
require('../../const-ac27e62e.js');
require('../../const-1f118907.js');
require('../../ui/IconButton.js');
require('../../index-865da959.js');
require('../../index-c05adf2d.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-bcaa279b.js');
require('../../tslib.es6-137d7ef9.js');
require('../../index-6a589d8a.js');
require('../../UserProfileContext-f85dab3b.js');
require('../../compareIds-e1644f6f.js');
require('../../topics-74cfc1f1.js');
require('../../openChannel-aec95f4e.js');
require('../../__bundle-ba710a09-d8fef857.js');
require('../../uuid-0e49bd14.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageInputWrapper = function (props, ref) {
  var _a = OpenChannel_context.useOpenChannelContext(),
      currentOpenChannel = _a.currentOpenChannel,
      disabled = _a.disabled,
      handleSendMessage = _a.handleSendMessage,
      handleFileUpload = _a.handleFileUpload;

  var channel = currentOpenChannel;

  if (!channel) {
    return;
  }

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    ref: ref,
    disabled: disabled,
    onSendMessage: handleSendMessage,
    onFileUpload: handleFileUpload,
    placeholder: disabled && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED // add disabled because of muted state

  }));
};

var OpenChannelInput = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

module.exports = OpenChannelInput;
//# sourceMappingURL=OpenChannelInput.js.map
