import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d22b125b.js';
import { L as Label, a as LabelTypography } from '../../index-af45308d.js';
import '../../stringSet-3b6413f0.js';
import '../../index-b218dad1.js';
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
