import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import { L as Label, b as LabelColors, a as LabelTypography } from '../../index-ed7103e1.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import 'prop-types';

var UnreadCount = function (props) {
  var _a, _b;

  var count = props.count,
      _c = props.time,
      time = _c === void 0 ? '' : _c,
      onClick = props.onClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  var timeArray = ((_b = (_a = time === null || time === void 0 ? void 0 : time.toString) === null || _a === void 0 ? void 0 : _a.call(time)) === null || _b === void 0 ? void 0 : _b.split(' ')) || [];
  timeArray === null || timeArray === void 0 ? void 0 : timeArray.splice(-2, 0, stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__ON);

  if (count < 1) {
    return;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-notification",
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-notification__text",
    color: LabelColors.ONCONTENT_1,
    type: LabelTypography.CAPTION_2
  }, "".concat(count, " "), stringSet.CHANNEL__MESSAGE_LIST__NOTIFICATION__NEW_MESSAGE, " ".concat(timeArray.join(' '))), /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.CONTENT
  }));
};

export { UnreadCount as default };
//# sourceMappingURL=UnreadCount.js.map
