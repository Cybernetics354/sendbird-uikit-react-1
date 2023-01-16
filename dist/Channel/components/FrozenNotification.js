import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-f2486c30.js';
import { L as Label, a as LabelTypography } from '../../index-19cce0bb.js';
import '../../stringSet-5c50e96e.js';
import '../../index-bfc04e6e.js';
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
