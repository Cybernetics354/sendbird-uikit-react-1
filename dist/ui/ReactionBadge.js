import React__default from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-af45308d.js';
import '../stringSet-3b6413f0.js';

const ReactionBadge = /*#__PURE__*/React__default.forwardRef((props, ref) => {
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), `sendbird-reaction-badge${getClassNameTail()}`].join(' '),
    role: "button",
    ref: ref,
    onClick: onClick,
    onKeyDown: onClick,
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-reaction-badge__inner"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-reaction-badge__inner__icon"
  }, children), /*#__PURE__*/React__default.createElement(Label, {
    className: children && count && 'sendbird-reaction-badge__inner__count',
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_1
  }, count)));
});
ReactionBadge.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.element.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selected: PropTypes.bool,
  isAdd: PropTypes.bool,
  onClick: PropTypes.func
};
ReactionBadge.defaultProps = {
  className: '',
  count: '',
  selected: false,
  isAdd: false,
  onClick: () => {}
};

export { ReactionBadge as default };
//# sourceMappingURL=ReactionBadge.js.map
