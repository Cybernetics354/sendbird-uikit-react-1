import React__default from 'react';
import PropTypes from 'prop-types';
import { c as changeColorToClassName, C as Colors } from '../color-105e93f7.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-a401bc58.js';
import '../stringSet-e139b667.js';

function DateSeparator(_ref) {
  let {
    className,
    children,
    separatorColor
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-separator'].join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-separator__left', `${changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-separator__text"
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-separator__right', `${changeColorToClassName(separatorColor)}--background-color`].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.element]),
  separatorColor: PropTypes.oneOf(['ONBACKGROUND_1', 'ONBACKGROUND_2', 'ONBACKGROUND_3', 'ONBACKGROUND_4', 'ONCONTENT_1', 'PRIMARY', 'ERROR'])
};
DateSeparator.defaultProps = {
  className: '',
  children: /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: Colors.ONBACKGROUND_4
};

export { DateSeparator as default };
//# sourceMappingURL=DateSeparator.js.map
