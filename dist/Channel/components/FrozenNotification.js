import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { L as Label, a as LabelTypography } from '../../index-d9ca04bb.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
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
