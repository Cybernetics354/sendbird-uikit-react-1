'use strict';

var React = require('react');
var sendbirdSelectors = require('../../sendbirdSelectors.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var CreateChannel_context = require('../../CreateChannelProvider-f0c58d70.js');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var ui_Label = require('../../index-2777b3d9.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Modal = require('../../ui/Modal.js');
require('../../topics-efe1f803.js');
require('../../utils-8f0d7826.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('prop-types');
require('react-dom');
require('../../index-675dba65.js');
require('../../ui/IconButton.js');
require('../../index-86c744f1.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  var sdk = sendbirdSelectors.getSdk(store);
  var createChannelProps = CreateChannel_context.useCreateChannelContext();
  var setStep = createChannelProps.setStep,
      setType = createChannelProps.setType;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var isBroadcastAvailable = isBroadcastChannelEnabled(sdk);
  var isSupergroupAvailable = isSuperGroupChannelEnabled(sdk);
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    titleText: stringSet === null || stringSet === void 0 ? void 0 : stringSet.MODAL__CREATE_CHANNEL__TITLE,
    hideFooter: true,
    onCancel: function () {
      onCancel();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle-wrap"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.GROUP);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.GROUP);
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-add-channel__rectangle__chat-icon",
    type: ui_Icon.IconTypes.CHAT,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__GROUP)), isSupergroupAvailable && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.SUPERGROUP);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.SUPERGROUP);
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-add-channel__rectangle__supergroup-icon",
    type: ui_Icon.IconTypes.SUPERGROUP,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__SUPER)), isBroadcastAvailable && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-add-channel__rectangle",
    onClick: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.BROADCAST);
      setStep(1);
    },
    role: "button",
    tabIndex: 0,
    onKeyDown: function () {
      setType(CreateChannel_context.CHANNEL_TYPE.BROADCAST);
      setStep(1);
    }
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-add-channel__rectangle__broadcast-icon",
    type: ui_Icon.IconTypes.BROADCAST,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "28px",
    height: "28px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.MODAL__CREATE_CHANNEL__BROADCAST))));
};

module.exports = SelectChannelType;
//# sourceMappingURL=SelectChannelType.js.map
