'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-3e0dc61c.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-4edc1945.js');
require('./stringSet-8a123999.js');
require('./index-1968df45.js');
require('./index-6e41140f.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-652929ec.js');
require('./ui/Icon.js');
require('./index-a189c9f3.js');
require('./index-1ac2a868.js');
require('./utils-f60a9a5a.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-c3158c01.js');
require('./ui/ImageRenderer.js');
require('./uuid-11d3ef5e.js');
require('./ui/TextButton.js');
require('./color-334c9fb8.js');
require('./actionTypes-dd3d8b10.js');

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
