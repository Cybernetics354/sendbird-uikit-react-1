import React__default, { useContext } from 'react';
import { getSdk } from '../../sendbirdSelectors.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useCreateChannelContext, a as CHANNEL_TYPE } from '../../CreateChannelProvider-4ce233f3.js';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-a401bc58.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Modal from '../../ui/Modal.js';
import '../../topics-f928ee3e.js';
import '../../utils-c794f866.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import 'prop-types';
import 'react-dom';
import '../../index-e56e31b3.js';
import '../../ui/IconButton.js';
import '../../index-b422234e.js';

var isBroadcastChannelEnabled = function (sdk) {
  var _a;

  var ALLOW_BROADCAST_CHANNEL = 'allow_broadcast_channel';
  var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_BROADCAST_CHANNEL);
  }

  return false;
};
var isSuperGroupChannelEnabled = function (sdk) {
  var _a;

  var ALLOW_SUPER_GROUP_CHANNEL = 'allow_super_group_channel';
  var applicationAttributes = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.applicationAttributes;

  if (Array.isArray(applicationAttributes)) {
    return applicationAttributes.includes(ALLOW_SUPER_GROUP_CHANNEL);
  }

  return false;
};

var SelectChannelType = function (props) {
  var onCancel = props.onCancel;
  var store = useSendbirdStateContext();
  var sdk = getSdk(store);
  var createChannelProps = useCreateChannelContext();
  var setStep = createChannelProps.setStep,
      setType = createChannelProps.setType;
  var stringSet = useContext(LocalizationContext).stringSet;
  var isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
  var isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);
  return /*#__PURE__*/React__default.createElement(Modal, {
    titleText: stringSet === null || stringSet === void 0 ? void 0 : stringSet.MODAL__CREATE_CHANNEL__TITLE,
    hideFooter: true,
    onCancel: function () {
      onCancel();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-add-channel__rectangle-wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CHANNEL_TYPE.GROUP);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CHANNEL_TYPE.GROUP);
      setStep(1);
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-add-channel__rectangle__chat-icon",
    type: IconTypes.CHAT,
    fillColor: IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__GROUP)), isSupergroupAvailable && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CHANNEL_TYPE.SUPERGROUP);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CHANNEL_TYPE.SUPERGROUP);
      setStep(1);
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-add-channel__rectangle__supergroup-icon",
    type: IconTypes.SUPERGROUP,
    fillColor: IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__SUPER)), isBroadcastAvailable && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CHANNEL_TYPE.BROADCAST);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CHANNEL_TYPE.BROADCAST);
      setStep(1);
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-add-channel__rectangle__broadcast-icon",
    type: IconTypes.BROADCAST,
    fillColor: IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__BROADCAST))));
};

export { SelectChannelType as default };
//# sourceMappingURL=SelectChannelType.js.map
