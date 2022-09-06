import React__default from 'react';
import { g as getStringSet } from './stringSet-e139b667.js';
import { d as defaultLocale } from './index-e851fa9b.js';

var LocalizationContext = /*#__PURE__*/React__default.createContext({
  stringSet: getStringSet('en'),
  dateLocale: defaultLocale
});

var LocalizationProvider = function (props) {
  var children = props.children;
  return /*#__PURE__*/React__default.createElement(LocalizationContext.Provider, {
    value: props
  }, children);
};

var useLocalization = function () {
  return React__default.useContext(LocalizationContext);
};

export { LocalizationProvider as L, LocalizationContext as a, useLocalization as u };
//# sourceMappingURL=LocalizationContext-e63b92dd.js.map
