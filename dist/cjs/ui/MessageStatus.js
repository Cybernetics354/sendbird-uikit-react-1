'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('../tslib.es6-512de66a.js');
var React = require('react');
var index$1 = require('../index-ade9e29b.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-c19c70c5.js');
var ui_Loader = require('./Loader.js');
var index = require('../index-08297238.js');
var LocalizationContext = require('../LocalizationContext-1d24d5aa.js');
require('../index-80f7ae1e.js');
require('prop-types');
require('../stringSet-39290f11.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var MessageStatusTypes = index.getOutgoingMessageStates();
function MessageStatus(_a) {
  var _b, _c;

  var _d, _e;

  var className = _a.className,
      message = _a.message,
      channel = _a.channel;
  var dateLocale = LocalizationContext.useLocalization().dateLocale;
  var status = React.useMemo(function () {
    return index.getOutgoingMessageState(channel, message);
  }, [(_d = channel === null || channel === void 0 ? void 0 : channel.getUnreadMemberCount) === null || _d === void 0 ? void 0 : _d.call(channel, message), (_e = channel === null || channel === void 0 ? void 0 : channel.getUndeliveredMemberCount) === null || _e === void 0 ? void 0 : _e.call(channel, message)]);
  var hideMessageStatusIcon = (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && (channel.isSuper || channel.isPublic || channel.isBroadcast) && !(status === MessageStatusTypes.PENDING || status === MessageStatusTypes.FAILED);
  var iconType = (_b = {}, _b[MessageStatusTypes.SENT] = ui_Icon.IconTypes.DONE, _b[MessageStatusTypes.DELIVERED] = ui_Icon.IconTypes.DONE_ALL, _b[MessageStatusTypes.READ] = ui_Icon.IconTypes.DONE_ALL, _b[MessageStatusTypes.FAILED] = ui_Icon.IconTypes.ERROR, _b);
  var iconColor = (_c = {}, _c[MessageStatusTypes.SENT] = ui_Icon.IconColors.SENT, _c[MessageStatusTypes.DELIVERED] = ui_Icon.IconColors.SENT, _c[MessageStatusTypes.READ] = ui_Icon.IconColors.READ, _c[MessageStatusTypes.FAILED] = ui_Icon.IconColors.ERROR, _c);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-status'], false).join(' ')
  }, status === MessageStatusTypes.PENDING ? /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    className: "sendbird-message-status__icon",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "16px",
    height: "16px"
  })) : /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-message-status__icon ".concat(hideMessageStatusIcon ? 'hide-icon' : ''),
    type: iconType[status] || ui_Icon.IconTypes.ERROR,
    fillColor: iconColor[status],
    width: "16px",
    height: "16px"
  }), index.isSentStatus(status) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-status__text",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, index$1.format((message === null || message === void 0 ? void 0 : message.createdAt) || 0, 'p', {
    locale: dateLocale
  })));
}

exports.MessageStatusTypes = MessageStatusTypes;
exports["default"] = MessageStatus;
//# sourceMappingURL=MessageStatus.js.map
