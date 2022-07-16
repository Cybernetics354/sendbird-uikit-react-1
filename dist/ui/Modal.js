import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { a as LocalizationContext } from '../LocalizationContext-6b2a3bfd.js';
import { M as MODAL_ROOT } from '../index-ec60ce57.js';
import IconButton from './IconButton.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { B as Button, a as ButtonTypes } from '../index-fc0130a5.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-d9ca04bb.js';
import { n as noop } from '../utils-1fc25d9a.js';
import '../stringSet-bfbe6996.js';
import '../index-139e5f19.js';
import '../_rollupPluginBabelHelpers-42f11fe4.js';

const ModalHeader = _ref => {
  let {
    titleText
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_1,
    color: LabelColors.ONBACKGROUND_1
  }, titleText));
};
ModalHeader.propTypes = {
  titleText: PropTypes.string.isRequired
};
const ModalBody = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__body"
  }, children);
};
ModalBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)])
};
ModalBody.defaultProps = {
  children: null
};
const ModalFooter = _ref3 => {
  let {
    onSubmit,
    onCancel,
    disabled = false,
    submitText,
    type
  } = _ref3;
  const {
    stringSet
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__footer"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    onClick: onCancel
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default.createElement(Button, {
    type: type,
    disabled: disabled,
    onClick: onSubmit
  }, submitText));
};
ModalFooter.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
ModalFooter.defaultProps = {
  disabled: false,
  type: ButtonTypes.DANGER
};
function Modal(props) {
  const {
    children,
    onCancel,
    onSubmit = noop,
    disabled,
    submitText,
    titleText,
    hideFooter,
    type
  } = props;
  return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__content"
  }, /*#__PURE__*/React__default.createElement(ModalHeader, {
    titleText: titleText
  }), /*#__PURE__*/React__default.createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default.createElement(ModalFooter, {
    disabled: disabled,
    onCancel: onCancel,
    onSubmit: onSubmit,
    submitText: submitText,
    type: type
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__close"
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    width: "32px",
    height: "32px",
    onClick: onCancel
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.DEFAULT,
    width: "24px",
    height: "24px"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-modal__backdrop"
  })), document.getElementById(MODAL_ROOT));
}
Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  hideFooter: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
Modal.defaultProps = {
  children: null,
  hideFooter: false,
  disabled: false,
  type: ButtonTypes.DANGER
};

export { ModalBody, ModalFooter, ModalHeader, Modal as default };
//# sourceMappingURL=Modal.js.map
