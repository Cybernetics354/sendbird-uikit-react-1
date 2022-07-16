import React__default from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from './index-53585fab.js';

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
  return /*#__PURE__*/React__default.createElement("button", {
    className: injectingClassNames,
    type: "button",
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-button__text",
    type: LabelTypography.BUTTON_1,
    color: LabelColors.ONCONTENT_1
  }, children));
}
const ButtonTypes = Type;
const ButtonSizes = Size;
Button.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  type: PropTypes.oneOf(['PRIMARY', 'SECONDARY', 'DANGER', 'DISABLED']),
  size: PropTypes.oneOf(['BIG', 'SMALL']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  className: '',
  type: Type.PRIMARY,
  size: Size.BIG,
  children: 'Button',
  disabled: false,
  onClick: () => {}
};

export { Button as B, Type as T, ButtonTypes as a, ButtonSizes as b };
//# sourceMappingURL=index-d880236d.js.map
