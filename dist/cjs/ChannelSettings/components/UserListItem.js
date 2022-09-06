'use strict';

var tslib_es6 = require('../../tslib.es6-bd7bd76d.js');
var React = require('react');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var UserProfileContext = require('../../UserProfileContext-24790fe2.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_MutedAvatarOverlay = require('../../ui/MutedAvatarOverlay.js');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_UserProfile = require('../../ui/UserProfile.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('prop-types');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../uuid-d427ce45.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../sendbirdSelectors.js');
require('../../topics-9b308b83.js');
require('../../utils-ae4d63e2.js');
require('../../index-51cd7ad2.js');
require('../../index-6292ff33.js');
require('react-dom');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_NAME = 'sendbird-user-list-item--small';

var UserListItem = function (_a) {
  var user = _a.user,
      className = _a.className,
      currentUser = _a.currentUser,
      action = _a.action;
  var actionRef = React.useRef(null);
  var parentRef = React.useRef(null);
  var avatarRef = React.useRef(null);
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _b = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var injectingClassNames = Array.isArray(className) ? className : [className];
  return /*#__PURE__*/React__default["default"].createElement("div", {
    ref: parentRef,
    className: tslib_es6.__spreadArray([COMPONENT_NAME], injectingClassNames, true).join(' ')
  }, user.isMuted && /*#__PURE__*/React__default["default"].createElement(ui_MutedAvatarOverlay, null), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
        onClick: function () {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        },
        ref: avatarRef,
        className: "".concat(COMPONENT_NAME, "__avatar"),
        src: user.profileUrl,
        width: 24,
        height: 24
      });
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        openLeft: true,
        parentRef: avatarRef // for catching location(x, y) of MenuItems
        ,
        parentContainRef: avatarRef // for toggling more options(menus & reactions)
        ,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, renderUserProfile ? renderUserProfile({
        user: user,
        currentUserId: currentUser,
        close: closeDropdown
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        user: user,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "".concat(COMPONENT_NAME, "__title"),
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && " (You)"), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "".concat(COMPONENT_NAME, "__subtitle"),
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId), user.role === 'operator' && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "".concat(COMPONENT_NAME, "__operator"),
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default["default"].createElement("div", {
    ref: actionRef,
    className: "".concat(COMPONENT_NAME, "__action")
  }, action({
    actionRef: actionRef,
    parentRef: parentRef
  })));
};

module.exports = UserListItem;
//# sourceMappingURL=UserListItem.js.map
