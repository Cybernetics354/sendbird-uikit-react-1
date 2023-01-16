import React__default from 'react';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-2951d70b.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-fc9ccd03.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../index-6e7e7eaa.js';
import '../../index-8d5e2563.js';
import '../../UserProfileContext-7c91714e.js';
import 'prop-types';
import '../../tslib.es6-6b1ce61a.js';
import '../../compareIds-14392765.js';
import '../../topics-e87f2985.js';
import '../../openChannel-64614117.js';
import '../../__bundle-ba710a09-e080d3fa.js';
import '../../uuid-21b2a5db.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../LocalizationContext-bdb56d81.js';
import '../../stringSet-1cad1dbf.js';
import '../../ui/MessageInput.js';
import '../../const-f5c14b82.js';
import '../../const-1cfee98a.js';
import '../../ui/IconButton.js';
import '../../index-1187996f.js';
import '../../index-96f2ca18.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-f2c869d7.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../index-7183b40a.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-d6f171ef.js';
import '../../utils-698a3c6a.js';
import '../../openChannelUtils-54e03a56.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-717a18f9.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../index-deb6aab1.js';
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
