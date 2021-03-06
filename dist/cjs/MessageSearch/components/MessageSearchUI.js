'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var MessageSearch_context = require('../context.js');
var ui_MessageSearchItem = require('../../ui/MessageSearchItem.js');
var ui_PlaceHolder = require('../../index-354a9223.js');
var ui_MessageSearchFileItem = require('../../ui/MessageSearchFileItem.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../index-442b142d.js');
require('../../index-4d90133e.js');
require('../../index-7929fe7e.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('prop-types');
require('../../ui/Icon.js');
require('../../uuid-04261033.js');
require('../../index-2777b3d9.js');
require('../../ui/Loader.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_CLASS_NAME = 'sendbird-message-search';
var MessageSearchUI = function (_a) {
  var renderPlaceHolderError = _a.renderPlaceHolderError,
      renderPlaceHolderLoading = _a.renderPlaceHolderLoading,
      renderPlaceHolderNoString = _a.renderPlaceHolderNoString,
      renderPlaceHolderEmptyList = _a.renderPlaceHolderEmptyList,
      renderSearchItem = _a.renderSearchItem;

  var _b = MessageSearch_context.useMessageSearchContext(),
      isInvalid = _b.isInvalid,
      searchString = _b.searchString,
      requestString = _b.requestString,
      currentChannel = _b.currentChannel,
      retryCount = _b.retryCount,
      setRetryCount = _b.setRetryCount,
      loading = _b.loading,
      scrollRef = _b.scrollRef,
      hasMoreResult = _b.hasMoreResult,
      onScroll = _b.onScroll,
      allMessages = _b.allMessages,
      onResultClick = _b.onResultClick,
      selectedMessageId = _b.selectedMessageId,
      setSelectedMessageId = _b.setSelectedMessageId;

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var handleRetryToConnect = function () {
    setRetryCount(retryCount + 1);
  };

  var handleOnScroll = function (e) {
    var scrollElement = e.target;
    var scrollTop = scrollElement.scrollTop,
        scrollHeight = scrollElement.scrollHeight,
        clientHeight = scrollElement.clientHeight;

    if (!hasMoreResult) {
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      onScroll(function () {// after load more searched messages
      });
    }
  };

  var getChannelName = function () {
    if (currentChannel && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) && (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) !== 'Group Channel') {
      return currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name;
    }

    if (currentChannel && ((currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name) === 'Group Channel' || !(currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.name))) {
      return currentChannel.members.map(function (member) {
        return member.nickname || stringSet.NO_NAME;
      }).join(', ');
    }

    return stringSet.NO_TITLE;
  };

  if (isInvalid && searchString && requestString) {
    return (renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG,
      retryToConnect: handleRetryToConnect
    }));
  }

  if (loading && searchString && requestString) {
    return (renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.SEARCHING
    }));
  }

  if (!searchString) {
    return (renderPlaceHolderNoString === null || renderPlaceHolderNoString === void 0 ? void 0 : renderPlaceHolderNoString()) || /*#__PURE__*/React__default["default"].createElement("div", {
      className: COMPONENT_CLASS_NAME
    }, /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.SEARCH_IN,
      searchInString: getChannelName()
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: COMPONENT_CLASS_NAME,
    onScroll: handleOnScroll,
    ref: scrollRef
  }, allMessages.length > 0 ? allMessages.map(function (message) {
    if (renderSearchItem) {
      return renderSearchItem({
        message: message,
        onResultClick: onResultClick
      });
    }

    if (message.messageType === 'file') {
      return /*#__PURE__*/React__default["default"].createElement(ui_MessageSearchFileItem, {
        className: "".concat(COMPONENT_CLASS_NAME, "__message-search-item"),
        message: message,
        key: message.messageId,
        selected: selectedMessageId === message.messageId,
        onClick: function () {
          onResultClick(message);
          setSelectedMessageId(message.messageId);
        }
      });
    }

    return /*#__PURE__*/React__default["default"].createElement(ui_MessageSearchItem, {
      className: "".concat(COMPONENT_CLASS_NAME, "__message-search-item"),
      message: message,
      key: message.messageId,
      selected: selectedMessageId === message.messageId,
      onClick: function () {
        onResultClick(message);
        setSelectedMessageId(message.messageId);
      }
    });
  }) : (renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.NO_RESULTS
  }));
};

exports.MessageSearchUI = MessageSearchUI;
exports["default"] = MessageSearchUI;
//# sourceMappingURL=MessageSearchUI.js.map
