'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var reactDom = require('react-dom');
var ui_Avatar = require('./Avatar.js');
var ui_Label = require('../index-1ac2a868.js');
var ui_Icon = require('./Icon.js');
var index = require('../index-6e41140f.js');
var index$1 = require('../index-8daa2cfb.js');
require('../tslib.es6-c3158c01.js');
require('./ImageRenderer.js');
require('../uuid-11d3ef5e.js');
require('../stringSet-8a123999.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const FileViewerComponent = _ref => {
  let {
    // sender
    profileUrl,
    nickname,
    // file
    name,
    type,
    url,
    // others
    isByMe,
    onClose,
    onDelete,
    disableDelete
  } = _ref;
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
  }, index$1.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
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
    onClick: () => {
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
    onClick: onClose
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content"
  }, index$1.isVideo(type) &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/media-has-caption
  React__default["default"].createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, /*#__PURE__*/React__default["default"].createElement("source", {
    src: url,
    type: type
  })), index$1.isImage(type) && /*#__PURE__*/React__default["default"].createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), !index$1.isSupportedFileView(type) && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};
FileViewerComponent.propTypes = {
  profileUrl: PropTypes__default["default"].string.isRequired,
  nickname: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  url: PropTypes__default["default"].string.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  onClose: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired,
  isByMe: PropTypes__default["default"].bool,
  disableDelete: PropTypes__default["default"].bool
};
FileViewerComponent.defaultProps = {
  isByMe: true,
  disableDelete: false
};
function FileViewer(props) {
  const {
    message,
    isByMe,
    onClose,
    onDelete
  } = props;
  const {
    sender,
    type,
    url,
    name = '',
    threadInfo = {}
  } = message;
  const disableDelete = (threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.replyCount) > 0;
  const {
    profileUrl,
    nickname = ''
  } = sender;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onClose: onClose,
    onDelete: onDelete,
    isByMe: isByMe,
    disableDelete: disableDelete
  }), document.getElementById(index.MODAL_ROOT));
}
FileViewer.propTypes = {
  message: PropTypes__default["default"].shape({
    sender: PropTypes__default["default"].shape({
      profileUrl: PropTypes__default["default"].string,
      nickname: PropTypes__default["default"].string
    }),
    type: PropTypes__default["default"].string,
    url: PropTypes__default["default"].string,
    name: PropTypes__default["default"].string
  }).isRequired,
  isByMe: PropTypes__default["default"].bool,
  onClose: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired
};
FileViewer.defaultProps = {
  isByMe: true
};

exports.FileViewerComponent = FileViewerComponent;
exports["default"] = FileViewer;
//# sourceMappingURL=FileViewer.js.map
