import React__default from 'react';
import PropTypes from 'prop-types';
import { c as changeColorToClassName, C as Colors } from '../color-395a9ce9.js';

function TextButton(_ref) {
  let {
    className,
    color,
    disabled,
    notUnderline,
    onClick,
    children
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), changeColorToClassName(color), notUnderline ? 'sendbird-textbutton--not-underline' : 'sendbird-textbutton', disabled ? 'sendbird-textbutton--disabled' : ''].join(' '),
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onKeyPress: onClick
  }, children);
}
TextButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  notUnderline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};
TextButton.defaultProps = {
  className: '',
  color: Colors.ONBACKGROUND_1,
  disabled: false,
  notUnderline: false,
  onClick: () => {}
};

export { TextButton as default };
//# sourceMappingURL=TextButton.js.map
