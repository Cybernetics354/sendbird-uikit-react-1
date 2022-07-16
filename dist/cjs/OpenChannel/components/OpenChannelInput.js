'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var ui_MessageInput = require('../../ui/MessageInput.js');
var OpenChannel_context = require('../../OpenChannelProvider-869db398.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('prop-types');
require('../../const-4be69557.js');
require('../../const-13b2476d.js');
require('../../ui/IconButton.js');
require('../../index-86c744f1.js');
require('../../index-2777b3d9.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-67d733e9.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../index-442b142d.js');
require('../../UserProfileContext-a3f3d44c.js');
require('../../compareIds-30eeee5f.js');
require('../../topics-efe1f803.js');
require('../../openChannel-2414f69c.js');
require('../../__bundle-ba710a09-5006ce8c.js');
require('../../uuid-04261033.js');
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
