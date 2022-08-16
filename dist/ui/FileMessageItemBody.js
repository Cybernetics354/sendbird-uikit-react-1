import React__default from 'react';
import { b as LabelColors, L as Label, a as LabelTypography } from '../index-b990bb50.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import TextButton from './TextButton.js';
import { g as getClassName, M as getUIKitFileType, t as truncateString } from '../index-5075c241.js';
import 'prop-types';
import '../stringSet-1980c44a.js';
import '../color-5ff88e0d.js';
import '../tslib.es6-7262cbaf.js';

function FileMessageItemBody(_a) {
  var _b;

  var className = _a.className,
      message = _a.message,
      _c = _a.isByMe,
      isByMe = _c === void 0 ? false : _c,
      _d = _a.mouseHover,
      mouseHover = _d === void 0 ? false : _d;
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-file-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_b = message === null || message === void 0 ? void 0 : message.reactions) === null || _b === void 0 ? void 0 : _b.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-file-message-item-body__file-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: 'sendbird-file-message-item-body__file-icon__icon',
    type: {
      IMAGE: IconTypes.PHOTO,
      VIDEO: IconTypes.PLAY,
      AUDIO: IconTypes.FILE_AUDIO,
      GIF: IconTypes.GIF,
      OTHERS: IconTypes.FILE_DOCUMENT
    }[getUIKitFileType(message === null || message === void 0 ? void 0 : message.type)],
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), /*#__PURE__*/React__default.createElement(TextButton, {
    className: "sendbird-file-message-item-body__file-name",
    onClick: function () {
      window.open(message === null || message === void 0 ? void 0 : message.url);
    },
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-file-message-item-body__file-name__text",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, truncateString((message === null || message === void 0 ? void 0 : message.name) || (message === null || message === void 0 ? void 0 : message.url)))));
}

export { FileMessageItemBody as default };
//# sourceMappingURL=FileMessageItemBody.js.map
