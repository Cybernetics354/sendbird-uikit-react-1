import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import { L as Label, a as LabelTypography } from '../../index-53585fab.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
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
