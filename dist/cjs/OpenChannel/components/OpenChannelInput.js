'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-830b8e4c.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('prop-types');
require('../../const-295db437.js');
require('../../const-a4d49809.js');
require('../../ui/IconButton.js');
require('../../index-51cd7ad2.js');
require('../../index-2dfdb9de.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-6292ff33.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../index-09c690af.js');
require('../../UserProfileContext-24790fe2.js');
require('../../compareIds-9caf1355.js');
require('../../topics-9b308b83.js');
require('../../openChannel-d0283ff1.js');
require('../../__bundle-ba710a09-af5d7380.js');
require('../../uuid-d427ce45.js');
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
