import React__default from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import '../stringSet-49030004.js';

function Tooltip(_ref) {
  let {
    className,
    children
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-tooltip'].join(' ')
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-tooltip__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONCONTENT_1
  }, children));
}
Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.string])
};
Tooltip.defaultProps = {
  className: '',
  children: ''
};

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map
