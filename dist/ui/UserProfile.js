import React__default, { useContext } from 'react';
import { a as LocalizationContext } from '../LocalizationContext-8a121e1d.js';
import withSendbirdContext from '../withSendbird.js';
import { getSdk, getCreateGroupChannel } from '../sendbirdSelectors.js';
import Avatar from './Avatar.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-2cd7fa96.js';
import { B as Button, a as ButtonTypes } from '../index-bd1b8bfb.js';
import '../stringSet-955abea5.js';
import '../index-76197404.js';
import '../_rollupPluginBabelHelpers-4dd1a6d8.js';
import '../topics-e07cc011.js';
import '../utils-d8815494.js';
import '../tslib.es6-4021ca51.js';
import './ImageRenderer.js';
import 'prop-types';
import './Icon.js';
import '../uuid-c5fe47ff.js';

function UserProfile(_a) {
  var user = _a.user,
      currentUserId = _a.currentUserId,
      logger = _a.logger,
      _b = _a.disableMessaging,
      disableMessaging = _b === void 0 ? false : _b,
      createChannel = _a.createChannel,
      onSuccess = _a.onSuccess;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird__user-profile"
  }, /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-avatar"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    height: "80px",
    width: "80px",
    src: user === null || user === void 0 ? void 0 : user.profileUrl
  })), /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-name"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, (user === null || user === void 0 ? void 0 : user.nickname) || stringSet.NO_NAME)), (user === null || user === void 0 ? void 0 : user.userId) !== currentUserId && !disableMessaging && /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-message"
  }, /*#__PURE__*/React__default.createElement(Button, {
    type: ButtonTypes.SECONDARY,
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
  }, stringSet.USER_PROFILE__MESSAGE)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird__user-profile-separator"
  }), /*#__PURE__*/React__default.createElement("section", {
    className: "sendbird__user-profile-userId"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird__user-profile-userId--label",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.USER_PROFILE__USER_ID), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird__user-profile-userId--value",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_1
  }, user === null || user === void 0 ? void 0 : user.userId)));
}

var mapStoreToProps = function (store) {
  return {
    sdk: getSdk(store),
    createChannel: getCreateGroupChannel(store),
    logger: store.config.logger,
    pubsub: store.config.pubSub
  };
};

var ConnectedUserProfile = withSendbirdContext(UserProfile, mapStoreToProps);

export { ConnectedUserProfile as default };
//# sourceMappingURL=UserProfile.js.map
