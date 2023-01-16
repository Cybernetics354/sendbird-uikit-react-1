'use strict';

var React = require('react');
var ui_Avatar = require('./Avatar.js');
var LocalizationContext = require('../LocalizationContext-4edc1945.js');
var utils = require('../utils-48aa919f.js');
require('../tslib.es6-c3158c01.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-11d3ef5e.js');
require('../stringSet-8a123999.js');
require('../index-1968df45.js');

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
