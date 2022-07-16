'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-70b1bdc1.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-9105d37e.js');
require('./stringSet-038031af.js');
require('./index-eb4297e8.js');
require('./index-1a4cafc8.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-3b162d85.js');
require('./ui/Icon.js');
require('./index-8e1b77e0.js');
require('./index-2e53ce20.js');
require('./utils-863d220f.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-0c558e49.js');
require('./ui/ImageRenderer.js');
require('./uuid-02d8b98a.js');
require('./ui/TextButton.js');
require('./color-2b86a5ac.js');
require('./actionTypes-28727337.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditProfile = function (props) {
  var onEditProfile = props.onEditProfile,
      onCancel = props.onCancel,
      onThemeChange = props.onThemeChange;
  return /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfileProvider, {
    onEditProfile: onEditProfile,
    onCancel: onCancel,
    onThemeChange: onThemeChange
  }, /*#__PURE__*/React__default["default"].createElement(EditUserProfile_components_EditUserProfileUI.EditUserProfile, null));
};

module.exports = EditProfile;
//# sourceMappingURL=EditUserProfile.js.map
