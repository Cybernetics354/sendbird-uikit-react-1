'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-aed9468d.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-7124ef76.js');
require('./stringSet-ca0cf06e.js');
require('./index-80df9998.js');
require('./index-74e1c32a.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-d0fefa20.js');
require('./ui/Icon.js');
require('./index-c5f391d0.js');
require('./index-9ad5c786.js');
require('./utils-d6de0e43.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-87d8a6c3.js');
require('./ui/ImageRenderer.js');
require('./uuid-cfc8429e.js');
require('./ui/TextButton.js');
require('./color-670a89e1.js');
require('./actionTypes-177349fb.js');

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
