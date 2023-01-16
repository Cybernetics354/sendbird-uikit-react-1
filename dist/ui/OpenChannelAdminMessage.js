import { a as __spreadArray } from '../tslib.es6-6b1ce61a.js';
import React__default from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-96f2ca18.js';
import 'prop-types';
import '../stringSet-1cad1dbf.js';

function OpenChannelAdminMessage(_a) {
  var className = _a.className,
      message = _a.message;
  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-openchannel-admin-message'], false).join(' ')
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-openchannel-admin-message__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, message.message || ''));
}

export { OpenChannelAdminMessage as default };
//# sourceMappingURL=OpenChannelAdminMessage.js.map
