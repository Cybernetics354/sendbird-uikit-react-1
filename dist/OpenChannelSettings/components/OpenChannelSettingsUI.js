import React__default, { useContext } from 'react';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { useOpenChannelSettingsContext } from '../context.js';
import { a as UserProfileProvider } from '../../UserProfileContext-7c91714e.js';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-96f2ca18.js';
import Icon, { IconTypes } from '../../ui/Icon.js';
import { P as PlaceHolder, b as PlaceHolderTypes } from '../../index-fc9ccd03.js';
import { OperatorUI } from './OperatorUI.js';
import ParticipantsList from './ParticipantUI.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import 'prop-types';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../ui/Loader.js';
import './OpenChannelProfile.js';
import '../../ui/TextButton.js';
import '../../color-717a18f9.js';
import '../../ui/OpenChannelAvatar.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-21b2a5db.js';
import '../../utils-ce7905db.js';
import './EditDetailsModal.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../ui/IconButton.js';
import '../../index-1187996f.js';
import '../../utils-d6f171ef.js';
import '../../ui/Input.js';
import '../../ui/Accordion.js';
import '../../ui/AccordionGroup.js';
import '../../context-2465ab00.js';
import '../../ui/UserListItem.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../topics-e87f2985.js';
import '../../ui/ContextMenu.js';
import '../../index-f2c869d7.js';
import '../../ui/SortByRow.js';

function InvalidChannel(_a) {
  var onCloseClick = _a.onCloseClick;
  var stringSet = useContext(LocalizationContext).stringSet;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__HEADER__TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__placeholder"
  }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.WRONG
  })));
}

var OpenChannelUI = function (_a) {
  var _b, _c, _d;

  var renderOperatorUI = _a.renderOperatorUI,
      renderParticipantList = _a.renderParticipantList;

  var _e = useOpenChannelSettingsContext(),
      channel = _e.channel,
      onCloseClick = _e.onCloseClick;

  var globalStore = useSendbirdStateContext();
  var logger = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _b === void 0 ? void 0 : _b.logger;
  var user = (_d = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _c === void 0 ? void 0 : _c.userStore) === null || _d === void 0 ? void 0 : _d.user;
  var stringSet = useContext(LocalizationContext).stringSet;

  if (!channel) {
    return /*#__PURE__*/React__default.createElement(InvalidChannel, {
      onCloseClick: function () {
        logger.info('OpenChannelSettings: Click close');

        if (onCloseClick) {
          onCloseClick();
        }
      }
    });
  }

  return /*#__PURE__*/React__default.createElement(UserProfileProvider, null, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings"
  }, (channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && ((renderOperatorUI === null || renderOperatorUI === void 0 ? void 0 : renderOperatorUI()) || /*#__PURE__*/React__default.createElement(OperatorUI, null)), !(channel === null || channel === void 0 ? void 0 : channel.isOperator(user)) && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__participant"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-settings__header"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    className: "sendbird-openchannel-settings__close-icon",
    height: "24px",
    width: "24px",
    onClick: function () {
      onCloseClick();
    }
  })), (renderParticipantList === null || renderParticipantList === void 0 ? void 0 : renderParticipantList()) || /*#__PURE__*/React__default.createElement(ParticipantsList, null))));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelSettingsUI.js.map
