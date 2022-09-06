'use strict';

var React = require('react');
var index = require('../../index-c173eafb.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_PlaceHolder = require('../../index-2b606866.js');
var OpenChannel_context = require('../../OpenChannelProvider-830b8e4c.js');
var OpenChannel_components_OpenChannelMessage = require('./OpenChannelMessage.js');
require('../../index-09c690af.js');
require('../../index-10f7dd53.js');
require('prop-types');
require('../../ui/Loader.js');
require('../../LocalizationContext-ea1242a7.js');
require('../../stringSet-c8c286da.js');
require('../../index-2dfdb9de.js');
require('../../UserProfileContext-24790fe2.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../compareIds-9caf1355.js');
require('../../topics-9b308b83.js');
require('../../openChannel-d0283ff1.js');
require('../../__bundle-ba710a09-af5d7380.js');
require('../../uuid-d427ce45.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../ui/OpenchannelUserMessage.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../ui/ContextMenu.js');
require('../../index-6292ff33.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../ui/IconButton.js');
require('../../ui/UserProfile.js');
require('../../sendbirdSelectors.js');
require('../../utils-ae4d63e2.js');
require('../../index-51cd7ad2.js');
require('../../utils-31fb5def.js');
require('../../openChannelUtils-0447ba44.js');
require('../../ui/OpenChannelAdminMessage.js');
require('../../ui/OpenchannelOGMessage.js');
require('../../ui/LinkLabel.js');
require('../../ui/OpenchannelThumbnailMessage.js');
require('../../ui/OpenchannelFileMessage.js');
require('../../ui/TextButton.js');
require('../../color-35fbd517.js');
require('../../ui/DateSeparator.js');
require('../../ui/MessageInput.js');
require('../../const-295db437.js');
require('../../const-a4d49809.js');
require('../../ui/MentionUserLabel.js');
require('../../ui/FileViewer.js');
require('../../index-77afdf6b.js');
require('../../ui/Modal.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenchannelMessageList(props, ref) {
  var _a;

  var _b = OpenChannel_context.useOpenChannelContext(),
      _c = _b.isMessageGroupingEnabled,
      isMessageGroupingEnabled = _c === void 0 ? true : _c,
      allMessages = _b.allMessages,
      hasMore = _b.hasMore,
      onScroll = _b.onScroll;

  var scrollRef = ref || React.useRef(null);

  var _d = React.useState(false),
      showScrollDownButton = _d[0],
      setShowScrollDownButton = _d[1];

  var handleOnScroll = function (e) {
    var element = e.target;
    var scrollTop = element.scrollTop,
        scrollHeight = element.scrollHeight,
        clientHeight = element.clientHeight;

    if (scrollHeight > scrollTop + clientHeight + 1) {
      setShowScrollDownButton(true);
    } else {
      setShowScrollDownButton(false);
    }

    if (!hasMore) {
      return;
    }

    if (scrollTop === 0) {
      var nodes = scrollRef.current.querySelectorAll('.sendbird-msg--scroll-ref');
      var first_1 = nodes && nodes[0];
      onScroll(function () {
        try {
          first_1.scrollIntoView();
        } catch (error) {}
      });
    }
  };

  var scrollToBottom = function () {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo(0, scrollRef.current.scrollHeight);
      setShowScrollDownButton(false);
    }
  };

  var hasMessage = React.useMemo(function () {
    return allMessages.length > 0;
  }, [allMessages.length]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__padding"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: ['sendbird-openchannel-conversation-scroll__container__item-container', hasMessage ? '' : 'no-messages'].join(' '),
    onScroll: handleOnScroll,
    ref: scrollRef
  }, hasMessage ? allMessages.map(function (message, index$1) {
    var previousMessage = allMessages[index$1 - 1];
    var nextMessage = allMessages[index$1 - 1];
    var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
    var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

    var hasSeparator = !(previousMessageCreatedAt && index.isSameDay(currentCreatedAt, previousMessageCreatedAt));

    var _a = isMessageGroupingEnabled ? OpenChannel_context.compareMessagesForGrouping(previousMessage, message, nextMessage) : [false, false],
        chainTop = _a[0],
        chainBottom = _a[1];

    return /*#__PURE__*/React__default["default"].createElement(OpenChannel_components_OpenChannelMessage, {
      key: (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId),
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom,
      hasSeparator: hasSeparator,
      renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage
    });
  }) : ((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    className: "sendbird-openchannel-conversation-scroll__container__place-holder",
    type: ui_PlaceHolder.PlaceHolderTypes.NO_MESSAGES
  }))), showScrollDownButton && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
    onClick: scrollToBottom,
    onKeyDown: scrollToBottom,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    width: "24px",
    height: "24px",
    type: ui_Icon.IconTypes.CHEVRON_DOWN,
    fillColor: ui_Icon.IconColors.CONTENT
  })));
}

var OpenChannelMessageList = /*#__PURE__*/React__default["default"].forwardRef(OpenchannelMessageList);

module.exports = OpenChannelMessageList;
//# sourceMappingURL=OpenChannelMessageList.js.map
