'use strict';

var tslib_es6 = require('../tslib.es6-512de66a.js');
var React = require('react');
var index$1 = require('../index-ade9e29b.js');
var index = require('../index-2ad8ed9a.js');
var ui_Avatar = require('./Avatar.js');
var ui_Label = require('../index-c19c70c5.js');
var LocalizationContext = require('../LocalizationContext-1d24d5aa.js');
require('../index-80f7ae1e.js');
require('../index-f867fd15.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-34245f96.js');
require('../stringSet-39290f11.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getCreatedAt (createdAt, locale) {
  var optionalParam = locale ? {
    locale: locale
  } : null;

  if (!createdAt) {
    return '';
  }

  if (index.isToday(createdAt)) {
    return index$1.format(createdAt, 'p', optionalParam);
  }

  if (index.isYesterday(createdAt)) {
    return index.formatRelative(createdAt, new Date(), optionalParam);
  }

  return index$1.format(createdAt, 'MMM dd', optionalParam);
}

function MessageSearchItem(_a) {
  var className = _a.className,
      message = _a.message,
      selected = _a.selected,
      onClick = _a.onClick;
  var createdAt = message.createdAt;
  var messageText = message.message;
  var sender = message.sender || message._sender;
  var profileUrl = sender.profileUrl,
      nickname = sender.nickname;

  var _b = LocalizationContext.useLocalization(),
      stringSet = _b.stringSet,
      dateLocale = _b.dateLocale;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-search-item', selected ? 'sendbird-message-search-item--selected' : ''], false).join(' '),
    onClick: function (e) {
      e.stopPropagation();
      onClick(message);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-item__left"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    className: "sendbird-message-search-item__left__sender-avatar",
    src: profileUrl,
    alt: "profile image",
    width: "56px",
    height: "56px"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-item__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-item__right__sender-name",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-item__right__message-text",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, messageText), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-item__right__message-created-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, getCreatedAt(createdAt, dateLocale))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-item__right-footer"
  }));
}

module.exports = MessageSearchItem;
//# sourceMappingURL=MessageSearchItem.js.map
