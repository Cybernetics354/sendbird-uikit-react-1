import React__default, { useContext } from 'react';
import { w as isFileMessage, x as isImageMessage, j as isThumbnailMessage, y as isAudioMessage, g as getClassName, z as isGifMessage, A as isVideoMessage, B as isUserMessage } from '../index-bb395be0.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-ed7103e1.js';
import { a as LocalizationContext } from '../LocalizationContext-6dc0d190.js';
import ImageRenderer from './ImageRenderer.js';
import '../tslib.es6-bdfb18b0.js';
import 'prop-types';
import '../stringSet-acf9d2a1.js';
import '../index-527c3bc4.js';

var componentClassname = 'sendbird-quote_message_input__avatar';
function QuoteMessageThumbnail(_a) {
  var message = _a.message;

  if (!isFileMessage(message)) {
    return null;
  }

  var thumbnailUrl = message.thumbnails && message.thumbnails.length > 0 && message.thumbnails[0].url || isImageMessage(message) && message.url;

  if (isThumbnailMessage(message) && thumbnailUrl) {
    return /*#__PURE__*/React__default.createElement(ImageRenderer, {
      className: componentClassname,
      url: thumbnailUrl,
      alt: message.type,
      width: "44px",
      height: "44px",
      fixedSize: true
    });
  } else if (isAudioMessage(message)) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: componentClassname
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: IconTypes.FILE_AUDIO,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "24px",
      height: "24px"
    }));
  } else {
    return /*#__PURE__*/React__default.createElement("div", {
      className: componentClassname
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: IconTypes.FILE_DOCUMENT,
      fillColor: IconColors.ON_BACKGROUND_2,
      width: "24px",
      height: "24px"
    }));
  }
}

function QuoteMessageInput(_a) {
  var className = _a.className,
      replyingMessage = _a.replyingMessage,
      onClose = _a.onClose;
  var stringSet = useContext(LocalizationContext).stringSet;
  var fileMessage = replyingMessage;
  var sender = replyingMessage === null || replyingMessage === void 0 ? void 0 : replyingMessage.sender;
  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName(['sendbird-quote_message_input', className])
  }, /*#__PURE__*/React__default.createElement(QuoteMessageThumbnail, {
    message: fileMessage
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-quote_message_input__body",
    style: {
      width: "calc(100% - ".concat((fileMessage === null || fileMessage === void 0 ? void 0 : fileMessage.isFileMessage()) ? '164px' : '120px', ")"),
      left: (fileMessage === null || fileMessage === void 0 ? void 0 : fileMessage.isFileMessage()) ? '92px' : '40px'
    }
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote_message_input__body__sender-name",
    type: LabelTypography.CAPTION_1,
    color: LabelColors.ONBACKGROUND_1
  }, "".concat(stringSet.QUOTE_MESSAGE_INPUT__REPLY_TO, " ").concat(sender && sender.nickname ? sender.nickname : stringSet.NO_NAME)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-quote_message_input__body__message-content",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, isImageMessage(fileMessage) && !isGifMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE_IMAGE, isVideoMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE__VIDEO, isGifMessage(fileMessage) && stringSet.QUOTE_MESSAGE_INPUT__FILE_TYPE_GIF, isUserMessage(replyingMessage) && replyingMessage.message, isFileMessage(fileMessage) && !isThumbnailMessage(fileMessage) && fileMessage.name)), /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-quote_message_input__close-button",
    type: IconTypes.CLOSE,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "24px",
    height: "24px",
    onClick: function () {
      return onClose(replyingMessage);
    }
  }));
}

export { QuoteMessageInput as default };
//# sourceMappingURL=QuoteMessageInput.js.map
