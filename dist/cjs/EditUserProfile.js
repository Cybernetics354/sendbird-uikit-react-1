'use strict';

var React = require('react');
var EditUserProfile_components_EditUserProfileUI = require('./index-aa55a181.js');
require('./ui/Modal.js');
require('prop-types');
require('react-dom');
require('./LocalizationContext-b96a3e25.js');
require('./stringSet-c701d85c.js');
require('./index-30aacb0e.js');
require('./index-675dba65.js');
require('./ui/IconButton.js');
require('./_rollupPluginBabelHelpers-131d30dc.js');
require('./ui/Icon.js');
require('./index-86c744f1.js');
require('./index-2777b3d9.js');
require('./utils-8f0d7826.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');
require('./ui/Input.js');
require('./ui/Avatar.js');
require('./tslib.es6-90bf9fc5.js');
require('./ui/ImageRenderer.js');
require('./uuid-04261033.js');
require('./ui/TextButton.js');
require('./color-bc0e6525.js');
require('./actionTypes-1b25234b.js');

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
