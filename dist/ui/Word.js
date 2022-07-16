import React__default from 'react';
import { a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import LinkLabel from './LinkLabel.js';
import { u as uuidv4 } from '../uuid-91011cda.js';
import { u as convertWordToStringObj, S as StringObjType } from '../index-fcb040ec.js';
import MentionLabel from './MentionLabel.js';
import 'prop-types';
import '../stringSet-49030004.js';
import '../tslib.es6-4a4f5c58.js';
import './ContextMenu.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';
import 'react-dom';
import './SortByRow.js';
import './UserProfile.js';
import '../LocalizationContext-d3e49456.js';
import '../index-a53c3ed1.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-480e2d9e.js';
import '../utils-87c63da6.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../index-d880236d.js';
import '../useSendbirdStateContext.js';

function Word(props) {
  var word = props.word,
      message = props.message,
      _a = props.isByMe,
      isByMe = _a === void 0 ? false : _a,
      _b = props.mentionTemplate,
      mentionTemplate = _b === void 0 ? '@' : _b,
      _c = props.renderString,
      renderString = _c === void 0 ? null : _c;
  return /*#__PURE__*/React__default.createElement("span", {
    className: "sendbird-word"
  }, convertWordToStringObj(word, message === null || message === void 0 ? void 0 : message.mentionedUsers).map(function (stringObj) {
    var type = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.type) || '';
    var value = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.value) || '';
    var userId = (stringObj === null || stringObj === void 0 ? void 0 : stringObj.userId) || '';

    if (renderString && typeof renderString === 'function') {
      return renderString(stringObj);
    }

    if (type === StringObjType.mention) {
      return /*#__PURE__*/React__default.createElement(MentionLabel, {
        mentionTemplate: mentionTemplate,
        mentionedUserId: userId,
        mentionedUserNickname: value,
        key: uuidv4(),
        isByMe: isByMe
      });
    } else if (type === StringObjType.url) {
      return /*#__PURE__*/React__default.createElement(LinkLabel, {
        className: "sendbird-word__url",
        key: uuidv4(),
        src: word,
        type: LabelTypography.BODY_1,
        color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
      }, value);
    } else {
      return value;
    }
  }));
}

export { Word as default };
//# sourceMappingURL=Word.js.map
