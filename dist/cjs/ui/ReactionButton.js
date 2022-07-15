'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const ReactionButton = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    className,
    width,
    height,
    selected,
    onClick,
    children
  } = props;
  return /*#__PURE__*/React__default["default"].createElement("div", {
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
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-reaction-button__inner"
  }, children));
});
ReactionButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  width: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  height: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  selected: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func,
  children: PropTypes__default["default"].element.isRequired
};
ReactionButton.defaultProps = {
  className: '',
  width: '36px',
  height: '36px',
  selected: false,
  onClick: () => {}
};

module.exports = ReactionButton;
//# sourceMappingURL=ReactionButton.js.map
