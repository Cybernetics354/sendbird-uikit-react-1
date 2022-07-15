import React__default from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { n as noop } from '../../utils-20d05a65.js';
import Modal from '../../ui/Modal.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-6a3c1c63.js';
import '../../UserProfileContext-63091e16.js';
import 'prop-types';
import '../../uuid-ee711734.js';
import 'react-dom';
import '../../LocalizationContext-09cb5078.js';
import '../../stringSet-9cd89798.js';
import '../../index-5b9a7c71.js';
import '../../index-58f6a33c.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-8c1601f6.js';
import '../../index-8eb795c0.js';

var LeaveChannel = function (props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      onSubmit = _d === void 0 ? noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? noop : _e;
  var channel = (_a = useChannelSettingsContext()) === null || _a === void 0 ? void 0 : _a.channel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default.createElement(Modal, {
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

export { LeaveChannel as default };
//# sourceMappingURL=LeaveChannel.js.map
