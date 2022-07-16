'use strict';

var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-131d30dc.js');
var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const IconButton = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
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
  const [pressed, setPressed] = React.useState('');
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default["default"].createElement("button", {
      className: [...(Array.isArray(className) ? className : [className]), 'sendbird-iconbutton', pressed].join(' '),
      disabled: disabled,
      ref: ref,
      type: type // eslint-disable-line react/button-has-type
      ,
      style: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, style), {}, {
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
    }, /*#__PURE__*/React__default["default"].createElement("span", {
      className: "sendbird-iconbutton__inner"
    }, children))
  );
});
IconButton.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].any]).isRequired,
  disabled: PropTypes__default["default"].bool,
  width: PropTypes__default["default"].string,
  height: PropTypes__default["default"].string,
  type: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  style: PropTypes__default["default"].shape({})
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

module.exports = IconButton;
//# sourceMappingURL=IconButton.js.map
