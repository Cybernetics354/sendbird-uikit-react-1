import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import { L as Label, a as LabelTypography } from '../../index-96f2ca18.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
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
