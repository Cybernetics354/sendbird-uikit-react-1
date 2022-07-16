import React__default from 'react';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-a6e62fa0.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-92e8a1d4.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../index-2133a7e3.js';
import '../../index-527c3bc4.js';
import '../../UserProfileContext-c84a4f87.js';
import 'prop-types';
import '../../tslib.es6-bdfb18b0.js';
import '../../compareIds-92f2c773.js';
import '../../topics-fc458762.js';
import '../../openChannel-1ee60e13.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../uuid-4b033040.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../LocalizationContext-6dc0d190.js';
import '../../stringSet-acf9d2a1.js';
import '../../ui/MessageInput.js';
import '../../const-79bcca88.js';
import '../../const-b8ee874a.js';
import '../../ui/IconButton.js';
import '../../index-28e59bab.js';
import '../../index-ed7103e1.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-bb395be0.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../index-567adb28.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-c830dbcc.js';
import '../../utils-40f3dba3.js';
import '../../openChannelUtils-6de2dcb3.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-9d1ce766.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../index-bf6cbc46.js';
import '../../ui/Modal.js';

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';

var OpenChannelUI = function (_a) {
  var renderMessage = _a.renderMessage,
      renderHeader = _a.renderHeader,
      renderInput = _a.renderInput,
      renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList,
      renderPlaceHolderError = _a.renderPlaceHolderError,
      renderPlaceHolderLoading = _a.renderPlaceHolderLoading;

  var _b = useOpenChannelContext(),
      currentOpenChannel = _b.currentOpenChannel,
      amIBanned = _b.amIBanned,
      loading = _b.loading,
      isInvalid = _b.isInvalid,
      messageInputRef = _b.messageInputRef;

  if (!currentOpenChannel || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url) || amIBanned) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (loading) {
    return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.LOADING
    }));
  }

  if (isInvalid) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default.createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default.createElement(PlaceHolder, {
      type: PlaceHolderTypes.WRONG
    }));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || /*#__PURE__*/React__default.createElement(OpenchannelConversationHeader, null), (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && /*#__PURE__*/React__default.createElement(FrozenNotification, null), /*#__PURE__*/React__default.createElement(OpenChannelMessageList, {
    renderMessage: renderMessage,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList
  }), (renderInput === null || renderInput === void 0 ? void 0 : renderInput()) || /*#__PURE__*/React__default.createElement(OpenChannelInput, {
    ref: messageInputRef
  }));
};

export { OpenChannelUI as default };
//# sourceMappingURL=OpenChannelUI.js.map
