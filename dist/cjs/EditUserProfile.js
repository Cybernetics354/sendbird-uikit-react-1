'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-a2b373fe.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-44ed70a4.js');
require('./stringSet-6cea29d9.js');
require('./index-f0b59409.js');
require('./index-9a3f2ed1.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-5122729b.js');
require('./ui/Icon.js');
require('./index-73892caf.js');
require('./index-1a5c5200.js');
require('./utils-fedac650.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-ca286580.js');
require('./ui/ImageRenderer.js');
require('./uuid-c037b76e.js');
require('./ui/TextButton.js');
require('./color-49dea9d5.js');
require('./actionTypes-a44be5ab.js');

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
