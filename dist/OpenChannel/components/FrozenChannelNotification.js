import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-12a49911.js';
import { L as Label, a as LabelTypography } from '../../index-b990bb50.js';
import '../../stringSet-1980c44a.js';
import '../../index-f2df602e.js';
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
