import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-19cce0bb.js';
import { a as LocalizationContext } from '../LocalizationContext-f2486c30.js';
import '../stringSet-5c50e96e.js';
import '../index-bfc04e6e.js';

function Badge(_ref) {
  let {
    count,
    maxLevel,
    className
  } = _ref;
  const {
    stringSet
  } = useContext(LocalizationContext);
  const maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-badge'].join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-badge__text"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONCONTENT_1
  }, count > maximumNumber ? `${maximumNumber}${stringSet.BADGE__OVER}` : count)));
}
Badge.propTypes = {
  count: PropTypes.number.isRequired,
  maxLevel: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};
Badge.defaultProps = {
  maxLevel: 2,
  className: []
};

export { Badge as default };
//# sourceMappingURL=Badge.js.map