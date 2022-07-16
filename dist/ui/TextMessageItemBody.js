import React__default, { useContext, useMemo } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import { g as getClassName, q as isEditedMessage } from '../index-fcb040ec.js';
import { a as LocalizationContext } from '../LocalizationContext-d3e49456.js';
import { u as uuidv4 } from '../uuid-91011cda.js';
import Word from './Word.js';
import 'prop-types';
import '../stringSet-49030004.js';
import '../tslib.es6-4a4f5c58.js';
import '../index-a53c3ed1.js';
import './LinkLabel.js';
import './MentionLabel.js';
import './ContextMenu.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';
import 'react-dom';
import './SortByRow.js';
import './UserProfile.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-480e2d9e.js';
import '../utils-87c63da6.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../index-d880236d.js';
import '../useSendbirdStateContext.js';

function TextMessageItemBody(_a) {
  var _b, _c, _d;

  var className = _a.className,
      message = _a.message,
      _e = _a.isByMe,
      isByMe = _e === void 0 ? false : _e,
      _f = _a.mouseHover,
      mouseHover = _f === void 0 ? false : _f,
      _g = _a.isMentionEnabled,
      isMentionEnabled = _g === void 0 ? false : _g;
  var stringSet = useContext(LocalizationContext).stringSet;
  var isMessageMentioned = isMentionEnabled && ((_b = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = message === null || message === void 0 ? void 0 : message.mentionedUsers) === null || _c === void 0 ? void 0 : _c.length) > 0;
  var sentences = useMemo(function () {
    var _a;

    return (_a = message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate) === null || _a === void 0 ? void 0 : _a.split(/\n/).map(function (sentence) {
      return sentence.split(/\s/);
    });
  }, [message === null || message === void 0 ? void 0 : message.mentionedMessageTemplate]);
  return /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
  }, /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-text-message-item-body', isByMe ? 'outgoing' : 'incoming', mouseHover ? 'mouse-hover' : '', ((_d = message === null || message === void 0 ? void 0 : message.reactions) === null || _d === void 0 ? void 0 : _d.length) > 0 ? 'reactions' : ''])
  }, isMessageMentioned ? sentences.map(function (sentence, index) {
    return [sentence.map(function (word) {
      return /*#__PURE__*/React__default.createElement(Word, {
        key: uuidv4(),
        word: word,
        message: message,
        isByMe: isByMe
      });
    }), (sentences === null || sentences === void 0 ? void 0 : sentences[index + 1]) ? /*#__PURE__*/React__default.createElement("br", null) : null];
  }) : message === null || message === void 0 ? void 0 : message.message, isEditedMessage(message) && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-text-message-item-body__message edited",
    type: LabelTypography.BODY_1,
    color: isByMe ? LabelColors.ONCONTENT_2 : LabelColors.ONBACKGROUND_2
  }, " ".concat(stringSet.MESSAGE_EDITED, " "))));
}

export { TextMessageItemBody as default };
//# sourceMappingURL=TextMessageItemBody.js.map
