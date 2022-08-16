'use strict';

var React = require('react');
var ui_Avatar = require('./Avatar.js');
var LocalizationContext = require('../LocalizationContext-1d24d5aa.js');
var utils = require('../utils-3d0a88cc.js');
require('../tslib.es6-512de66a.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-34245f96.js');
require('../stringSet-39290f11.js');
require('../index-80f7ae1e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ChannelAvatar(_a) {
  var channel = _a.channel,
      theme = _a.theme,
      _b = _a.height,
      height = _b === void 0 ? 56 : _b,
      _c = _a.width,
      width = _c === void 0 ? 56 : _c;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var memoizedAvatar = React.useMemo(function () {
    return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
      className: "sendbird-chat-header__avatar--open-channel",
      src: utils.getOpenChannelAvatar(channel),
      width: "".concat(width, "px"),
      height: "".concat(height, "px"),
      alt: (channel === null || channel === void 0 ? void 0 : channel.name) || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE
    });
  }, [channel === null || channel === void 0 ? void 0 : channel.coverUrl, theme]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, memoizedAvatar);
}

module.exports = ChannelAvatar;
//# sourceMappingURL=OpenChannelAvatar.js.map
