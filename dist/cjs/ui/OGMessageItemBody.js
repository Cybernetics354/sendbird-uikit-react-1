'use strict';

var React = require('react');
var ui_Word = require('./Word.js');
var ui_ImageRenderer = require('./ImageRenderer.js');
var ui_Icon = require('./Icon.js');
var ui_Label = require('../index-2dfdb9de.js');
var uuid = require('../uuid-d427ce45.js');
var index = require('../index-6292ff33.js');
var LocalizationContext = require('../LocalizationContext-ea1242a7.js');
require('./LinkLabel.js');
require('prop-types');
require('./MentionLabel.js');
require('./ContextMenu.js');
require('../_rollupPluginBabelHelpers-34e22b99.js');
require('react-dom');
require('./SortByRow.js');
require('../stringSet-c8c286da.js');
require('../tslib.es6-bd7bd76d.js');
require('./UserProfile.js');
require('../withSendbird.js');
require('../sendbirdSelectors.js');
require('../topics-9b308b83.js');
require('../utils-ae4d63e2.js');
require('./Avatar.js');
require('../index-51cd7ad2.js');
require('../index-10f7dd53.js');
require('../useSendbirdStateContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OGMessageItemBody(_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

  var className = _a.className,
      message = _a.message,
      _m = _a.isByMe,
      isByMe = _m === void 0 ? false : _m,
      _o = _a.mouseHover,
      mouseHover = _o === void 0 ? false : _o,
      _p = _a.isMentionEnabled,
      isMentionEnabled = _p === void 0 ? false : _p;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var openOGUrl = function () {
    var _a, _b;

    if ((_a = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _a === void 0 ? void 0 : _a.url) window.open((_b = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _b === void 0 ? void 0 : _b.url);
  };

  var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-og-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : ''])
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    key: uuid.uuidv4(),
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-og-message-item-body__text-bubble"
  }, isMessageMentioned ? message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate.split(' ').map(function (word) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Word, {
      key: uuid.uuidv4(),
      word: word,
      message: message,
      isByMe: isByMe
    });
  }) : message === null || message === void 0 ? void 0 : message.message.split(' ').map(function (word) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Word, {
      key: uuid.uuidv4(),
      word: word,
      message: message,
      isByMe: isByMe
    });
  }), index.isEditedMessage(message) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-og-message-item-body__text-bubble__message",
    type: ui_Label.LabelTypography.BODY_1,
    color: isByMe ? ui_Label.LabelColors.ONCONTENT_2 : ui_Label.LabelColors.ONBACKGROUND_2
  }, " ".concat(stringSet.MESSAGE_EDITED, " ")))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-og-message-item-body__og-thumbnail",
    onClick: openOGUrl
  }, /*#__PURE__*/React__default["default"].createElement(ui_ImageRenderer, {
    className: "sendbird-og-message-item-body__og-thumbnail__image",
    url: ((_f = (_e = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _e === void 0 ? void 0 : _e.defaultImage) === null || _f === void 0 ? void 0 : _f.url) || '',
    alt: (_h = (_g = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _g === void 0 ? void 0 : _g.defaultImage) === null || _h === void 0 ? void 0 : _h.alt // TODO: Change fixing width and height lengths
    ,
    width: "320px",
    height: "180px",
    defaultComponent: /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-og-message-item-body__og-thumbnail__place-holder"
    }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
      className: "sendbird-og-message-item-body__og-thumbnail__place-holder__icon",
      type: ui_Icon.IconTypes.THUMBNAIL_NONE,
      width: "56px",
      height: "56px"
    }))
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-og-message-item-body__description",
    onClick: openOGUrl
  }, ((_j = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _j === void 0 ? void 0 : _j.title) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-og-message-item-body__description__title",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, message.ogMetaData.title), ((_k = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _k === void 0 ? void 0 : _k.description) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-og-message-item-body__description__description",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, message.ogMetaData.description), ((_l = message === null || message === void 0 ? void 0 : message.ogMetaData) === null || _l === void 0 ? void 0 : _l.url) && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-og-message-item-body__description__url",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, message.ogMetaData.url)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-og-message-item-body__cover"
  }));
}

module.exports = OGMessageItemBody;
//# sourceMappingURL=OGMessageItemBody.js.map
