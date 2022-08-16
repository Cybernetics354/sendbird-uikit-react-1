'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-1d24d5aa.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-79b25065.js');
require('../../stringSet-39290f11.js');
require('../../index-80f7ae1e.js');
require('../../_rollupPluginBabelHelpers-db05c769.js');
require('prop-types');
require('../../const-9efac91b.js');
require('../../const-eb7d29de.js');
require('../../ui/IconButton.js');
require('../../index-0f67da42.js');
require('../../index-c19c70c5.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-08297238.js');
require('../../tslib.es6-512de66a.js');
require('../../index-ade9e29b.js');
require('../../UserProfileContext-0b5ac2eb.js');
require('../../compareIds-67c645b6.js');
require('../../topics-438f3376.js');
require('../../openChannel-48be5abd.js');
require('../../__bundle-ba710a09-24158041.js');
require('../../uuid-34245f96.js');
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
