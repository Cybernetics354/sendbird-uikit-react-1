import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useChannelSettingsContext } from '../context.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import TextButton from '../../ui/TextButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-ed7103e1.js';
import EditDetails from './EditDetailsModal.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../UserProfileContext-c84a4f87.js';
import 'prop-types';
import '../../uuid-4b033040.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../utils-cbdd30a8.js';
import '../../color-9d1ce766.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-bf6cbc46.js';
import '../../ui/IconButton.js';
import '../../index-28e59bab.js';
import '../../utils-c830dbcc.js';
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
