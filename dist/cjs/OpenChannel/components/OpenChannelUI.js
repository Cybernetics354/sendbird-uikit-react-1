'use strict';

var React = require('react');
var OpenChannel_context = require('../../OpenChannelProvider-869db398.js');
var OpenChannel_components_OpenChannelInput = require('./OpenChannelInput.js');
var OpenChannel_components_FrozenChannelNotification = require('./FrozenChannelNotification.js');
var OpenChannel_components_OpenChannelHeader = require('./OpenChannelHeader.js');
var ui_PlaceHolder = require('../../index-354a9223.js');
var OpenChannel_components_OpenChannelMessageList = require('./OpenChannelMessageList.js');
require('../../index-442b142d.js');
require('../../index-30aacb0e.js');
require('../../UserProfileContext-a3f3d44c.js');
require('prop-types');
require('../../tslib.es6-90bf9fc5.js');
require('../../compareIds-30eeee5f.js');
require('../../topics-efe1f803.js');
require('../../openChannel-2414f69c.js');
require('../../__bundle-ba710a09-5006ce8c.js');
require('../../uuid-04261033.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../LocalizationContext-b96a3e25.js');
require('../../stringSet-c701d85c.js');
require('../../ui/MessageInput.js');
require('../../const-4be69557.js');
require('../../const-13b2476d.js');
require('../../ui/IconButton.js');
require('../../index-86c744f1.js');
require('../../index-2777b3d9.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/Icon.js');
require('../../index-67d733e9.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Loader.js');
require('../../index-7929fe7e.js');
require('./OpenChannelMessage.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/ContextMenu.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../utils-8f0d7826.js');
require('../../utils-ad5299ea.js');
require('../../openChannelUtils-83cf72d0.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../color-bc0e6525.js');
require('../../ui/DateSeparator.js');
require('../../ui/FileViewer.js');
require('../../index-675dba65.js');
require('../../ui/Modal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_CLASS_NAME = 'sendbird-openchannel-conversation';

var OpenChannelUI = function (_a) {
  var renderMessage = _a.renderMessage,
      renderHeader = _a.renderHeader,
      renderInput = _a.renderInput,
      renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList,
      renderPlaceHolderError = _a.renderPlaceHolderError,
      renderPlaceHolderLoading = _a.renderPlaceHolderLoading;

  var _b = OpenChannel_context.useOpenChannelContext(),
      currentOpenChannel = _b.currentOpenChannel,
      amIBanned = _b.amIBanned,
      loading = _b.loading,
      isInvalid = _b.isInvalid,
      messageInputRef = _b.messageInputRef;

  if (!currentOpenChannel || !(currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.url) || amIBanned) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (loading) {
    return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.LOADING
    }));
  }

  if (isInvalid) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, (renderHeader === null || renderHeader === void 0 ? void 0 : renderHeader()) || /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelHeader, null), (currentOpenChannel === null || currentOpenChannel === void 0 ? void 0 : currentOpenChannel.isFrozen) && /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_FrozenChannelNotification, null), /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelMessageList, {
    renderMessage: renderMessage,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList
  }), (renderInput === null || renderInput === void 0 ? void 0 : renderInput()) || /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelInput, {
    ref: messageInputRef
  }));
};

module.exports = OpenChannelUI;
//# sourceMappingURL=OpenChannelUI.js.map
