'use strict';

var tslib_es6 = require('../../tslib.es6-87d8a6c3.js');
var React = require('react');
var ui_Label = require('../../index-9ad5c786.js');
var LocalizationContext = require('../../LocalizationContext-7124ef76.js');
var UserProfileContext = require('../../UserProfileContext-4574eaff.js');
require('../../index-c5f391d0.js');
require('../../ui/Icon.js');
require('../../context-31aa8071.js');
var ui_Avatar = require('../../ui/Avatar.js');
require('../../ui/Modal.js');
require('../../ui/UserListItem.js');
var ui_UserProfile = require('../../ui/UserProfile.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var OpenChannelSettings_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('prop-types');
require('../../stringSet-ca0cf06e.js');
require('../../index-80df9998.js');
require('../../utils-d6de0e43.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-cfc8429e.js');
require('react-dom');
require('../../index-74e1c32a.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../withSendbird.js');
require('../../sendbirdSelectors.js');
require('../../topics-55f51c3d.js');
require('../../index-f6c81602.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var UserListItem = function (_a) {
  var member = _a.member,
      currentUser = _a.currentUser;
  var avatarRef = React.useRef(null);

  var _b = React.useContext(UserProfileContext.UserProfileContext),
      disableUserProfile = _b.disableUserProfile,
      renderUserProfile = _b.renderUserProfile;

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-participants-accordion__member"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-participants-accordion__member-avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
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
        user: member,
        currentUserId: currentUser,
        close: closeDropdown
      }) : /*#__PURE__*/React__default["default"].createElement(ui_UserProfile, {
        disableMessaging: true,
        user: member,
        currentUserId: currentUser,
        onSuccess: closeDropdown
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, member.nickname || stringSet.NO_NAME, currentUser === member.userId && stringSet.CHANNEL_SETTING__MEMBERS__YOU));
};

function ParticipantsList() {
  var _a;

  var globalState = useSendbirdStateContext();
  var currentUser = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var channel = OpenChannelSettings_context.useOpenChannelSettingsContext().channel;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _b = React.useState([]),
      participants = _b[0],
      setParticipants = _b[1];

  var _c = React.useState(null),
      participantListQuery = _c[0],
      setParticipantListQuery = _c[1];

  React.useEffect(function () {
    if (!channel || !(channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery)) {
      return;
    }

    var participantListQuery = channel === null || channel === void 0 ? void 0 : channel.createParticipantListQuery({});
    setParticipantListQuery(participantListQuery);
    participantListQuery.next().then(function (participantList) {
      setParticipants(participantList);
    });
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-settings__participants-list",
    onScroll: function (e) {
      var hasNext = participantListQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        participantListQuery.next().then(function (fetchedParticipants) {
          setParticipants(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], participants, true), fetchedParticipants, true));
        });
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null, participants.map(function (p) {
    return /*#__PURE__*/React__default["default"].createElement(UserListItem, {
      member: p,
      currentUser: currentUser,
      key: p.userId
    });
  }), participants && participants.length === 0 ? /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-settings__empty-list",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_3
  }, stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST) : null));
}

module.exports = ParticipantsList;
//# sourceMappingURL=ParticipantUI.js.map
