import { a as __spreadArray } from '../../tslib.es6-4a4f5c58.js';
import React__default, { useRef, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import { U as UserProfileContext } from '../../UserProfileContext-153af432.js';
import Avatar from '../../ui/Avatar.js';
import MutedAvatarOverlay from '../../ui/MutedAvatarOverlay.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-53585fab.js';
import ConnectedUserProfile from '../../ui/UserProfile.js';
import ContextMenu, { MenuItems } from '../../ui/ContextMenu.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import 'prop-types';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../uuid-91011cda.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../sendbirdSelectors.js';
import '../../topics-480e2d9e.js';
import '../../utils-87c63da6.js';
import '../../index-d880236d.js';
import '../../index-fcb040ec.js';
import 'react-dom';
import '../../ui/SortByRow.js';

var COMPONENT_NAME = 'sendbird-user-list-item--small';

var UserListItem = function (_a) {
  var user = _a.user,
      className = _a.className,
      currentUser = _a.currentUser,
      action = _a.action;
  var actionRef = useRef(null);
  var parentRef = useRef(null);
  var avatarRef = useRef(null);
  var stringSet = useContext(LocalizationContext).stringSet;

  var _b = useContext(UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var injectingClassNames = Array.isArray(className) ? className : [className];
  return /*#__PURE__*/React__default.createElement("div", {
    ref: parentRef,
    className: __spreadArray([COMPONENT_NAME], injectingClassNames, true).join(' ')
  }, user.isMuted && /*#__PURE__*/React__default.createElement(MutedAvatarOverlay, null), /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
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
      return /*#__PURE__*/React__default.createElement(MenuItems, {
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
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        user: user,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "".concat(COMPONENT_NAME, "__title"),
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && " (You)"), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default.createElement(Label, {
    className: "".concat(COMPONENT_NAME, "__subtitle"),
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, user.userId), user.role === 'operator' && /*#__PURE__*/React__default.createElement(Label, {
    className: "".concat(COMPONENT_NAME, "__operator"),
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default.createElement("div", {
    ref: actionRef,
    className: "".concat(COMPONENT_NAME, "__action")
  }, action({
    actionRef: actionRef,
    parentRef: parentRef
  })));
};

export { UserListItem as default };
//# sourceMappingURL=UserListItem.js.map
