'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-06295289.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-b46e99da.js');
require('../../stringSet-c0b7ef0b.js');
require('../../index-46a833a2.js');
require('../../_rollupPluginBabelHelpers-2157fc28.js');
require('prop-types');
require('../../const-0709205c.js');
require('../../const-635e3ce8.js');
require('../../ui/IconButton.js');
require('../../index-37c2c6ef.js');
require('../../index-06ad9a23.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-8f34af30.js');
require('../../tslib.es6-43d4c54c.js');
require('../../index-8934b8f3.js');
require('../../UserProfileContext-647b15e6.js');
require('../../compareIds-191f1b57.js');
require('../../topics-e5b39d00.js');
require('../../openChannel-65211685.js');
require('../../__bundle-ba710a09-ff4335dc.js');
require('../../uuid-3cedbe50.js');
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
