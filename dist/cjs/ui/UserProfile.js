'use strict';

var React = require('react');
var LocalizationContext = require('../LocalizationContext-06295289.js');
var withSendbird = require('../withSendbird.js');
var sendbirdSelectors = require('../sendbirdSelectors.js');
var ui_Avatar = require('./Avatar.js');
var ui_Label = require('../index-06ad9a23.js');
var ui_Button = require('../index-37c2c6ef.js');
require('../stringSet-c0b7ef0b.js');
require('../index-46a833a2.js');
require('../_rollupPluginBabelHelpers-2157fc28.js');
require('../topics-e5b39d00.js');
require('../utils-d52c5709.js');
require('../tslib.es6-43d4c54c.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-3cedbe50.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function UserProfile(_a) {
  var user = _a.user,
      currentUserId = _a.currentUserId,
      logger = _a.logger,
      _b = _a.disableMessaging,
      disableMessaging = _b === void 0 ? false : _b,
      createChannel = _a.createChannel,
      onSuccess = _a.onSuccess;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile"
  }, /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-avatar"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    height: "80px",
    width: "80px",
    src: user === null || user === void 0 ? void 0 : user.profileUrl
  })), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-name"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)), (user === null || user === void 0 ? void 0 : user.userId) !== currentUserId && !disableMessaging && /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-message"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Button.Button, {
    type: ui_Button.ButtonTypes.SECONDARY,
    onClick: function () {
      var params = {
        isDistinct: true,
        invitedUserIds: [user === null || user === void 0 ? void 0 : user.userId]
      };
      onSuccess();
      createChannel(params).then(function (groupChannel) {
        logger.info('UserProfile, channel create', groupChannel);
      });
    }
  }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird__user-profile-separator"
  }), /*#__PURE__*/React__default["default"].createElement("section", {
    className: "sendbird__user-profile-userId"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird__user-profile-userId--label",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird__user-profile-userId--value",
    type: ui_Label.LabelTypography.BODY_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user === null || user === void 0 ? void 0 : user.userId)));
}

var mapStoreToProps = function (store) {
  return {
    sdk: sendbirdSelectors.getSdk(store),
    createChannel: sendbirdSelectors.getCreateGroupChannel(store),
    logger: store.config.logger,
    pubsub: store.config.pubSub
  };
};

var ConnectedUserProfile = withSendbird["default"](UserProfile, mapStoreToProps);

module.exports = ConnectedUserProfile;
//# sourceMappingURL=UserProfile.js.map
