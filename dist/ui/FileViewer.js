import React__default from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Avatar from './Avatar.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-d9ca04bb.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { M as MODAL_ROOT } from '../index-ec60ce57.js';
import { C as isSupportedFileView, D as isVideo, E as isImage } from '../index-5ddc9ee9.js';
import '../tslib.es6-5cbf2d41.js';
import './ImageRenderer.js';
import '../uuid-ffa79983.js';
import '../stringSet-bfbe6996.js';

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
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__left"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__left__avatar"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    height: "32px",
    width: "32px",
    src: profileUrl
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-fileviewer__header__left__filename",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, name), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-fileviewer__header__left__sender-name",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, nickname)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right"
  }, isSupportedFileView(type) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions"
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "sendbird-fileviewer__header__right__actions__download",
    rel: "noopener noreferrer",
    href: url,
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DOWNLOAD,
    fillColor: IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px"
  })), onDelete && isByMe && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__delete"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: disableDelete ? 'disabled' : '',
    type: IconTypes.DELETE,
    fillColor: disableDelete ? IconColors.GRAY : IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: () => {
      if (!disableDelete) {
        onDelete();
      }
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__header__right__actions__close"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.ON_BACKGROUND_1,
    height: "24px",
    width: "24px",
    onClick: onClose
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__content"
  }, isVideo(type) &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/media-has-caption
  React__default.createElement("video", {
    controls: true,
    className: "sendbird-fileviewer__content__video"
  }, /*#__PURE__*/React__default.createElement("source", {
    src: url,
    type: type
  })), isImage(type) && /*#__PURE__*/React__default.createElement("img", {
    src: url,
    alt: name,
    className: "sendbird-fileviewer__content__img"
  }), !isSupportedFileView(type) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-fileviewer__content__unsupported"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_1,
    color: LabelColors.ONBACKGROUND_1
  }, "Unsupoprted message"))));
};
FileViewerComponent.propTypes = {
  profileUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isByMe: PropTypes.bool,
  disableDelete: PropTypes.bool
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
  return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(FileViewerComponent, {
    profileUrl: profileUrl,
    nickname: nickname,
    type: type,
    url: url,
    name: name,
    onClose: onClose,
    onDelete: onDelete,
    isByMe: isByMe,
    disableDelete: disableDelete
  }), document.getElementById(MODAL_ROOT));
}
FileViewer.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.shape({
      profileUrl: PropTypes.string,
      nickname: PropTypes.string
    }),
    type: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  isByMe: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
FileViewer.defaultProps = {
  isByMe: true
};

export { FileViewerComponent, FileViewer as default };
//# sourceMappingURL=FileViewer.js.map
