'use strict';

var React = require('react');
var ui_Button = require('./index-86c744f1.js');
var ui_IconButton = require('./ui/IconButton.js');
var ui_Icon = require('./ui/Icon.js');
var ui_ContextMenu = require('./ui/ContextMenu.js');
var ChannelSettings_components_UserListItem = require('./ChannelSettings/components/UserListItem.js');
var tslib_es6 = require('./tslib.es6-90bf9fc5.js');
var ui_Modal = require('./ui/Modal.js');
var ui_UserListItem = require('./ui/UserListItem.js');
var utils = require('./utils-8f0d7826.js');
var ChannelSettings_context = require('./ChannelSettings/context.js');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
var uuid = require('./uuid-04261033.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MembersModal(_a) {
  var _b;

  var onCancel = _a.onCancel;

  var _c = React.useState([]),
      members = _c[0],
      setMembers = _c[1];

  var _d = React.useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var channel = ChannelSettings_context.useChannelSettingsContext().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  React.useEffect(function () {
    var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
      limit: 20
    });
    memberListQuery.next().then(function (members) {
      setMembers(members);
    });
    setMemberQuery(memberListQuery);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    hideFooter: true,
    onCancel: function () {
      return onCancel();
    },
    onSubmit: utils.noop,
    titleText: "All Members"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function (e) {
      var hasNext = memberQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        memberQuery.next().then(function (o) {
          setMembers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      user: member,
      key: member.userId,
      currentUser: currentUser,
      action: function (_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (channel === null || channel === void 0 ? void 0 : channel.myRole) === 'operator' && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function (toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function (closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                if (member.role !== 'operator') {
                  channel === null || channel === void 0 ? void 0 : channel.addOperators([member.userId]).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return tslib_es6.__assign(tslib_es6.__assign({}, member), {
                          role: 'operator'
                        });
                      }

                      return m;
                    }));
                    closeDropdown();
                  });
                } else {
                  channel === null || channel === void 0 ? void 0 : channel.removeOperators([member.userId]).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return tslib_es6.__assign(tslib_es6.__assign({}, member), {
                          role: ''
                        });
                      }

                      return m;
                    }));
                    closeDropdown();
                  });
                }
              }
            }, member.role !== 'operator' ? 'Register as operator' : 'Unregister operator'), // No muted members in broadcast channel
            !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                if (member.isMuted) {
                  channel === null || channel === void 0 ? void 0 : channel.unmuteUser(member).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return tslib_es6.__assign(tslib_es6.__assign({}, member), {
                          isMuted: false
                        });
                      }

                      return m;
                    }));
                    closeDropdown();
                  });
                } else {
                  channel === null || channel === void 0 ? void 0 : channel.muteUser(member).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return tslib_es6.__assign(tslib_es6.__assign({}, member), {
                          isMuted: true
                        });
                      }

                      return m;
                    }));
                    closeDropdown();
                  });
                }
              }
            }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                channel === null || channel === void 0 ? void 0 : channel.banUser(member, -1, '').then(function () {
                  setMembers(members.filter(function (_a) {
                    var userId = _a.userId;
                    return userId !== member.userId;
                  }));
                });
              }
            }, "Ban"));
          }
        }));
      }
    });
  }))));
}

function InviteUsers(_a) {
  var _b, _c;

  var onCancel = _a.onCancel,
      onSubmit = _a.onSubmit;

  var _d = React.useState([]),
      members = _d[0],
      setMembers = _d[1];

  var _e = React.useState({}),
      selectedMembers = _e[0],
      setSelectedMembers = _e[1];

  var _f = React.useState(null),
      userQuery = _f[0],
      setUserQuery = _f[1];

  var state = useSendbirdStateContext();
  var sdk = (_c = (_b = state === null || state === void 0 ? void 0 : state.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var channel = ChannelSettings_context.useChannelSettingsContext().channel;
  React.useEffect(function () {
    var userListQuery = sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery();
    userListQuery.next().then(function (members) {
      setMembers(members);
    });
    setUserQuery(userListQuery);
  }, [sdk]);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    disabled: Object.keys(selectedMembers).length === 0,
    submitText: "Invite",
    type: ui_Button.Type.PRIMARY,
    onCancel: function () {
      return onCancel();
    },
    onSubmit: function () {
      var members = Object.keys(selectedMembers).filter(function (m) {
        return selectedMembers[m];
      });
      channel === null || channel === void 0 ? void 0 : channel.inviteWithUserIds(members).then(function () {
        onSubmit(members);
      });
    },
    titleText: "Select members"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function (e) {
      var hasNext = userQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        userQuery.next().then(function (users) {
          setMembers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], members, true), users, true));
        });
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-more-members__popup-scroll__inner"
  }, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      checkBox: true,
      checked: selectedMembers[member.userId],
      onChange: function (event) {
        var _a;

        var modifiedSelectedMembers = tslib_es6.__assign(tslib_es6.__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

        if (!event.target.checked) {
          delete modifiedSelectedMembers[event.target.id];
        }

        setSelectedMembers(modifiedSelectedMembers);
      },
      user: member,
      key: member.userId
    });
  })))));
}

