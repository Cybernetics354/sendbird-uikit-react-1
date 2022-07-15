import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-c6c43024.js';
import { L as Label, a as LabelTypography } from '../../index-dd7d2c20.js';
import '../../stringSet-bc59be04.js';
import '../../index-7ce5a58a.js';
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
