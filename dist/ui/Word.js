import React__default from 'react';
import { a as LabelTypography, b as LabelColors } from '../index-8eb795c0.js';
import LinkLabel from './LinkLabel.js';
import { u as uuidv4 } from '../uuid-ee711734.js';
import { l as convertWordToStringObj, S as StringObjType } from '../index-af6c813e.js';
import MentionLabel from './MentionLabel.js';
import 'prop-types';
import '../stringSet-9cd89798.js';
import '../tslib.es6-21381414.js';
import './ContextMenu.js';
import '../_rollupPluginBabelHelpers-6a3c1c63.js';
import 'react-dom';
import './SortByRow.js';
import './UserProfile.js';
import '../LocalizationContext-09cb5078.js';
import '../index-5b9a7c71.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-a22af37d.js';
import '../utils-20d05a65.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../index-8c1601f6.js';
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
