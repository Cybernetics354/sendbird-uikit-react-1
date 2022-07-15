import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-c6c43024.js';
import { L as Label, a as LabelTypography } from '../../index-dd7d2c20.js';
import '../../stringSet-bc59be04.js';
import '../../index-7ce5a58a.js';
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
