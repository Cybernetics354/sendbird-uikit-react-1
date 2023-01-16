'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-1ac2a868.js');
require('../stringSet-8a123999.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const ReactionBadge = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => {
  const {
    className,
    children,
    count,
    selected,
    isAdd,
    onClick
  } = props;

  const getClassNameTail = () => {
    if (selected && !isAdd) {
      return '--selected';
    }

    if (isAdd) {
      return '--is-add';
    }

    return '';
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), `sendbird-reaction-badge${getClassNameTail()}`].join(' '),
    role: "button",
    ref: ref,
    onClick: onClick,
    onKeyDown: onClick,
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-reaction-badge__inner"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-reaction-badge__inner__icon"
  }, children), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: children && count && 'sendbird-reaction-badge__inner__count',
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, count)));
});
ReactionBadge.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].element.isRequired,
  count: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
  selected: PropTypes__default["default"].bool,
  isAdd: PropTypes__default["default"].bool,
  onClick: PropTypes__default["default"].func
};
ReactionBadge.defaultProps = {
  className: '',
  count: '',
  selected: false,
  isAdd: false,
  onClick: () => {}
};

module.exports = ReactionBadge;
//# sourceMappingURL=ReactionBadge.js.map
