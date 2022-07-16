'use strict';

var React = require('react');
var LocalizationContext = require('../LocalizationContext-c4e6256c.js');
var withSendbird = require('../withSendbird.js');
var sendbirdSelectors = require('../sendbirdSelectors.js');
var ui_Avatar = require('./Avatar.js');
var ui_Label = require('../index-9235a70d.js');
var ui_Button = require('../index-d3743106.js');
require('../stringSet-6c45946e.js');
require('../index-5a900a14.js');
require('../_rollupPluginBabelHelpers-95f9644b.js');
require('../topics-9033c412.js');
require('../utils-787f6393.js');
require('../tslib.es6-79d6c001.js');
require('./ImageRenderer.js');
require('prop-types');
require('./Icon.js');
require('../uuid-35ad849a.js');

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
