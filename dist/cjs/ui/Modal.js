'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var reactDom = require('react-dom');
var LocalizationContext = require('../LocalizationContext-9105d37e.js');
var index = require('../index-1a4cafc8.js');
var ui_IconButton = require('./IconButton.js');
var ui_Icon = require('./Icon.js');
var ui_Button = require('../index-8e1b77e0.js');
var ui_Label = require('../index-2e53ce20.js');
var utils = require('../utils-863d220f.js');
require('../stringSet-038031af.js');
require('../index-eb4297e8.js');
require('../_rollupPluginBabelHelpers-3b162d85.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const ModalHeader = _ref => {
  let {
    titleText
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__header"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, titleText));
};
ModalHeader.propTypes = {
  titleText: PropTypes__default["default"].string.isRequired
};
const ModalBody = _ref2 => {
  let {
    children
  } = _ref2;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__body"
  }, children);
};
ModalBody.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element.isRequired, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element.isRequired)])
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
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__footer"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.BUTTON__CANCEL)), /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: type,
    disabled: disabled,
    onClick: onSubmit
  }, submitText));
};
ModalFooter.propTypes = {
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func.isRequired,
  submitText: PropTypes__default["default"].string.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
ModalFooter.defaultProps = {
  disabled: false,
  type: ui_Button.ButtonTypes.DANGER
};
function Modal(props) {
  const {
    children,
    onCancel,
    onSubmit = utils.noop,
    disabled,
    submitText,
    titleText,
    hideFooter,
    type
  } = props;
  return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__content"
  }, /*#__PURE__*/React__default["default"].createElement(ModalHeader, {
    titleText: titleText
  }), /*#__PURE__*/React__default["default"].createElement(ModalBody, null, children), !hideFooter && /*#__PURE__*/React__default["default"].createElement(ModalFooter, {
    disabled: disabled,
    onCancel: onCancel,
    onSubmit: onSubmit,
    submitText: submitText,
    type: type
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__close"
  }, /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    width: "32px",
    height: "32px",
    onClick: onCancel
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    fillColor: ui_Icon.IconColors.DEFAULT,
    width: "24px",
    height: "24px"
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-modal__backdrop"
  })), document.getElementById(index.MODAL_ROOT));
}
Modal.propTypes = {
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]),
  onCancel: PropTypes__default["default"].func.isRequired,
  onSubmit: PropTypes__default["default"].func,
  hideFooter: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string
};
Modal.defaultProps = {
  children: null,
  hideFooter: false,
  disabled: false,
  type: ui_Button.ButtonTypes.DANGER
};

exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports["default"] = Modal;
//# sourceMappingURL=Modal.js.map
