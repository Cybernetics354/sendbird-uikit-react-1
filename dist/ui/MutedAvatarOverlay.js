import React__default from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import 'prop-types';

function MutedAvatarOverlay(props) {
  var _a = props.height,
      height = _a === void 0 ? 24 : _a,
      _b = props.width,
      width = _b === void 0 ? 24 : _b;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-muted-avatar",
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px")
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-muted-avatar__icon"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-muted-avatar__bg",
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px")
    }
  }), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.MUTE,
    fillColor: IconColors.WHITE,
    width: "".concat(height - 8, "px"),
    height: "".concat(width - 8, "px")
  })));
}

export { MutedAvatarOverlay as default };
//# sourceMappingURL=MutedAvatarOverlay.js.map
