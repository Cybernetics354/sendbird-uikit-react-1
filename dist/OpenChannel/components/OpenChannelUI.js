import React__default from 'react';
import { u as useOpenChannelContext } from '../../OpenChannelProvider-c3332d15.js';
import OpenChannelInput from './OpenChannelInput.js';
import FrozenNotification from './FrozenChannelNotification.js';
import OpenchannelConversationHeader from './OpenChannelHeader.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-005a14f3.js';
import OpenChannelMessageList from './OpenChannelMessageList.js';
import '../../index-35d9a787.js';
import '../../index-a53c3ed1.js';
import '../../UserProfileContext-153af432.js';
import 'prop-types';
import '../../tslib.es6-4a4f5c58.js';
import '../../compareIds-6991be9c.js';
import '../../topics-480e2d9e.js';
import '../../openChannel-f30b9999.js';
import '../../__bundle-ba710a09-7de40396.js';
import '../../uuid-91011cda.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../LocalizationContext-d3e49456.js';
import '../../stringSet-49030004.js';
import '../../ui/MessageInput.js';
import '../../const-e626a5c7.js';
import '../../const-f8fb2a4c.js';
import '../../ui/IconButton.js';
import '../../index-d880236d.js';
import '../../index-53585fab.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/Icon.js';
import '../../index-fcb040ec.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Loader.js';
import '../../index-72d0c1dd.js';
import './OpenChannelMessage.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-87c63da6.js';
import '../../utils-62d358b3.js';
import '../../openChannelUtils-c29ded89.js';
import '../../ui/OpenChannelAdminMessage.js';
import '../../ui/OpenchannelOGMessage.js';
import '../../ui/LinkLabel.js';
import '../../ui/OpenchannelThumbnailMessage.js';
import '../../ui/OpenchannelFileMessage.js';
import '../../ui/TextButton.js';
import '../../color-ea1c9845.js';
import '../../ui/DateSeparator.js';
import '../../ui/FileViewer.js';
import '../../index-6bfe08d8.js';
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
