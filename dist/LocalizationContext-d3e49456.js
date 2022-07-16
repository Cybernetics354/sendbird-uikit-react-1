import React__default from 'react';
import { g as getStringSet } from './stringSet-49030004.js';
import { d as defaultLocale } from './index-a53c3ed1.js';

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
//# sourceMappingURL=LocalizationContext-d3e49456.js.map
