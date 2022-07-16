'use strict';

var React = require('react');
var utils = require('./utils-863d220f.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Context = /*#__PURE__*/React__default["default"].createContext({
  opened: '',
  setOpened: utils.noop
});
var Consumer = Context.Consumer;
var Provider = Context.Provider;

exports.Consumer = Consumer;
exports.Provider = Provider;
//# sourceMappingURL=context-10988c03.js.map
