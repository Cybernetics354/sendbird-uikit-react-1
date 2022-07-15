'use strict';

var React = require('react');
var ui_Label = require('../index-7309809e.js');
var ui_LinkLabel = require('./LinkLabel.js');
var uuid = require('../uuid-428cb2f7.js');
var index = require('../index-029c9c4b.js');
var ui_MentionLabel = require('./MentionLabel.js');
require('prop-types');
require('../stringSet-49111b06.js');
require('../tslib.es6-c9f1dea2.js');
require('./ContextMenu.js');
require('../_rollupPluginBabelHelpers-404a108a.js');
require('react-dom');
require('./SortByRow.js');
require('./UserProfile.js');
require('../LocalizationContext-219f1540.js');
require('../index-6ada6170.js');
require('../withSendbird.js');
require('../sendbirdSelectors.js');
require('../topics-0f4db8a1.js');
require('../utils-703c21fc.js');
require('./Avatar.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../index-50918912.js');
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
