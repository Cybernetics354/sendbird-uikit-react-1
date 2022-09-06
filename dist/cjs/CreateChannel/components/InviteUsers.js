'use strict';

var tslib_es6 = require('../../tslib.es6-bd7bd76d.js');
var React = require('react');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var CreateChannel_context = require('../../CreateChannelProvider-0a413c0f.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Modal = require('../../ui/Modal.js');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_Button = require('../../index-51cd7ad2.js');
var ui_UserListItem = require('../../ui/UserListItem.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('../../sendbirdSelectors.js');
require('../../topics-9b308b83.js');
require('../../utils-ae4d63e2.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('prop-types');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../UserProfileContext-24790fe2.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-d427ce45.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-6292ff33.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var filterUser = function (idsToFilter) {
  return function (currentId) {
    return idsToFilter === null || idsToFilter === void 0 ? void 0 : idsToFilter.includes(currentId);
  };
};
var setChannelType = function (params, type) {
  if (type === 'broadcast') {
    // eslint-disable-next-line no-param-reassign
    params.isBroadcast = true;
  }

  if (type === 'supergroup') {
    // eslint-disable-next-line no-param-reassign
    params.isSuper = true;
  }

  return params;
};
var createDefaultUserListQuery = function (_a) {
  var sdk = _a.sdk,
      userFilledApplicationUserListQuery = _a.userFilledApplicationUserListQuery;
  var params = sdk.createApplicationUserListQuery();

  if (userFilledApplicationUserListQuery) {
    Object.keys(userFilledApplicationUserListQuery).forEach(function (key) {
      params[key] = userFilledApplicationUserListQuery[key];
    });
  }

  return params;
};

var InviteUsers = function (_a) {
  var _b, _c, _d;

  var onCancel = _a.onCancel;

  var _e = CreateChannel_context.useCreateChannelContext(),
      onBeforeCreateChannel = _e.onBeforeCreateChannel,
      onCreateChannel = _e.onCreateChannel,
      createChannel = _e.createChannel,
      type = _e.type;

  var globalStore = useSendbirdStateContext();
  var userId = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.userId;
  var sdk = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.sdkStore) === null || _d === void 0 ? void 0 : _d.sdk;
  var idsToFilter = [userId];

  var _f = React.useState([]),
      users = _f[0],
      setUsers = _f[1];

  var _g = React.useState({}),
      selectedUsers = _g[0],
      setSelectedUsers = _g[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _h = React.useState(null),
      usersDataSource = _h[0],
      setUsersDataSource = _h[1];

  var selectedCount = Object.keys(selectedUsers).length;
  var titleText = stringSet.MODAL__CREATE_CHANNEL__TITLE;
  var submitText = stringSet.BUTTON__CREATE;
  var userQueryCreator = createDefaultUserListQuery({
    sdk: sdk
  });
  React.useEffect(function () {
    var applicationUserListQuery = userQueryCreator;
    setUsersDataSource(applicationUserListQuery);
    applicationUserListQuery.next().then(function (users_) {
      setUsers(users_);
    });
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    titleText: titleText,
    submitText: submitText,
    type: ui_Button.ButtonTypes.PRIMARY,
    onCancel: onCancel,
    onSubmit: function () {
      var selectedUserList = Object.keys(selectedUsers);

      if (selectedUserList.length > 0) {
        if (onBeforeCreateChannel) {
          var params = onBeforeCreateChannel(selectedUserList);
          setChannelType(params, type);
          createChannel(params).then(function (channel) {
            onCreateChannel(channel);
          });
        } else {
          var params = {};
          params.invitedUserIds = selectedUserList;
          params.isDistinct = false;

          if (userId) {
            params.operatorUserIds = [userId];
          }

          setChannelType(params, type); // do not have custom params

          createChannel(params).then(function (channel) {
            onCreateChannel(channel);
          });
        }

        onCancel();
      }
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    color: selectedCount > 0 ? ui_Label.LabelColors.PRIMARY : ui_Label.LabelColors.ONBACKGROUND_3,
    type: ui_Label.LabelTypography.CAPTION_1
  }, "".concat(selectedCount, " ").concat(stringSet.MODAL__INVITE_MEMBER__SELECTEC)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-create-channel--scroll",
    onScroll: function (e) {
      var eventTarget = e.target;
      var hasNext = usersDataSource.hasNext;
      var fetchMore = eventTarget.clientHeight + eventTarget.scrollTop === eventTarget.scrollHeight;

      if (hasNext && fetchMore) {
        usersDataSource.next().then(function (usersBatch) {
          setUsers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], users, true), usersBatch, true));
        });
      }
    }
  }, users.map(function (user) {
    return !filterUser(idsToFilter)(user.userId) && /*#__PURE__*/React__default["default"].createElement(ui_UserListItem, {
      key: user.userId,
      user: user,
      checkBox: true,
      checked: selectedUsers[user.userId],
      onChange: function (event) {
        var _a;

        var modifiedSelectedUsers = tslib_es6.__assign(tslib_es6.__assign({}, selectedUsers), (_a = {}, _a[event.target.id] = event.target.checked, _a));

        if (!event.target.checked) {
          delete modifiedSelectedUsers[event.target.id];
        }

        setSelectedUsers(modifiedSelectedUsers);
      }
    });
  }))));
};

module.exports = InviteUsers;
//# sourceMappingURL=InviteUsers.js.map
