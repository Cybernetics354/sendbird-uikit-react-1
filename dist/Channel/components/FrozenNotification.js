import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { L as Label, a as LabelTypography } from '../../index-a401bc58.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
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
