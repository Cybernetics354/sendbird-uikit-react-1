'use strict';

var React = require('react');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ChannelSettings_context = require('../context.js');
var utils = require('../../utils-d6de0e43.js');
var ui_Modal = require('../../ui/Modal.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('../../UserProfileContext-4574eaff.js');
require('prop-types');
require('../../uuid-cfc8429e.js');
require('react-dom');
require('../../LocalizationContext-7124ef76.js');
require('../../stringSet-ca0cf06e.js');
require('../../index-80df9998.js');
require('../../index-74e1c32a.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-c5f391d0.js');
require('../../index-9ad5c786.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LeaveChannel = function (props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      onSubmit = _d === void 0 ? utils.noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? utils.noop : _e;
  var channel = (_a = ChannelSettings_context.useChannelSettingsContext()) === null || _a === void 0 ? void 0 : _a.channel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
      disabled: !isOnline,
      onCancel: onCancel,
      onSubmit: function () {
        logger.info('ChannelSettings: Leaving channel', channel);
        channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
          logger.info('ChannelSettings: Leaving channel successful!', channel);
          onSubmit();
        });
      },
      submitText: "Leave",
      titleText: "Leave this channel?"
    });
  }
};

module.exports = LeaveChannel;
//# sourceMappingURL=LeaveChannel.js.map
