import React__default, { useContext, useMemo, useState, useRef } from 'react';
import { f as format } from '../../index-2133a7e3.js';
import OpenchannelUserMessage from '../../ui/OpenchannelUserMessage.js';
import OpenChannelAdminMessage from '../../ui/OpenChannelAdminMessage.js';
import OpenchannelOGMessage from '../../ui/OpenchannelOGMessage.js';
import OpenchannelThumbnailMessage from '../../ui/OpenchannelThumbnailMessage.js';
import OpenchannelFileMessage from '../../ui/OpenchannelFileMessage.js';
import DateSeparator from '../../ui/DateSeparator.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-ed7103e1.js';
import MessageInput from '../../ui/MessageInput.js';
import FileViewer from '../../ui/FileViewer.js';
import Modal from '../../ui/Modal.js';
import { a as LocalizationContext, u as useLocalization } from '../../LocalizationContext-6dc0d190.js';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-a6e62fa0.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../index-527c3bc4.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import 'prop-types';
import '../../ui/Icon.js';
import '../../uuid-4b033040.js';
import '../../ui/ContextMenu.js';
import '../../index-bb395be0.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../stringSet-acf9d2a1.js';
import '../../ui/IconButton.js';
import '../../ui/Loader.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../sendbirdSelectors.js';
import '../../topics-fc458762.js';
import '../../utils-c830dbcc.js';
import '../../index-28e59bab.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../utils-40f3dba3.js';
import '../../openChannelUtils-6de2dcb3.js';
import '../../ui/LinkLabel.js';
import '../../ui/TextButton.js';
import '../../color-9d1ce766.js';
import '../../const-79bcca88.js';
import '../../const-b8ee874a.js';
import '../../ui/MentionUserLabel.js';
import '../../index-bf6cbc46.js';
import '../../compareIds-92f2c773.js';
import '../../openChannel-1ee60e13.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';

function RemoveMessageModal(_a) {
  var onCloseModal = _a.onCloseModal,
      onDeleteMessage = _a.onDeleteMessage;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement(Modal, {
    onCancel: onCloseModal,
    onSubmit: onDeleteMessage,
    submitText: stringSet.MESSAGE_MENU__DELETE,
    titleText: stringSet.MODAL__DELETE_MESSAGE__TITLE
  });
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
const SUPPORTED_MIMES = {
  IMAGE: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp' // not supported in IE
  ],
  VIDEO: ['video/mpeg', 'video/ogg', 'video/webm', 'video/mp4']
};
const isImage = type => SUPPORTED_MIMES.IMAGE.indexOf(type) >= 0;
const isVideo = type => SUPPORTED_MIMES.VIDEO.indexOf(type) >= 0;

var MessageTypes = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  FILE: 'FILE',
  THUMBNAIL: 'THUMBNAIL',
  OG: 'OG',
  UNKNOWN: 'UNKNOWN'
};
var SendingMessageStatus = {
  NONE: 'none',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
  PENDING: 'pending'
};
var getMessageType = function (message) {
  if (message.isUserMessage && message.isUserMessage() || message.messageType === 'user') {
    return message.ogMetaData ? MessageTypes.OG : MessageTypes.USER;
  }

  if (message.isAdminMessage && message.isAdminMessage()) {
    return MessageTypes.ADMIN;
  }

  if (message.messageType === 'file') {
    return isImage(message.type) || isVideo(message.type) ? MessageTypes.THUMBNAIL : MessageTypes.FILE;
  }

  return MessageTypes.UNKNOWN;
};

