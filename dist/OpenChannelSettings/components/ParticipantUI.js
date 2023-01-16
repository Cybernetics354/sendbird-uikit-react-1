import { a as __spreadArray } from '../../tslib.es6-6b1ce61a.js';
import React__default, { useRef, useContext, useState, useEffect } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-96f2ca18.js';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import { U as UserProfileContext } from '../../UserProfileContext-7c91714e.js';
import '../../index-1187996f.js';
import '../../ui/Icon.js';
import '../../context-2465ab00.js';
import Avatar from '../../ui/Avatar.js';
import '../../ui/Modal.js';
import '../../ui/UserListItem.js';
import ConnectedUserProfile from '../../ui/UserProfile.js';
import ContextMenu, { MenuItems } from '../../ui/ContextMenu.js';
import { useOpenChannelSettingsContext } from '../context.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import 'prop-types';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../utils-d6f171ef.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-21b2a5db.js';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../withSendbird.js';
import '../../sendbirdSelectors.js';
import '../../topics-e87f2985.js';
import '../../index-f2c869d7.js';
import '../../ui/SortByRow.js';

var UserListItem = function (_a) {
  var member = _a.member,
      currentUser = _a.currentUser;
  var avatarRef = useRef(null);

  var _b = useContext(UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-participants-accordion__member"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-participants-accordion__member-avatar"
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(Avatar, {
        onClick: function () {
          if (!disableUserProfile) {
            toggleDropdown();
          }
        },
        ref: avatarRef,
        src: member.profileUrl,
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
        user: member,
        currentUserId: currentUser,
        close: closeDropdown
      }) : /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        disableMessaging: true,
        user: member,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  })), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, member.nickname || stringSet.NO_NAME, currentUser === member.userId && stringSet.CHANNEL_SETTING__MEMBERS__YOU));
};

function ParticipantsList() {
  var _a;

  var globalState = useSendbirdStateContext();
  var currentUser = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var channel = useOpenChannelSettingsContext().channel;
  var stringSet = useContext(LocalizationContext).stringSet;

  var _b = useState([]),
      participants = _b[0],
      setParticipants = _b[1];

  var _c = useState(null),
      participantListQuery = _c[0],
      setParticipantListQuery = _c[1];

  useEffect(function () {
    if (!channel || !(channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery)) {
      return;
    }

    var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({});
    setParticipantListQuery(participantListQuery);
    participantListQuery.next().then(function (participantList) {
      setParticipants(participantList);
    });
  }, [channel]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__participants-list",
    onScroll: function (e) {
      var hasNext = participantListQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        participantListQuery.next().then(function (fetchedParticipants) {
          setParticipants(__spreadArray(__spreadArray([], participants, true), fetchedParticipants, true));
        });
      }
    }
  }, /*#__PURE__*/React__default.createElement("div", null, participants.map(function (p) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      member: p,
      currentUser: currentUser,
      key: p.userId
    });
  }), participants && participants.length === 0 ? /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-settings__empty-list",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_3
  }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST) : null));
}

export { ParticipantsList as default };
//# sourceMappingURL=ParticipantUI.js.map
