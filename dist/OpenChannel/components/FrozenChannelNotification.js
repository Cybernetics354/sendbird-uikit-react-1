import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-09cb5078.js';
import { L as Label, a as LabelTypography } from '../../index-8eb795c0.js';
import '../../stringSet-9cd89798.js';
import '../../index-5b9a7c71.js';
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
