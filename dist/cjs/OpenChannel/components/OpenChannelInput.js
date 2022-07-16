'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-c4e6256c.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-e0b3c618.js');
require('../../stringSet-6c45946e.js');
require('../../index-5a900a14.js');
require('../../_rollupPluginBabelHelpers-95f9644b.js');
require('prop-types');
require('../../const-c035bdfd.js');
require('../../const-7bb52067.js');
require('../../ui/IconButton.js');
require('../../index-d3743106.js');
require('../../index-9235a70d.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-442b2a43.js');
require('../../tslib.es6-79d6c001.js');
require('../../index-e992811c.js');
require('../../UserProfileContext-7343163c.js');
require('../../compareIds-3c8f7012.js');
require('../../topics-9033c412.js');
require('../../openChannel-3debd87b.js');
require('../../__bundle-ba710a09-aa384520.js');
require('../../uuid-35ad849a.js');
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
