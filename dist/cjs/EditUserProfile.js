'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-8f73138f.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-c4e6256c.js');
require('./stringSet-6c45946e.js');
require('./index-5a900a14.js');
require('./index-c0ef2913.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-95f9644b.js');
require('./ui/Icon.js');
require('./index-d3743106.js');
require('./index-9235a70d.js');
require('./utils-787f6393.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-79d6c001.js');
require('./ui/ImageRenderer.js');
require('./uuid-35ad849a.js');
require('./ui/TextButton.js');
require('./color-65c1a1ff.js');
require('./actionTypes-7e9ccea7.js');

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
