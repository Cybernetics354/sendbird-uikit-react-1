import React__default, { useRef, useState, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-bdb56d81.js';
import Modal from '../../ui/Modal.js';
import Input, { InputLabel } from '../../ui/Input.js';
import Avatar from '../../ui/Avatar.js';
import { T as Type } from '../../index-1187996f.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-96f2ca18.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import { useOpenChannelSettingsContext } from '../context.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import 'prop-types';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../ui/Icon.js';
import '../../utils-d6f171ef.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-21b2a5db.js';
import '../../color-717a18f9.js';
import '../../utils-ce7905db.js';
import '../../UserProfileContext-7c91714e.js';
import '../../withSendbird.js';

var EditDetails = function (props) {
  var _a, _b;

  var onCancel = props.onCancel;
  var globalState = useSendbirdStateContext();
  var logger = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.logger;
  var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;

  var _c = useOpenChannelSettingsContext(),
      channel = _c.channel,
      onBeforeUpdateChannel = _c.onBeforeUpdateChannel,
      onChannelModified = _c.onChannelModified,
      setChannel = _c.setChannel;

  var inputRef = useRef(null);
  var formRef = useRef(null);
  var hiddenInputRef = useRef(null);

  var _d = useState(null),
      currentImg = _d[0],
      setCurrentImg = _d[1];

  var _e = useState(null),
      newFile = _e[0],
      setNewFile = _e[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  return /*#__PURE__*/React__default.createElement(Modal, {
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
    type: Type.PRIMARY
  }, /*#__PURE__*/React__default.createElement("form", {
    className: "channel-profile-form",
    ref: formRef,
    onSubmit: function (e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__img-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__avatar"
  }, currentImg ? /*#__PURE__*/React__default.createElement(Avatar, {
    height: "80px",
    width: "80px",
    src: currentImg
  }) : /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    theme: theme
  })), /*#__PURE__*/React__default.createElement("input", {
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
  }), /*#__PURE__*/React__default.createElement(TextButton, {
    className: "channel-profile-form__avatar-button",
    onClick: function () {
      return hiddenInputRef.current.click();
    },
    notUnderline: true
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: LabelColors.PRIMARY
  }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__name-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default.createElement(Input, {
    required: title !== '',
    name: "channel-profile-form__name",
    ref: inputRef,
    value: title,
    placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
  }))));
};

export { EditDetails as default };
//# sourceMappingURL=EditDetailsModal.js.map
