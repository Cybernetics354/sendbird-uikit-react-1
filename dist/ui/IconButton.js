import { _ as _objectSpread2 } from '../_rollupPluginBabelHelpers-5ef7889e.js';
import React__default, { useState } from 'react';
import PropTypes from 'prop-types';

const IconButton = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    className,
    children,
    disabled,
    width,
    height,
    type,
    onClick,
    onBlur,
    style
  } = props;
  const [pressed, setPressed] = useState('');
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default.createElement("button", {
      className: [...(Array.isArray(className) ? className : [className]), 'sendbird-iconbutton', pressed].join(' '),
      disabled: disabled,
      ref: ref,
      type: type // eslint-disable-line react/button-has-type
      ,
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        height,
        width
      }),
      onClick: e => {
        if (disabled) {
          return;
        }

        setPressed('sendbird-iconbutton--pressed');
        onClick(e);
      },
      onBlur: e => {
        setPressed('');
        onBlur(e);
      }
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "sendbird-iconbutton__inner"
    }, children))
  );
});
IconButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.any]).isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.shape({})
};
IconButton.defaultProps = {
  className: '',
  disabled: false,
  width: '56px',
  height: '56px',
  type: 'button',
  onClick: () => {},
  onBlur: () => {},
  style: {}
};

export { IconButton as default };
//# sourceMappingURL=IconButton.js.map
