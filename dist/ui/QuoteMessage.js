import React__default, { useContext, useState } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dd7d2c20.js';
import ImageRenderer from './ImageRenderer.js';
import { a as LocalizationContext } from '../LocalizationContext-c6c43024.js';
import { M as getUIKitFileTypes, k as getClassName, u as isUserMessage, p as isThumbnailMessage, B as isVideo, N as isGif, n as isFileMessage, A as isSupportedFileView, L as getUIKitFileType, t as truncateString } from '../index-5b610291.js';
import 'prop-types';
import '../stringSet-bc59be04.js';
import '../index-7ce5a58a.js';
import '../tslib.es6-5837fd36.js';

function QuoteMessage(_a) {
  var _b;

  var _c, _d, _e, _f;

  var message = _a.message,
      _g = _a.userId,
      userId = _g === void 0 ? '' : _g,
      _h = _a.isByMe,
      isByMe = _h === void 0 ? false : _h,
      className = _a.className,
      onClick = _a.onClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  var parentMessage = message.parentMessage;
  var parentMessageSender = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.sender;
  var parentMessageSenderNickname = userId === (parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : parentMessageSender === null || parentMessageSender === void 0 ? void 0 : parentMessageSender.nickname;
  var parentMessageUrl = (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.url) || '';
  var parentMessageType = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.type;
  var currentMessageSenderNickname = userId === ((_c = message === null || message === void 0 ? void 0 : message.sender) === null || _c === void 0 ? void 0 : _c.userId) ? stringSet.QUOTED_MESSAGE__CURRENT_USER : (_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.nickname;

  var _j = useState(false),
      isThumbnailLoaded = _j[0],
      setThumbnailLoaded = _j[1];

  var uikitFileTypes = getUIKitFileTypes();
  var splitFileName = (parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.name) ? parentMessage.name.split('/') : parentMessageUrl.split('/');
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-quote-message', isByMe ? 'outgoing' : 'incoming']),
    key: parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.messageId,
    onClick: function () {
      if (onClick) onClick();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-to"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-quote-message__replied-to__icon",
    type: IconTypes.REPLY,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "12px",
    height: "12px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-to__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_3
  }, "".concat(currentMessageSenderNickname, " ").concat(stringSet.QUOTED_MESSAGE__REPLIED_TO, " ").concat(parentMessageSenderNickname))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message"
  }, isUserMessage(parentMessage) && ((_e = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.message) === null || _e === void 0 ? void 0 : _e.length) > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__text-message"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-message__text-message__word",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_1
  }, parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.message)), isThumbnailMessage(parentMessage) && parentMessageUrl && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message"
  }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
    className: "sendbird-quote-message__replied-message__thumbnail-message__image",
    url: parentMessageUrl,
    alt: parentMessageType,
    width: "144px",
    height: "108px",
    onLoad: function () {
      return setThumbnailLoaded(true);
    },
    defaultComponent: /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-quote-message__replied-message__thumbnail-message__placeholder__icon"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: isVideo(parentMessageType) ? IconTypes.PLAY : IconTypes.PHOTO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "22px",
      height: "22px"
    })))
  }), isVideo(parentMessageType) && !(((_f = parentMessage === null || parentMessage === void 0 ? void 0 : parentMessage.thumbnails) === null || _f === void 0 ? void 0 : _f.length) > 0) && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("video", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__video"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: parentMessageUrl,
    type: parentMessageType
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.PLAY,
    fillColor: IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), isThumbnailLoaded && isGif(parentMessageType) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__thumbnail-message__cover__icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.GIF,
    fillColor: IconColors.GRAY,
    width: "14px",
    height: "14px"
  })))), isFileMessage(parentMessage) && !isSupportedFileView(parentMessage.type) && parentMessageUrl && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote-message__replied-message__file-message"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-quote-message__replied-message__file-message__type-icon",
    type: (_b = {}, _b[uikitFileTypes.IMAGE] = IconTypes.PHOTO, _b[uikitFileTypes.VIDEO] = IconTypes.PLAY, _b[uikitFileTypes.AUDIO] = IconTypes.FILE_AUDIO, _b[uikitFileTypes.GIF] = IconTypes.GIF, _b[uikitFileTypes.OTHERS] = IconTypes.FILE_DOCUMENT, _b)[getUIKitFileType(parentMessageType)],
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "16px",
    height: "16px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote-message__replied-message__file-message__file-name",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, truncateString(splitFileName[splitFileName.length - 1])))));
}

export { QuoteMessage as default };
//# sourceMappingURL=QuoteMessage.js.map
