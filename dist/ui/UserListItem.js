import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { U as UserProfileContext } from '../UserProfileContext-8fcecbac.js';
import { a as LocalizationContext } from '../LocalizationContext-f2486c30.js';
import Avatar from './Avatar.js';
import MutedAvatarOverlay from './MutedAvatarOverlay.js';
import Checkbox from './Checkbox.js';
import ConnectedUserProfile from './UserProfile.js';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-19cce0bb.js';
import '../stringSet-5c50e96e.js';
import '../index-bfc04e6e.js';
import '../tslib.es6-19dec4e0.js';
import './ImageRenderer.js';
import './Icon.js';
import '../uuid-30725b60.js';
import '../withSendbird.js';
import '../_rollupPluginBabelHelpers-848c5853.js';
import '../sendbirdSelectors.js';
import '../topics-351221d8.js';
import '../utils-21bd7664.js';
import '../index-9a801843.js';
import '../index-42611471.js';
import 'react-dom';
import './SortByRow.js';

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
  const actionRef = React__default.useRef(null);
  const parentRef = React__default.useRef(null);
  const avatarRef = React__default.useRef(null);
  const {
    disableUserProfile,
    renderUserProfile
  } = useContext(UserProfileContext);
  const {
    stringSet
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-user-list-item'].join(' '),
    ref: parentRef
  }, user.isMuted && /*#__PURE__*/React__default.createElement(MutedAvatarOverlay, {
    height: 40,
    width: 40
  }), /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: toggleDropdown => /*#__PURE__*/React__default.createElement(Avatar, {
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
    menuItems: closeDropdown => /*#__PURE__*/React__default.createElement(MenuItems, {
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
    }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
      disableMessaging: disableMessaging,
      user: user,
      currentUserId: currentUser,
      onSuccess: closeDropdown
    }))
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-user-list-item__title",
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME, currentUser === user.userId && ' (You)'), // if there is now nickname, display userId
  !user.nickname && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-user-list-item__subtitle",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, user.userId), checkBox &&
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  React__default.createElement("label", {
    className: "sendbird-user-list-item__checkbox",
    htmlFor: uniqueKey
  }, /*#__PURE__*/React__default.createElement(Checkbox, {
    id: uniqueKey,
    checked: checked,
    onChange: event => onChange(event)
  })), user.role === 'operator' && /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-user-list-item__operator",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_2
  }, "Operator"), action && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-user-list-item__action",
    ref: actionRef
  }, action({
    actionRef,
    parentRef
  })));
}
UserListItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  user: PropTypes.shape({
    userId: PropTypes.string,
    role: PropTypes.string,
    isMuted: PropTypes.bool,
    nickname: PropTypes.string,
    profileUrl: PropTypes.string
  }).isRequired,
  disableMessaging: PropTypes.bool,
  currentUser: PropTypes.string,
  action: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  checkBox: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func
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

export { UserListItem as default };
//# sourceMappingURL=UserListItem.js.map
