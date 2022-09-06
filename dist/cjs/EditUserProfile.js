'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-e57a6dbb.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-ea1242a7.js');
require('./stringSet-c8c286da.js');
require('./index-10f7dd53.js');
require('./index-77afdf6b.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-34e22b99.js');
require('./ui/Icon.js');
require('./index-51cd7ad2.js');
require('./index-2dfdb9de.js');
require('./utils-ae4d63e2.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-bd7bd76d.js');
require('./ui/ImageRenderer.js');
require('./uuid-d427ce45.js');
require('./ui/TextButton.js');
require('./color-35fbd517.js');
require('./actionTypes-40dfeb4c.js');

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
