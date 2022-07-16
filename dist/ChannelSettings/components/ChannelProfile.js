import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-53585fab.js';
import EditDetails from './EditDetailsModal.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../UserProfileContext-153af432.js';
import 'prop-types';
import '../../uuid-91011cda.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../utils-aa207dba.js';
import '../../color-ea1c9845.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-6bfe08d8.js';
import '../../ui/IconButton.js';
import '../../index-d880236d.js';
import '../../utils-87c63da6.js';
import '../../ui/Input.js';

var ChannelProfile = function () {
  var _a, _b, _c;

  var state = useSendbirdStateContext();
  var channelSettingStore = useChannelSettingsContext();
  var stringSet = useContext(LocalizationContext).stringSet;

  var _d = useState(false),
      showModal = _d[0],
      setShowModal = _d[1];

  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = ((_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme) || 'light';
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;
  var disabled = !isOnline;
  var channel = channelSettingStore.channel;

  var getChannelName = function () {
    if ((channel === null || channel === void 0 ? void 0 : channel.name) && (channel === null || channel === void 0 ? void 0 : channel.name) !== 'Group Channel') {
      return channel.name;
    }

    if ((channel === null || channel === void 0 ? void 0 : channel.name) === 'Group Channel' || !(channel === null || channel === void 0 ? void 0 : channel.name)) {
      return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).map(function (member) {
        return member.nickname || stringSet.NO_NAME;
      }).join(', ');
    }

    return stringSet.NO_TITLE;
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile--inner"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-profile__avatar"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    channel: channel,
    userId: userId,
    theme: theme,
    width: 80,
    height: 80
  })), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-channel-profile__title",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, getChannelName()), /*#__PURE__*/React__default.createElement(TextButton, {
    disabled: disabled,
    className: "sendbird-channel-profile__edit",
    onClick: function () {
      if (disabled) {
        return;
      }

      setShowModal(true);
    },
    notUnderline: true
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: disabled ? LabelColors.ONBACKGROUND_2 : LabelColors.PRIMARY
  }, stringSet.CHANNEL_SETTING__PROFILE__EDIT)), showModal && /*#__PURE__*/React__default.createElement(EditDetails, {
    onCancel: function () {
      return setShowModal(false);
    },
    onSubmit: function () {
      return setShowModal(false);
    }
  })));
};

export { ChannelProfile as default };
//# sourceMappingURL=ChannelProfile.js.map
