'use strict';

var React = require('react');
var stringSet = require('./stringSet-6cea29d9.js');
var index = require('./index-f0b59409.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LocalizationContext = /*#__PURE__*/React__default["default"].createContext({
  stringSet: stringSet.getStringSet('en'),
  dateLocale: index.defaultLocale
});

var LocalizationProvider = function (props) {
  var children = props.children;
  return /*#__PURE__*/React__default["default"].createElement(LocalizationContext.Provider, {
    value: props
  }, children);
};

var useLocalization = function () {
  return React__default["default"].useContext(LocalizationContext);
};

exports.LocalizationContext = LocalizationContext;
exports.LocalizationProvider = LocalizationProvider;
exports.useLocalization = useLocalization;
//# sourceMappingURL=LocalizationContext-44ed70a4.js.map
