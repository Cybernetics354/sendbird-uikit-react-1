import React__default, { useState, useEffect, useCallback } from 'react';
import { T as Type, B as Button, a as ButtonTypes, b as ButtonSizes } from './index-b422234e.js';
import IconButton from './ui/IconButton.js';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import ContextMenu, { MenuItems, MenuItem } from './ui/ContextMenu.js';
import UserListItem$1 from './ChannelSettings/components/UserListItem.js';
import { a as __spreadArray, _ as __assign } from './tslib.es6-1d5f2fa9.js';
import Modal from './ui/Modal.js';
import UserListItem from './ui/UserListItem.js';
import { n as noop } from './utils-c794f866.js';
import { useChannelSettingsContext } from './ChannelSettings/context.js';
import useSendbirdStateContext from './useSendbirdStateContext.js';
import { u as uuidv4 } from './uuid-6e50e4c4.js';

function MembersModal(_a) {
  var _b;

  var onCancel = _a.onCancel;

  var _c = useState([]),
      members = _c[0],
      setMembers = _c[1];

  var _d = useState(null),
      memberQuery = _d[0],
      setMemberQuery = _d[1];

  var channel = useChannelSettingsContext().channel;
  var state = useSendbirdStateContext();
  var currentUser = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.userId;
  useEffect(function () {
    var memberListQuery = channel === null || channel === void 0 ? void 0 : channel.createMemberListQuery({
      limit: 20
    });
    memberListQuery.next().then(function (members) {
      setMembers(members);
    });
    setMemberQuery(memberListQuery);
  }, []);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    hideFooter: true,
    onCancel: function () {
      return onCancel();
    },
    onSubmit: noop,
    titleText: "All Members"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function (e) {
      var hasNext = memberQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        memberQuery.next().then(function (o) {
          setMembers(__spreadArray(__spreadArray([], members, true), o, true));
        });
      }
    }
  }, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      user: member,
      key: member.userId,
      currentUser: currentUser,
      action: function (_a) {
        var parentRef = _a.parentRef,
            actionRef = _a.actionRef;
        return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, (channel === null || channel === void 0 ? void 0 : channel.myRole) === 'operator' && /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function (toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function (closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
              onClick: function () {
                if (member.role !== 'operator') {
                  channel === null || channel === void 0 ? void 0 : channel.addOperators([member.userId]).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return __assign(__assign({}, member), {
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
                        return __assign(__assign({}, member), {
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
            !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && /*#__PURE__*/React__default.createElement(MenuItem, {
              onClick: function () {
                if (member.isMuted) {
                  channel === null || channel === void 0 ? void 0 : channel.unmuteUser(member).then(function () {
                    setMembers(members.map(function (m) {
                      if (m.userId === member.userId) {
                        return __assign(__assign({}, member), {
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
                        return __assign(__assign({}, member), {
                          isMuted: true
                        });
                      }

                      return m;
                    }));
                    closeDropdown();
                  });
                }
              }
            }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default.createElement(MenuItem, {
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

  var _d = useState([]),
      members = _d[0],
      setMembers = _d[1];

  var _e = useState({}),
      selectedMembers = _e[0],
      setSelectedMembers = _e[1];

  var _f = useState(null),
      userQuery = _f[0],
      setUserQuery = _f[1];

  var state = useSendbirdStateContext();
  var sdk = (_c = (_b = state === null || state === void 0 ? void 0 : state.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var channel = useChannelSettingsContext().channel;
  useEffect(function () {
    var userListQuery = sdk === null || sdk === void 0 ? void 0 : sdk.createApplicationUserListQuery();
    userListQuery.next().then(function (members) {
      setMembers(members);
    });
    setUserQuery(userListQuery);
  }, [sdk]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Modal, {
    disabled: Object.keys(selectedMembers).length === 0,
    submitText: "Invite",
    type: Type.PRIMARY,
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
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-more-members__popup-scroll",
    onScroll: function (e) {
      var hasNext = userQuery.hasNext;
      var target = e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (hasNext && fetchMore) {
        userQuery.next().then(function (users) {
          setMembers(__spreadArray(__spreadArray([], members, true), users, true));
        });
      }
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-more-members__popup-scroll__inner"
  }, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem, {
      checkBox: true,
      checked: selectedMembers[member.userId],
      onChange: function (event) {
        var _a;

        var modifiedSelectedMembers = __assign(__assign({}, selectedMembers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

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

  var _d = useState([]),
      members = _d[0],
      setMembers = _d[1];

  var _e = useState(false),
      hasNext = _e[0],
      setHasNext = _e[1];

  var _f = useState(false),
      showAllMembers = _f[0],
      setShowAllMembers = _f[1];

  var _g = useState(false),
      showInviteUsers = _g[0],
      setShowInviteUsers = _g[1];

  var state = useSendbirdStateContext();

  var _h = useChannelSettingsContext(),
      channel = _h.channel,
      setChannelUpdateId = _h.setChannelUpdateId;

  var sdk = (_b = (_a = state === null || state === void 0 ? void 0 : state.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var userId = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.userId;
  useEffect(function () {
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
  var refershList = useCallback(function () {
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
      setChannelUpdateId(uuidv4());
    });
  }, [channel]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, members.map(function (member) {
    return /*#__PURE__*/React__default.createElement(UserListItem$1, {
      key: member.userId,
      user: member,
      currentUser: sdk.currentUser.userId,
      action: userId !== member.userId ? function (_a) {
        var actionRef = _a.actionRef,
            parentRef = _a.parentRef;
        return /*#__PURE__*/React__default.createElement(ContextMenu, {
          menuTrigger: function (toggleDropdown) {
            return /*#__PURE__*/React__default.createElement(IconButton, {
              className: "sendbird-user-message__more__menu",
              width: "32px",
              height: "32px",
              onClick: toggleDropdown
            }, /*#__PURE__*/React__default.createElement(Icon, {
              width: "24px",
              height: "24px",
              type: IconTypes.MORE,
              fillColor: IconColors.CONTENT_INVERSE
            }));
          },
          menuItems: function (closeDropdown) {
            return /*#__PURE__*/React__default.createElement(MenuItems, {
              parentContainRef: parentRef,
              parentRef: actionRef // for catching location(x, y) of MenuItems
              ,
              closeDropdown: closeDropdown,
              openLeft: true
            }, /*#__PURE__*/React__default.createElement(MenuItem, {
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
            !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast) && /*#__PURE__*/React__default.createElement(MenuItem, {
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
            }, member.isMuted ? 'Unmute' : 'Mute'), /*#__PURE__*/React__default.createElement(MenuItem, {
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
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings-accordion__footer"
  }, hasNext && /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
    size: ButtonSizes.SMALL,
    onClick: function () {
      return setShowAllMembers(true);
    }
  }, "All members")), showAllMembers && /*#__PURE__*/React__default.createElement(MembersModal, {
    onCancel: function () {
      setShowAllMembers(false);
      refershList();
    }
  }), showInviteUsers && /*#__PURE__*/React__default.createElement(InviteUsers, {
    onSubmit: function () {
      setShowInviteUsers(false);
      refershList();
    },
    onCancel: function () {
      return setShowInviteUsers(false);
    }
  }));
};

export { MemberList as M };
//# sourceMappingURL=MemberList-d2c1e1c1.js.map
