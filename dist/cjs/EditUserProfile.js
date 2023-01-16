'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-6a4143fa.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-92b5f010.js');
require('./stringSet-827d08e2.js');
require('./index-5dca71f9.js');
require('./index-ef9f3a3e.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-0825dba8.js');
require('./ui/Icon.js');
require('./index-865da959.js');
require('./index-c05adf2d.js');
require('./utils-f4c8ab45.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-137d7ef9.js');
require('./ui/ImageRenderer.js');
require('./uuid-0e49bd14.js');
require('./ui/TextButton.js');
require('./color-f63289fc.js');
require('./actionTypes-3093b492.js');

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
