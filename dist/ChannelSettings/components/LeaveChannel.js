import React__default from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import { n as noop } from '../../utils-d6f171ef.js';
import Modal from '../../ui/Modal.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../UserProfileContext-7c91714e.js';
import 'prop-types';
import '../../uuid-21b2a5db.js';
import 'react-dom';
import '../../LocalizationContext-bdb56d81.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../index-deb6aab1.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-1187996f.js';
import '../../index-96f2ca18.js';

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
