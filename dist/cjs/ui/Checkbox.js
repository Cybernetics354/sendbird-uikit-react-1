'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function Checkbox(_ref) {
  let {
    id,
    checked,
    onChange
  } = _ref;
  const [isChecked, setCheck] = React.useState(checked);
  return /*#__PURE__*/React__default["default"].createElement("label", {
    className: "sendbird-checkbox",
    htmlFor: id
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    id: id,
    type: "checkbox",
    checked: isChecked,
    onClick: () => setCheck(!isChecked),
    onChange: onChange
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    className: "sendbird-checkbox--checkmark"
  }));
}
Checkbox.propTypes = {
  id: PropTypes__default["default"].string,
  checked: PropTypes__default["default"].bool,
  onChange: PropTypes__default["default"].func
};
Checkbox.defaultProps = {
  id: 'sendbird-checkbox-input',
  checked: false,
  onChange: () => {}
};

module.exports = Checkbox;
//# sourceMappingURL=Checkbox.js.map
