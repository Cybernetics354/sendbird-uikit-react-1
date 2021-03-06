'use strict';

var React = require('react');
var ui_Avatar = require('./Avatar.js');
var LocalizationContext = require('../LocalizationContext-b96a3e25.js');
var utils = require('../utils-2ed63c9b.js');
require('../tslib.es6-90bf9fc5.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-04261033.js');
require('../stringSet-c701d85c.js');
require('../index-30aacb0e.js');

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
