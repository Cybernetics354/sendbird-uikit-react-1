'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-7124ef76.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-f800467e.js');
require('../../stringSet-ca0cf06e.js');
require('../../index-80df9998.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('prop-types');
require('../../const-af3f8214.js');
require('../../const-fb7538f3.js');
require('../../ui/IconButton.js');
require('../../index-c5f391d0.js');
require('../../index-9ad5c786.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-f6c81602.js');
require('../../tslib.es6-87d8a6c3.js');
require('../../index-184956b3.js');
require('../../UserProfileContext-4574eaff.js');
require('../../compareIds-61a570a9.js');
require('../../topics-55f51c3d.js');
require('../../openChannel-94bc2692.js');
require('../../__bundle-ba710a09-156cd2ec.js');
require('../../uuid-cfc8429e.js');
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
