import React__default from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { n as noop } from '../../utils-67d0347a.js';
import Modal from '../../ui/Modal.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import '../../UserProfileContext-82d9c025.js';
import 'prop-types';
import '../../uuid-5ca3889a.js';
import 'react-dom';
import '../../LocalizationContext-12a49911.js';
import '../../stringSet-1980c44a.js';
import '../../index-f2df602e.js';
import '../../index-4a28b1a1.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-6b3586e6.js';
import '../../index-b990bb50.js';

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
