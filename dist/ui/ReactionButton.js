import React__default from 'react';
import PropTypes from 'prop-types';

const ReactionButton = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    className,
    width,
    height,
    selected,
    onClick,
    children
  } = props;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), `sendbird-reaction-button${selected ? '--selected' : ''}`].join(' '),
    ref: ref,
    role: "button",
    style: {
      width: typeof width === 'string' ? `${width.slice(0, -2) - 2}px` : `${width - 2}px`,
      height: typeof height === 'string' ? `${height.slice(0, -2) - 2}px` : `${height - 2}px`
    },
    onClick: e => onClick(e),
    onKeyDown: e => onClick(e),
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-reaction-button__inner"
  }, children));
});
ReactionButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.element.isRequired
};
ReactionButton.defaultProps = {
  className: '',
  width: '36px',
  height: '36px',
  selected: false,
  onClick: () => {}
};

export { ReactionButton as default };
//# sourceMappingURL=ReactionButton.js.map
