import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { L as Label, a as LabelTypography } from '../../index-a401bc58.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import 'prop-types';

var FrozenNotification = function () {
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-frozen-channel-notification"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-frozen-channel-notification__text",
    type: LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenChannelNotification.js.map
