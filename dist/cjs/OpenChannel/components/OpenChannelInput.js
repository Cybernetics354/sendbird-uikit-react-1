'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-9105d37e.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-68cb26e7.js');
require('../../stringSet-038031af.js');
require('../../index-eb4297e8.js');
require('../../_rollupPluginBabelHelpers-3b162d85.js');
require('prop-types');
require('../../const-f530b299.js');
require('../../const-008ca7f2.js');
require('../../ui/IconButton.js');
require('../../index-8e1b77e0.js');
require('../../index-2e53ce20.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-6cfeab1e.js');
require('../../tslib.es6-0c558e49.js');
require('../../index-cc891b98.js');
require('../../UserProfileContext-dd094164.js');
require('../../compareIds-e3040baa.js');
require('../../topics-1f4bc730.js');
require('../../openChannel-d05932d1.js');
require('../../__bundle-ba710a09-2240fe7f.js');
require('../../uuid-02d8b98a.js');
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
