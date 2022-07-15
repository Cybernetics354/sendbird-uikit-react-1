import React__default, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox(_ref) {
  let {
    id,
    checked,
    onChange
  } = _ref;
  const [isChecked, setCheck] = useState(checked);
  return /*#__PURE__*/React__default.createElement("label", {
    className: "sendbird-checkbox",
    htmlFor: id
  }, /*#__PURE__*/React__default.createElement("input", {
    id: id,
    type: "checkbox",
    checked: isChecked,
    onClick: () => setCheck(!isChecked),
    onChange: onChange
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "sendbird-checkbox--checkmark"
  }));
}
Checkbox.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};
Checkbox.defaultProps = {
  id: 'sendbird-checkbox-input',
  checked: false,
  onChange: () => {}
};

export { Checkbox as default };
//# sourceMappingURL=Checkbox.js.map