function MessagOpenChannelMessageeHoc(props) {
  var _a;

  var _b;

  var message = props.message,
      chainTop = props.chainTop,
      chainBottom = props.chainBottom,
      hasSeparator = props.hasSeparator,
      renderMessage = props.renderMessage;

  var _c = useOpenChannelContext(),
      currentOpenChannel = _c.currentOpenChannel,
      deleteMessage = _c.deleteMessage,
      updateMessage = _c.updateMessage,
      resendMessage = _c.resendMessage;

  var dateLocale = useLocalization().dateLocale;
  var editDisabled = currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen;
  var globalState = useSendbirdStateContext();
  var userId = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.userId;
  var sender = null;

  if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    sender = message === null || message === void 0 ? void 0 : message.sender;
  }

  var RenderedMessage = useMemo(function () {
    return function (props) {
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderMessage ? renderMessage(props) : null);
    };
  }, [message, renderMessage]);

  var _d = useState(false),
      showEdit = _d[0],
      setShowEdit = _d[1];

  var _e = useState(false),
      showRemove = _e[0],
      setShowRemove = _e[1];

  var _f = useState(false),
      showFileViewer = _f[0],
      setShowFileViewer = _f[1];

  var editMessageInputRef = useRef(null);
  var isByMe = false;

  if (sender && (message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
    // pending and failed messages are by me
    isByMe = userId === sender.userId || (message === null || message === void 0 ? void 0 : message.sendingStatus) === SendingMessageStatus.PENDING || (message === null || message === void 0 ? void 0 : message.sendingStatus) === SendingMessageStatus.FAILED;
  }

  if (renderMessage && RenderedMessage) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
    }, /*#__PURE__*/React__default.createElement(RenderedMessage, {
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom
    }));
  }

  if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user' && showEdit) {
    return /*#__PURE__*/React__default.createElement(MessageInput, {
      isEdit: true,
      disabled: editDisabled,
      ref: editMessageInputRef,
      message: message,
      name: message === null || message === void 0 ? void 0 : message.messageId,
      onUpdateMessage: function (_a) {
        var messageId = _a.messageId,
            message = _a.message;
        updateMessage(messageId, message);
        setShowEdit(false);
      },
      onCancelEdit: function () {
        setShowEdit(false);
      }
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-msg-hoc sendbird-msg--scroll-ref"
  }, hasSeparator && /*#__PURE__*/React__default.createElement(DateSeparator, null, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, format(message === null || message === void 0 ? void 0 : message.createdAt, 'MMMM dd, yyyy', {
    locale: dateLocale
  }))), (_a = {}, _a[MessageTypes.ADMIN] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'admin') {
      return /*#__PURE__*/React__default.createElement(OpenChannelAdminMessage, {
        message: message
      });
    }
  }(), _a[MessageTypes.FILE] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
      return /*#__PURE__*/React__default.createElement(OpenchannelFileMessage, {
        message: message,
        disabled: editDisabled,
        userId: userId,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.OG] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
      return /*#__PURE__*/React__default.createElement(OpenchannelOGMessage, {
        message: message,
        userId: userId,
        showEdit: setShowEdit,
        disabled: editDisabled,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.THUMBNAIL] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'file') {
      return /*#__PURE__*/React__default.createElement(OpenchannelThumbnailMessage, {
        message: message,
        disabled: editDisabled,
        userId: userId,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        onClick: setShowFileViewer,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.USER] = function () {
    if ((message === null || message === void 0 ? void 0 : message.messageType) === 'user') {
      return /*#__PURE__*/React__default.createElement(OpenchannelUserMessage, {
        message: message,
        userId: userId,
        disabled: editDisabled,
        showEdit: setShowEdit,
        showRemove: setShowRemove,
        resendMessage: resendMessage,
        chainTop: chainTop,
        chainBottom: chainBottom
      });
    }

    return;
  }(), _a[MessageTypes.UNKNOWN] = function () {
    return; // return (
    //   <OpenChannelUnknownMessage message={message} />
    // );
  }(), _a)[getMessageType(message)], showRemove && /*#__PURE__*/React__default.createElement(RemoveMessageModal, {
    onCloseModal: function () {
      return setShowRemove(false);
    },
    onDeleteMessage: function () {
      if ((message === null || message === void 0 ? void 0 : message.messageType) !== 'admin') {
        deleteMessage(message);
      }
    }
  }), showFileViewer && (message === null || message === void 0 ? void 0 : message.messageType) === 'file' && /*#__PURE__*/React__default.createElement(FileViewer, {
    onClose: function () {
      return setShowFileViewer(false);
    },
    message: message,
    onDelete: function () {
      return deleteMessage(message);
    },
    isByMe: isByMe
  }));
}

export { MessagOpenChannelMessageeHoc as default };
//# sourceMappingURL=OpenChannelMessage.js.map
