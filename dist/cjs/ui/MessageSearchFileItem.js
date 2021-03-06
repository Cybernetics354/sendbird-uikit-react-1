'use strict';

var tslib_es6 = require('../tslib.es6-90bf9fc5.js');
var React = require('react');
var ui_Avatar = require('./Avatar.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-2777b3d9.js');
var LocalizationContext = require('../LocalizationContext-b96a3e25.js');
var index$1 = require('../index-442b142d.js');
var index = require('../index-4d90133e.js');
require('./ImageRenderer.js');
require('prop-types');
require('../uuid-04261033.js');
require('../stringSet-c701d85c.js');
require('../index-30aacb0e.js');
require('../index-7929fe7e.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getCreatedAt(createdAt, locale) {
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
function getIconOfFileType(message) {
  var url = message.url;
  var fileMessageUrl = url;
  var fileExtension = fileMessageUrl.match(/\.([^.]*?)(?=\?|#|$)/)[1];

  if (/(jpg|jpeg|png)$/i.test(fileExtension)) {
    return ui_Icon.IconTypes.PHOTO;
  } else if (/mp4$/i.test(fileExtension)) {
    return ui_Icon.IconTypes.PLAY;
  } else if (/mp3/i.test(fileExtension)) {
    return ui_Icon.IconTypes.FILE_AUDIO;
  } else if (/gif/i.test(fileExtension)) {
    return ui_Icon.IconTypes.GIF;
  } else {
    return ui_Icon.IconTypes.FILE_DOCUMENT;
  }
}
function truncate(fullText, textLimit) {
  if (fullText.length <= textLimit) return fullText;
  var separator = '...';
  var sepLen = separator.length;
  var charsToShow = textLimit - sepLen;
  var frontChars = Math.ceil(charsToShow / 2);
  var backChars = Math.floor(charsToShow / 2);
  return fullText.substr(0, frontChars) + separator + fullText.substr(fullText.length - backChars);
}

function MessageSearchFileItem(props) {
  var className = props.className,
      message = props.message,
      selected = props.selected,
      onClick = props.onClick;
  var createdAt = message.createdAt,
      url = message.url,
      name = message.name;
  var fileMessageUrl = url; // @ts-ignore

  var sender = message.sender || message._sender;
  var profileUrl = sender.profileUrl,
      nickname = sender.nickname;

  var _a = LocalizationContext.useLocalization(),
      stringSet = _a.stringSet,
      dateLocale = _a.dateLocale;

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: tslib_es6.__spreadArray(tslib_es6.__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-search-file-item', selected ? 'sendbird-message-search-file-item--selected' : ''], false).join(' '),
    onClick: function (e) {
      e.stopPropagation();
      onClick(message);
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-file-item__left"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    className: "sendbird-message-search-file-item__left__sender-avatar",
    src: profileUrl,
    alt: "profile image",
    width: "56px",
    height: "56px"
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-file-item__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-file-item__right__sender-name",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-file-item__right__content"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-file-item__right__content__type-icon"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: getIconOfFileType(message),
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-file-item__right__content__url",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, truncate(name || fileMessageUrl, 28)))), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-message-search-file-item__message-created-at",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, getCreatedAt(createdAt, dateLocale)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-search-file-item__right-footer"
  }));
}

module.exports = MessageSearchFileItem;
//# sourceMappingURL=MessageSearchFileItem.js.map
