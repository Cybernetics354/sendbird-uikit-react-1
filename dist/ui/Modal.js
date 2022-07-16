import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { a as LocalizationContext } from '../LocalizationContext-d3e49456.js';
import { M as MODAL_ROOT } from '../index-6bfe08d8.js';
import IconButton from './IconButton.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { B as Button, a as ButtonTypes } from '../index-d880236d.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import { n as noop } from '../utils-87c63da6.js';
import '../stringSet-49030004.js';
import '../index-a53c3ed1.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';

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
