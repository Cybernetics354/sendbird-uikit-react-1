import React__default, { useContext } from 'react';
import { getSdk } from '../../sendbirdSelectors.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { u as useCreateChannelContext, a as CHANNEL_TYPE } from '../../CreateChannelProvider-c5e9269f.js';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-ed7103e1.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Modal from '../../ui/Modal.js';
import '../../topics-fc458762.js';
import '../../utils-c830dbcc.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import 'prop-types';
import 'react-dom';
import '../../index-bf6cbc46.js';
import '../../ui/IconButton.js';
import '../../index-28e59bab.js';

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
