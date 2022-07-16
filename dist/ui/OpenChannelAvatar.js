import React__default, { useContext, useMemo } from 'react';
import Avatar from './Avatar.js';
import { a as LocalizationContext } from '../LocalizationContext-6dc0d190.js';
import { b as getOpenChannelAvatar } from '../utils-cbdd30a8.js';
import '../tslib.es6-bdfb18b0.js';
import './ImageRenderer.js';
import 'prop-types';
import './Icon.js';
import '../uuid-4b033040.js';
import '../stringSet-acf9d2a1.js';
import '../index-527c3bc4.js';

function ChannelAvatar(_a) {
  var channel = _a.channel,
      theme = _a.theme,
      _b = _a.height,
      height = _b === void 0 ? 56 : _b,
      _c = _a.width,
      width = _c === void 0 ? 56 : _c;
  var stringSet = useContext(LocalizationContext).stringSet;
  var memoizedAvatar = useMemo(function () {
    return /*#__PURE__*/React__default.createElement(Avatar, {
      className: "sendbird-chat-header__avatar--open-channel",
      src: getOpenChannelAvatar(channel),
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      alt: (channel === null || channel === void 0 ? void 0 : channel.name) || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE
    });
  }, [channel === null || channel === void 0 ? void 0 : channel.coverUrl, theme]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, memoizedAvatar);
}

export { ChannelAvatar as default };
//# sourceMappingURL=OpenChannelAvatar.js.map
