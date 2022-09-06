'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var UserProfileContext = require('../UserProfileContext-24790fe2.js');
var LocalizationContext = require('../LocalizationContext-ea1242a7.js');
var ui_Avatar = require('./Avatar.js');
var ui_MutedAvatarOverlay = require('./MutedAvatarOverlay.js');
var ui_Checkbox = require('./Checkbox.js');
var ui_UserProfile = require('./UserProfile.js');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Label = require('../index-2dfdb9de.js');
require('../stringSet-c8c286da.js');
require('../index-10f7dd53.js');
require('../tslib.es6-bd7bd76d.js');
require('./ImageRenderer.js');
require('./Icon.js');
require('../uuid-d427ce45.js');
require('../withSendbird.js');
require('../_rollupPluginBabelHelpers-34e22b99.js');
require('../sendbirdSelectors.js');
require('../topics-9b308b83.js');
require('../utils-ae4d63e2.js');
require('../index-51cd7ad2.js');
require('../index-6292ff33.js');
require('react-dom');
require('./SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function UserListItem(_ref) {
  let {
    className,
    user,
    checkBox,
    disableMessaging,
    currentUser,
    checked,
    onChange,
    action
  } = _ref;
  const uniqueKey = user.userId;
  const actionRef = React__default["default"].useRef(null);
  const parentRef = React__default["default"].useRef(null);
  const avatarRef = React__default["default"].useRef(null);
  const {
    disableUserProfile,
    renderUserProfile
  } = React.useContext(UserProfileContext.UserProfileContext);
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-user-list-item'].join(' '),
    ref: parentRef
  }, user.isMuted && /*#__PURE__*/React__default["default"].createElement(ui_MutedAvatarOverlay, {
    height: 40,
    width: 40
  }), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: toggleDropdown => /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
      className: "sendbird-user-list-item__avatar",
      ref: avatarRef,
      src: user.profileUrl,
      width: "40px",
      height: "40px",
      onClick: () => {
        if (!disableUserProfile) {
          toggleDropdown();
        }
      }
    }),
    menuItems: closeDropdown => /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
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
      user,
      currentUserId: currentUser,
      close: closeDropdown
    }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
      disableMessaging: disableMessaging,
      user: user,
      currentUserId: currentUser,
      onSuccess: closeDropdown
    }))
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__title",
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && ' (You)'), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__subtitle",
    type: ui_Label.LabelTypography.CAPTION_3,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId), checkBox &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  React__default["default"].createElement("label", {
    className: "sendbird-user-list-item__checkbox",
    htmlFor: uniqueKey
  }, /*#__PURE__*/React__default["default"].createElement(ui_Checkbox, {
    id: uniqueKey,
    checked: checked,
    onChange: event => onChange(event)
  })), user.role === 'operator' && /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-user-list-item__operator",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-user-list-item__action",
    ref: actionRef
  }, action({
    actionRef,
    parentRef
  })));
}
UserListItem.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  user: PropTypes__default["default"].shape({
    userId: PropTypes__default["default"].string,
    role: PropTypes__default["default"].string,
    isMuted: PropTypes__default["default"].bool,
    nickname: PropTypes__default["default"].string,
    profileUrl: PropTypes__default["default"].string
  }).isRequired,
  disableMessaging: PropTypes__default["default"].bool,
  currentUser: PropTypes__default["default"].string,
  action: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  checkBox: PropTypes__default["default"].bool,
  checked: PropTypes__default["default"].bool,
  onChange: PropTypes__default["default"].func
};
UserListItem.defaultProps = {
  className: '',
  currentUser: '',
  checkBox: false,
  disableMessaging: false,
  checked: false,
  action: null,
  onChange: () => {}
};

module.exports = UserListItem;
//# sourceMappingURL=UserListItem.js.map
