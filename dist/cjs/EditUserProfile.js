'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-c7f2cbdd.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-219f1540.js');
require('./stringSet-49111b06.js');
require('./index-6ada6170.js');
require('./index-b13049fa.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-404a108a.js');
require('./ui/Icon.js');
require('./index-50918912.js');
require('./index-7309809e.js');
require('./utils-703c21fc.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-c9f1dea2.js');
require('./ui/ImageRenderer.js');
require('./uuid-428cb2f7.js');
require('./ui/TextButton.js');
require('./color-bea80080.js');
require('./actionTypes-b754fc19.js');

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
