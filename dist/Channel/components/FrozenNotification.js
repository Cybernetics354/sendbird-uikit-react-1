import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-8a121e1d.js';
import { L as Label, a as LabelTypography } from '../../index-2cd7fa96.js';
import '../../stringSet-955abea5.js';
import '../../index-76197404.js';
import 'prop-types';

var FrozenNotification = function () {
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-notification sendbird-notification--frozen"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-notification__text",
    type: LabelTypography.CAPTION_2
  }, stringSet.CHANNEL_FROZEN));
};

export { FrozenNotification as default };
//# sourceMappingURL=FrozenNotification.js.map
