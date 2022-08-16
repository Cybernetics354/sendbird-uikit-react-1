'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-c19c70c5.js');
require('../stringSet-39290f11.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const InputLabel = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-input-label",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, children);
};
InputLabel.propTypes = {
  children: PropTypes__default["default"].string.isRequired
}; // future: add validations? onChange? more props etc etc

const Input = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    name,
    required,
    disabled,
    placeHolder,
    value
  } = props;
  const [inputValue, setInputValue] = React.useState(value);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-input"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    className: "sendbird-input__input",
    ref: ref,
    name: name,
    required: required,
    disabled: disabled,
    value: inputValue,
    onChange: e => {
      setInputValue(e.target.value);
    }
  }), placeHolder && !inputValue && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-input__placeholder",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, placeHolder));
});
Input.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  required: PropTypes__default["default"].bool,
  disabled: PropTypes__default["default"].bool,
  placeHolder: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string
};
Input.defaultProps = {
  required: false,
  disabled: false,
  placeHolder: '',
  value: ''
};

exports.InputLabel = InputLabel;
exports["default"] = Input;
//# sourceMappingURL=Input.js.map
