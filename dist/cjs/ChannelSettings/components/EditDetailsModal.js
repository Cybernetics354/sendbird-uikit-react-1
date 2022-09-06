'use strict';

var React = require('react');
var ChannelSettings_context = require('../context.js');
var LocalizationContext = require('../../LocalizationContext-ea1242a7.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Modal = require('../../ui/Modal.js');
var ui_Input = require('../../ui/Input.js');
var ui_Avatar = require('../../ui/Avatar.js');
var ui_Button = require('../../index-51cd7ad2.js');
var ui_Label = require('../../index-2dfdb9de.js');
var ui_TextButton = require('../../ui/TextButton.js');
var ui_ChannelAvatar = require('../../ui/ChannelAvatar.js');
var uuid = require('../../uuid-d427ce45.js');
require('../../UserProfileContext-24790fe2.js');
require('prop-types');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../utils-ae4d63e2.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../ui/ImageRenderer.js');
require('../../color-35fbd517.js');
require('../../utils-0e1ac091.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var EditDetails = function (props) {
  var _a, _b, _c;

  var onSubmit = props.onSubmit,
      onCancel = props.onCancel;

  var _d = ChannelSettings_context.useChannelSettingsContext(),
      channel = _d.channel,
      onChannelModified = _d.onChannelModified,
      onBeforeUpdateChannel = _d.onBeforeUpdateChannel,
      setChannelUpdateId = _d.setChannelUpdateId;

  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  var state = useSendbirdStateContext();
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
  var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
  var inputRef = React.useRef(null);
  var formRef = React.useRef(null);
  var hiddenInputRef = React.useRef(null);

  var _e = React.useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

  var _f = React.useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
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
      logger.info('ChannelSettings: Channel information being updated', {
        currentTitle: currentTitle,
        currentImg: currentImg
      });

      if (onBeforeUpdateChannel) {
        logger.info('ChannelSettings: onBeforeUpdateChannel');
        var params = onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
        channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (groupChannel) {
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuid.uuidv4());
          onSubmit();
        });
      } else {
        logger.info('ChannelSettings: normal');
        channel === null || channel === void 0 ? void 0 : channel.updateChannel({
          coverImage: currentImg,
          name: currentTitle,
          data: (channel === null || channel === void 0 ? void 0 : channel.data) || ''
        }).then(function (groupChannel) {
          logger.info('ChannelSettings: Channel information updated', groupChannel);
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuid.uuidv4());
          onSubmit();
        });
      }
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
  }) : /*#__PURE__*/React__default["default"].createElement(ui_ChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    userId: userId,
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
