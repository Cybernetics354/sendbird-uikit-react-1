'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-219f1540.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-f39fe4c2.js');
require('../../stringSet-49111b06.js');
require('../../index-6ada6170.js');
require('../../_rollupPluginBabelHelpers-404a108a.js');
require('prop-types');
require('../../const-f7b68670.js');
require('../../const-a82a653e.js');
require('../../ui/IconButton.js');
require('../../index-50918912.js');
require('../../index-7309809e.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-029c9c4b.js');
require('../../tslib.es6-c9f1dea2.js');
require('../../index-81be9e1d.js');
require('../../UserProfileContext-b48e5176.js');
require('../../compareIds-87d05f16.js');
require('../../topics-0f4db8a1.js');
require('../../openChannel-f639585c.js');
require('../../__bundle-ba710a09-a84711b1.js');
require('../../uuid-428cb2f7.js');
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
