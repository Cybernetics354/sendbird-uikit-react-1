'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-ba5ab928.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-1d24d5aa.js');
require('./stringSet-39290f11.js');
require('./index-80f7ae1e.js');
require('./index-12d2e3e0.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-db05c769.js');
require('./ui/Icon.js');
require('./index-0f67da42.js');
require('./index-c19c70c5.js');
require('./utils-1b1f3464.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-512de66a.js');
require('./ui/ImageRenderer.js');
require('./uuid-34245f96.js');
require('./ui/TextButton.js');
require('./color-6c9dea8c.js');
require('./actionTypes-9c5b4f24.js');

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
