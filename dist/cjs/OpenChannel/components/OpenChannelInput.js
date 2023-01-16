'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-4edc1945.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-6caff9d3.js');
require('../../stringSet-8a123999.js');
require('../../index-1968df45.js');
require('../../_rollupPluginBabelHelpers-652929ec.js');
require('prop-types');
require('../../const-538ffca7.js');
require('../../const-e7009964.js');
require('../../ui/IconButton.js');
require('../../index-a189c9f3.js');
require('../../index-1ac2a868.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-8daa2cfb.js');
require('../../tslib.es6-c3158c01.js');
require('../../index-52d3e5e9.js');
require('../../UserProfileContext-80f2ddb9.js');
require('../../compareIds-99bee171.js');
require('../../topics-1218aada.js');
require('../../openChannel-b20cd052.js');
require('../../__bundle-ba710a09-8573aa4e.js');
require('../../uuid-11d3ef5e.js');
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
