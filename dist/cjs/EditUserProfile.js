'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-c52d3b49.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-06295289.js');
require('./stringSet-c0b7ef0b.js');
require('./index-46a833a2.js');
require('./index-2ebbabef.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-2157fc28.js');
require('./ui/Icon.js');
require('./index-37c2c6ef.js');
require('./index-06ad9a23.js');
require('./utils-d52c5709.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-43d4c54c.js');
require('./ui/ImageRenderer.js');
require('./uuid-3cedbe50.js');
require('./ui/TextButton.js');
require('./color-0a9815e7.js');
require('./actionTypes-eb892166.js');

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
