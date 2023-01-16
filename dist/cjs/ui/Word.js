'use strict';

var React = require('react');
var ui_Label = require('../index-1ac2a868.js');
var ui_LinkLabel = require('./LinkLabel.js');
var uuid = require('../uuid-11d3ef5e.js');
var index = require('../index-8daa2cfb.js');
var ui_MentionLabel = require('./MentionLabel.js');
require('prop-types');
require('../stringSet-8a123999.js');
require('../tslib.es6-c3158c01.js');
require('./ContextMenu.js');
require('../_rollupPluginBabelHelpers-652929ec.js');
require('react-dom');
require('./SortByRow.js');
require('./UserProfile.js');
require('../LocalizationContext-4edc1945.js');
require('../index-1968df45.js');
require('../withSendbird.js');
require('../sendbirdSelectors.js');
require('../topics-1218aada.js');
require('../utils-f60a9a5a.js');
require('./Avatar.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../index-a189c9f3.js');
require('../useSendbirdStateContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Word(props) {
  var word = props.word,
      message = props.message,
      _a = props.isByMe,
      isByMe = _a === void 0 ? false : _a,
      _b = props.mentionTemplate,
      mentionTemplate = _b === void 0 ? '@' : _b,
      _c = props.renderString,
      renderString = _c === void 0 ? null : _c;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sendbird-word"
  }, index.convertWordToStringObj(word, message === null || message === void 0 ? void 0 : message.mentionedUsers).map(function (stringObj) {
    var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
    var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
    var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';

    if (renderString && typeof renderString === 'function') {
      return renderString(stringObj);
    }

    if (type === index.StringObjType.mention) {
      return /*#__PURE__*/React__default["default"].createElement(ui_MentionLabel, {
        mentionTemplate: mentionTemplate,
        mentionedUserId: userId,
        mentionedUserNickname: value,
        key: uuid.uuidv4(),
        isByMe: isByMe
      });
    } else if (type === index.StringObjType.url) {
      return /*#__PURE__*/React__default["default"].createElement(ui_LinkLabel["default"], {
        className: "sendbird-word__url",
        key: uuid.uuidv4(),
        src: word,
        type: ui_Label.LabelTypography.BODY_1,
        color: isByMe ? ui_Label.LabelColors.ONCONTENT_1 : ui_Label.LabelColors.ONBACKGROUND_1
      }, value);
    } else {
      return value;
    }
  }));
}

module.exports = Word;
//# sourceMappingURL=Word.js.map
