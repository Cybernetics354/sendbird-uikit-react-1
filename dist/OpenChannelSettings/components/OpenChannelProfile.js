import React__default, { useState, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-d9ca04bb.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import EditDetails from './EditDetailsModal.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useOpenChannelSettingsContext } from '../context.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import 'prop-types';
import '../../color-395a9ce9.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../uuid-ffa79983.js';
import '../../utils-c1646812.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-ec60ce57.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../index-fc0130a5.js';
import '../../utils-1fc25d9a.js';
import '../../ui/Input.js';
import '../../withSendbird.js';
import '../../UserProfileContext-0d690a96.js';

function ChannelProfile() {
  var _a, _b;

  var globalState = useSendbirdStateContext();
  var disabled = !((_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.isOnline);
  var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;
  var channel = useOpenChannelSettingsContext().channel;
  var title = channel === null || channel === void 0 ? void 0 : channel.name;

  var _c = useState(false),
      showModal = _c[0],
      setShowModal = _c[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-profile"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-profile--inner"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-profile__avatar"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    channel: channel,
    theme: theme,
    height: 80,
    width: 80
  })), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1,
    className: "sendbird-openchannel-profile__title"
  }, title || stringSet.OPEN_CHANNEL_SETTINGS__NO_TITLE), /*#__PURE__*/React__default.createElement(TextButton, {
    disabled: disabled,
    className: "sendbird-openchannel-profile__edit",
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
    }
  })));
}

export { ChannelProfile as default };
//# sourceMappingURL=OpenChannelProfile.js.map
