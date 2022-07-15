import React__default, { useState } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-8eb795c0.js';
import '../stringSet-9cd89798.js';

const InputLabel = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-input-label",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_1
  }, children);
};
InputLabel.propTypes = {
  children: PropTypes.string.isRequired
}; // future: add validations? onChange? more props etc etc

const Input = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    name,
    required,
    disabled,
    placeHolder,
    value
  } = props;
  const [inputValue, setInputValue] = useState(value);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-input"
  }, /*#__PURE__*/React__default.createElement("input", {
    className: "sendbird-input__input",
    ref: ref,
    name: name,
    required: required,
    disabled: disabled,
    value: inputValue,
    onChange: e => {
      setInputValue(e.target.value);
    }
  }), placeHolder && !inputValue && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-input__placeholder",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_3
  }, placeHolder));
});
Input.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeHolder: PropTypes.string,
  value: PropTypes.string
};
Input.defaultProps = {
  required: false,
  disabled: false,
  placeHolder: '',
  value: ''
};

export { InputLabel, Input as default };
//# sourceMappingURL=Input.js.map
