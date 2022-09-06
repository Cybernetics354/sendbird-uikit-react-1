import React__default from 'react';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-c7299a1f.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-1acd5943.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../index-0daadd03.js';
import '../../index-e851fa9b.js';
import '../../UserProfileContext-9e885899.js';
import 'prop-types';
import '../../tslib.es6-1d5f2fa9.js';
import '../../compareIds-a43728b9.js';
import '../../topics-f928ee3e.js';
import '../../openChannel-5082ff44.js';
import '../../__bundle-ba710a09-60e8438d.js';
import '../../uuid-6e50e4c4.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../LocalizationContext-e63b92dd.js';
import '../../stringSet-e139b667.js';
import '../../ui/MessageInput.js';
import '../../const-249ebbab.js';
import '../../const-92587921.js';
import '../../ui/IconButton.js';
import '../../index-b422234e.js';
import '../../index-a401bc58.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-ee45e5fc.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../index-43893ec1.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-c794f866.js';
import '../../utils-c19598c1.js';
import '../../openChannelUtils-ec928990.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-105e93f7.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../index-e56e31b3.js';
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
