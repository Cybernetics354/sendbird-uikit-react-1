'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-7124ef76.js');
var ui_Modal = require('../../ui/Modal.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Button = require('../../index-c5f391d0.js');
var ui_Label = require('../../index-9ad5c786.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_OpenChannelAvatar = require('../../ui/OpenChannelAvatar.js');
var OpenChannelSettings_context = require('../context.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
require('../../stringSet-ca0cf06e.js');
require('../../index-80df9998.js');
require('prop-types');
require('react-dom');
require('../../index-74e1c32a.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-d0fefa20.js');
require('../../ui/Icon.js');
require('../../utils-d6de0e43.js');
require('../../tslib.es6-87d8a6c3.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-cfc8429e.js');
require('../../color-670a89e1.js');
require('../../utils-2d9307d2.js');
require('../../UserProfileContext-4574eaff.js');
require('../../withSendbird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditDetails = function (props) {
  var _a, _b;

  var onCancel = props.onCancel;
  var globalState = useSendbirdStateContext();
  var logger = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.logger;
  var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;

  var _c = OpenChannelSettings_context.useOpenChannelSettingsContext(),
      channel = _c.channel,
      onBeforeUpdateChannel = _c.onBeforeUpdateChannel,
      onChannelModified = _c.onChannelModified,
      setChannel = _c.setChannel;

  var inputRef = React.useRef(null);
  var formRef = React.useRef(null);
  var hiddenInputRef = React.useRef(null);

  var _d = React.useState(null),
      currentImg = _d[0],
      setCurrentImg = _d[1];

  var _e = React.useState(null),
      newFile = _e[0],
      setNewFile = _e[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
    titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE,
    submitText: stringSet.BUTTON__SAVE,
    onCancel: onCancel,
    onSubmit: function () {
      if (title !== '' && !inputRef.current.value) {
        if (formRef.current.reportValidity) {
          // might not work in explorer
          formRef.current.reportValidity();
        }

        return;
      }

      var currentTitle = inputRef.current.value;
      var currentImg = newFile;
      logger.info('ChannelSettings: Channel information being updated');
      var params = onBeforeUpdateChannel ? onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data) : {
        name: currentTitle,
        coverUrlOrImage: currentImg,
        data: channel === null || channel === void 0 ? void 0 : channel.data
      };
      logger.info('ChannelSettings: Updating channel information', params);
      channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (updateChannel) {
        logger.info('ChannelSettings: Channel information update succeeded', updateChannel);
        onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(updateChannel);
        setChannel(updateChannel);
      }).catch(function (error) {
        logger.error('ChannelSettings: Channel infomation update failed', error);
        setChannel(null);
      });
      onCancel();
    },
    type: ui_Button.Type.PRIMARY
  }, /*#__PURE__*/React__default["default"].createElement("form", {
    className: "channel-profile-form",
    ref: formRef,
    onSubmit: function (e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__img-section"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__avatar"
  }, currentImg ? /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    height: "80px",
    width: "80px",
    src: currentImg
  }) : /*#__PURE__*/React__default["default"].createElement(ui_OpenChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    theme: theme
  })), /*#__PURE__*/React__default["default"].createElement("input", {
    ref: hiddenInputRef,
    type: "file",
    accept: "image/gif, image/jpeg, image/png",
    style: {
      display: 'none'
    },
    onChange: function (e) {
      setCurrentImg(URL.createObjectURL(e.target.files[0]));
      setNewFile(e.target.files[0]);
      hiddenInputRef.current.value = '';
    }
  }), /*#__PURE__*/React__default["default"].createElement(ui_TextButton, {
    className: "channel-profile-form__avatar-button",
    onClick: function () {
      return hiddenInputRef.current.click();
    },
    notUnderline: true
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.BUTTON_1,
    color: ui_Label.LabelColors.PRIMARY
  }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "channel-profile-form__name-section"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Input.InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default["default"].createElement(ui_Input["default"], {
    required: title !== '',
    name: "channel-profile-form__name",
    ref: inputRef,
    value: title,
    placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
  }))));
};

module.exports = EditDetails;
//# sourceMappingURL=EditDetailsModal.js.map
