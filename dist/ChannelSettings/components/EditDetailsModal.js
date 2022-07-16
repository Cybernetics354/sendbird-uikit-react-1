import React__default, { useRef, useState, useContext } from 'react';
import { useChannelSettingsContext } from '../context.js';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import Modal from '../../ui/Modal.js';
import Input, { InputLabel } from '../../ui/Input.js';
import Avatar from '../../ui/Avatar.js';
import { T as Type } from '../../index-fc0130a5.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-d9ca04bb.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/ChannelAvatar.js';
import { u as uuidv4 } from '../../uuid-ffa79983.js';
import '../../UserProfileContext-0d690a96.js';
import 'prop-types';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import 'react-dom';
import '../../index-ec60ce57.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../utils-1fc25d9a.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../ui/ImageRenderer.js';
import '../../color-395a9ce9.js';
import '../../utils-c1646812.js';

var EditDetails = function (props) {
  var _a, _b, _c;

  var onSubmit = props.onSubmit,
      onCancel = props.onCancel;

  var _d = useChannelSettingsContext(),
      channel = _d.channel,
      onChannelModified = _d.onChannelModified,
      onBeforeUpdateChannel = _d.onBeforeUpdateChannel,
      setChannelUpdateId = _d.setChannelUpdateId;

  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  var state = useSendbirdStateContext();
  var userId = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.userId;
  var theme = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.theme;
  var logger = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.logger;
  var inputRef = useRef(null);
  var formRef = useRef(null);
  var hiddenInputRef = useRef(null);

  var _e = useState(null),
      currentImg = _e[0],
      setCurrentImg = _e[1];

  var _f = useState(null),
      newFile = _f[0],
      setNewFile = _f[1];

  var stringSet = useContext(LocalizationContext).stringSet;
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
      logger.info('ChannelSettings: Channel information being updated', {
        currentTitle: currentTitle,
        currentImg: currentImg
      });

      if (onBeforeUpdateChannel) {
        logger.info('ChannelSettings: onBeforeUpdateChannel');
        var params = onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
        channel === null || channel === void 0 ? void 0 : channel.updateChannel(params).then(function (groupChannel) {
          onChannelModified === null || onChannelModified === void 0 ? void 0 : onChannelModified(groupChannel);
          setChannelUpdateId(uuidv4());
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
          setChannelUpdateId(uuidv4());
          onSubmit();
        });
      }
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
    userId: userId,
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
