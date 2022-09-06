import React__default from 'react';
import PropTypes from 'prop-types';
import { a as LabelTypography, b as LabelColors, d as changeColorToClassName, L as Label } from '../index-a401bc58.js';
import '../stringSet-e139b667.js';

const http = /https?:\/\//;
function LinkLabel(_ref) {
  let {
    className,
    src,
    type,
    color,
    children
  } = _ref;
  const url = http.test(src) ? src : `http://${src}`;
  return /*#__PURE__*/React__default.createElement("a", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-link-label', color ? changeColorToClassName(color) : ''].join(' '),
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-link-label__label",
    type: type,
    color: color
  }, children));
}
LinkLabel.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(LabelTypography)).isRequired,
  color: PropTypes.oneOf(Object.keys(LabelColors)).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.element)]).isRequired
};
LinkLabel.defaultProps = {
  className: ''
};
const LinkLabelTypography = LabelTypography;
const LinkLabelColors = LabelColors;

export { LinkLabelColors, LinkLabelTypography, LinkLabel as default };
//# sourceMappingURL=LinkLabel.js.map