var MemberList = function () {
  var _a, _b, _c;

  var _d = React.useState([]),
      members = _d[0],
      setMembers = _d[1];

  var _e = React.useState(false),
      hasNext = _e[0],
      setHasNext = _e[1];

  var _f = React.useState(false),
      showAllMembers = _f[0],
      setShowAllMembers = _f[1];

  var _g = React.useState(false),
      showInviteUsers = _g[0],
      setShowInviteUsers = _g[1];

  var state = useSendbirdStateContext();

  var _h = ChannelSettings_context.useChannelSettingsContext(),
      channel = _h.channel,
      setChannelUpdateId = _h.setChannelUpdateId;

  var sdk = (_b = (_a = state === null || state === void 0 ? void 0 : state.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var userId = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.userId;
  React.useEffect(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
      limit: 10
    });
    memberUserListQuery.next().then(function (members) {
      setMembers(members);
      setHasNext(memberUserListQuery.hasNext);
    });
  }, [channel]);
  var refershList = React.useCallback(function () {
    if (!channel) {
      setMembers([]);
      return;
    }

    var memberUserListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
      limit: 10
    });
    memberUserListQuery.next().then(function (members) {
      setMembers(members);
      setHasNext(memberUserListQuery.hasNext);
      setChannelUpdateId(uuid.uuidv4());
    });
  }, [channel]);
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default["default"].createElement(ChannelSettings_components_UserListItem, {
      key: member.userId,
      user: member,
      currentUser: sdk.currentUser.userId,
      action: userId !== member.userId ? function (_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
          menuTrigger: function (toggleDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
              width: "24px",
              height: "24px",
              type: ui_Icon.IconTypes.MORE,
              fillColor: ui_Icon.IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function (closeDropdown) {
            return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                if (member.role !== 'operator') {
                  channel === null || channel === void 0 ? void 0 : channel.addOperators([member.userId]).then(function () {
                    refershList();
                    closeDropdown();
                  });
                } else {
                  channel === null || channel === void 0 ? void 0 : channel.removeOperators([member.userId]).then(function () {
                    refershList();
                    closeDropdown();
                  });
                }
              }
            }, member.role !== 'operator' ? 'Register as operator' : 'Unregister operator'), // No muted members in broadcast channel
            !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                if (member.isMuted) {
                  channel === null || channel === void 0 ? void 0 : channel.unmuteUser(member).then(function () {
                    refershList();
                    closeDropdown();
                  });
                } else {
                  channel === null || channel === void 0 ? void 0 : channel.muteUser(member).then(function () {
                    refershList();
                    closeDropdown();
                  });
                }
              }
            }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
              onClick: function () {
                channel === null || channel === void 0 ? void 0 : channel.banUser(member, -1, '').then(function () {
                  refershList();
                  closeDropdown();
                });
              }
            }, "Ban"));
          }
        });
      } : null
    });
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, hasNext && /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    size: ui_Button.ButtonSizes.SMALL,
    onClick: function () {
      return setShowAllMembers(true);
    }
  }, "All members")), showAllMembers && /*#__PURE__*/React__default["default"].createElement(MembersModal, {
    onCancel: function () {
      setShowAllMembers(false);
      refershList();
    }
  }), showInviteUsers && /*#__PURE__*/React__default["default"].createElement(InviteUsers, {
    onSubmit: function () {
      setShowInviteUsers(false);
      refershList();
    },
    onCancel: function () {
      return setShowInviteUsers(false);
    }
  }));
};

exports.MemberList = MemberList;
//# sourceMappingURL=MemberList-f1672aea.js.map
