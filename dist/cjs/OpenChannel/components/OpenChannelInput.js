'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-44ed70a4.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-0afd8d16.js');
require('../../stringSet-6cea29d9.js');
require('../../index-f0b59409.js');
require('../../_rollupPluginBabelHelpers-5122729b.js');
require('prop-types');
require('../../const-e72bf9c1.js');
require('../../const-82799a29.js');
require('../../ui/IconButton.js');
require('../../index-73892caf.js');
require('../../index-1a5c5200.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-129ce994.js');
require('../../tslib.es6-ca286580.js');
require('../../index-3913cf07.js');
require('../../UserProfileContext-81f77266.js');
require('../../compareIds-be5b54a0.js');
require('../../topics-368356cd.js');
require('../../openChannel-f4f82a7b.js');
require('../../__bundle-7dfccc8c-af5198e1.js');
require('../../uuid-c037b76e.js');
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
