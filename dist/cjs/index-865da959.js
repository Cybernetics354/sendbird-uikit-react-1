'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('./index-c05adf2d.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const Type = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  DANGER: 'DANGER',
  DISABLED: 'DISABLED'
};
const Size = {
  BIG: 'BIG',
  SMALL: 'SMALL'
};

function changeTypeToClassName(type) {
  switch (type) {
    case Type.PRIMARY:
      return 'sendbird-button--primary';

    case Type.SECONDARY:
      return 'sendbird-button--secondary';

    case Type.DANGER:
      return 'sendbird-button--danger';

    case Type.DISABLED:
      return 'sendbird-button--disabled';

    default:
      return null;
  }
}
function changeSizeToClassName(size) {
  switch (size) {
    case Size.BIG:
      return 'sendbird-button--big';

    case Size.SMALL:
      return 'sendbird-button--small';

    default:
      return null;
  }
}

function Button(_ref) {
  let {
    className,
    type,
    size,
    children,
    disabled,
    onClick
  } = _ref;
  const injectingClassNames = [...(Array.isArray(className) ? className : [className]), 'sendbird-button', disabled ? 'sendbird-button__disabled' : '', changeTypeToClassName(type), changeSizeToClassName(size)].join(' ');
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: injectingClassNames,
    type: "button",
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-button__text",
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.ONCONTENT_1
  }, children));
}
const ButtonTypes = Type;
const ButtonSizes = Size;
Button.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  type: PropTypes__default["default"].oneOf(['PRIMARY', 'SECONDARY', 'DANGER', 'DISABLED']),
  size: PropTypes__default["default"].oneOf(['BIG', 'SMALL']),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]),
  disabled: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func
};
Button.defaultProps = {
  className: '',
  type: Type.PRIMARY,
  size: Size.BIG,
  children: 'Button',
  disabled: false,
  onClick: () => {}
};

exports.Button = Button;
exports.ButtonSizes = ButtonSizes;
exports.ButtonTypes = ButtonTypes;
exports.Type = Type;
//# sourceMappingURL=index-865da959.js.map
