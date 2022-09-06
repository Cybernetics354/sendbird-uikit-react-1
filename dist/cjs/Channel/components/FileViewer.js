'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');
var __bundleBa710a09 = require('../../__bundle-ba710a09-af5d7380.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_Icon = require('../../ui/Icon.js');
var index$1 = require('../../index-77afdf6b.js');
var index = require('../../index-6292ff33.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var Channel_context = require('../../ChannelProvider-c0942911.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../ui/ImageRenderer.js');
require('prop-types');
require('../../uuid-d427ce45.js');
require('../../stringSet-c8c286da.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../UserProfileContext-24790fe2.js');
require('../../index-09c690af.js');
require('../../index-10f7dd53.js');
require('../../topics-9b308b83.js');
require('../../compareIds-9caf1355.js');
require('../../const-a4d49809.js');
require('../../groupChannel-a8a4082b.js');
require('../../ui/ContextMenu.js');
require('../../ui/SortByRow.js');
require('../../ui/ReactionButton.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var FileViewerComponent = function (_a) {
  var // sender
  profileUrl = _a.profileUrl,
      nickname = _a.nickname,
      // file
  name = _a.name,
      type = _a.type,
      url = _a.url,
      // others
  isByMe = _a.isByMe,
      onCancel = _a.onCancel,
      onDelete = _a.onDelete,
      disableDelete = _a.disableDelete;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__left"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__left__avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    height: "32px",
    width: "32px",
    src: profileUrl
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-fileviewer__header__left__filename",
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, name), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-fileviewer__header__left__sender-name",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, nickname)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right"
  }, index.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions"
  }, /*#__PURE__*/React__default["default"].createElement("a", {
    className: "sendbird-fileviewer__header__right__actions__download",
    rel: "noopener noreferrer",
    href: url,
    target: "_blank"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.DOWNLOAD,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px"
  })), onDelete && isByMe && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__delete"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: disableDelete ? 'disabled' : '',
    type: ui_Icon.IconTypes.DELETE,
    fillColor: disableDelete ? ui_Icon.IconColors.GRAY : ui_Icon.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: function () {
      if (!disableDelete) {
        onDelete();
      }
    }
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__close"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: onCancel
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content"
  }, index.isVideo(type) && /*#__PURE__*/React__default["default"].createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: url,
    type: type
  })), index.isImage(type) && /*#__PURE__*/React__default["default"].createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), !index.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};

var FileViewer = function (_a) {
  var _b, _c, _d;

  var onCancel = _a.onCancel,
      message = _a.message;
  var deleteMessage = Channel_context.useChannelContext().deleteMessage;
  var sender = message.sender,
      threadInfo = message.threadInfo;
  var user = (_c = (_b = useSendbirdStateContext()) === null || _b === void 0 ? void 0 : _b.config) === null || _c === void 0 ? void 0 : _c.userId;
  var isByMe = user === ((_d = message === null || message === void 0 ? void 0 : message.sender) === null || _d === void 0 ? void 0 : _d.userId);
  var disableDelete = (threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.replyCount) > 0;
  var profileUrl = sender.profileUrl,
      _e = sender.nickname,
      nickname = _e === void 0 ? '' : _e;
  var isUserMessage = message instanceof __bundleBa710a09.Vt;

  if (isUserMessage) {
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(FileViewerComponent, {
      profileUrl: profileUrl,
      nickname: nickname,
      type: 'image/jpeg',
      url: message.message,
      name: 'Image Message',
      onCancel: onCancel,
      onDelete: function () {
        deleteMessage(message).then(function () {
          onCancel();
        });
      },
      isByMe: isByMe,
      disableDelete: disableDelete
    }), document.getElementById(index$1.MODAL_ROOT));
  }

  var type = message.type,
      url = message.url,
      _f = message.name,
      name = _f === void 0 ? '' : _f;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onCancel: onCancel,
    onDelete: function () {
      deleteMessage(message).then(function () {
        onCancel();
      });
    },
    isByMe: isByMe,
    disableDelete: disableDelete
  }), document.getElementById(index$1.MODAL_ROOT));
};

exports.FileViewerComponent = FileViewerComponent;
exports["default"] = FileViewer;
//# sourceMappingURL=FileViewer.js.map
