import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import { L as Label, a as LabelTypography } from '../../index-ed7103e1.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
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
