import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../index-567adb28.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-92e8a1d4.js';
import { u as useOpenChannelContext, c as compareMessagesForGrouping } from '../../OpenChannelProvider-a6e62fa0.js';
import MessagOpenChannelMessageeHoc from './OpenChannelMessage.js';
import '../../index-2133a7e3.js';
import '../../index-527c3bc4.js';
import 'prop-types';
import '../../ui/Loader.js';
import '../../LocalizationContext-6dc0d190.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-ed7103e1.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../compareIds-92f2c773.js';
import '../../topics-fc458762.js';
import '../../openChannel-1ee60e13.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../uuid-4b033040.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../index-bb395be0.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/IconButton.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-c830dbcc.js';
import '../../index-28e59bab.js';
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
import '../../ui/MessageInput.js';
import '../../const-79bcca88.js';
import '../../const-b8ee874a.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/FileViewer.js';
import '../../index-bf6cbc46.js';
import '../../ui/Modal.js';

function OpenchannelMessageList(props, ref) {
  var _a;

  var _b = useOpenChannelContext(),
      _c = _b.isMessageGroupingEnabled,
      isMessageGroupingEnabled = _c === void 0 ? true : _c,
      allMessages = _b.allMessages,
      hasMore = _b.hasMore,
      onScroll = _b.onScroll;

  var scrollRef = ref || useRef(null);

  var _d = useState(false),
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

  var hasMessage = useMemo(function () {
    return allMessages.length > 0;
  }, [allMessages.length]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__padding"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-openchannel-conversation-scroll__container__item-container', hasMessage ? '' : 'no-messages'].join(' '),
    onScroll: handleOnScroll,
    ref: scrollRef
  }, hasMessage ? allMessages.map(function (message, index) {
    var previousMessage = allMessages[index - 1];
    var nextMessage = allMessages[index - 1];
    var previousMessageCreatedAt = previousMessage && previousMessage.createdAt;
    var currentCreatedAt = message.createdAt; // https://stackoverflow.com/a/41855608

    var hasSeparator = !(previousMessageCreatedAt && isSameDay(currentCreatedAt, previousMessageCreatedAt));

    var _a = isMessageGroupingEnabled ? compareMessagesForGrouping(previousMessage, message, nextMessage) : [false, false],
        chainTop = _a[0],
        chainBottom = _a[1];

    return /*#__PURE__*/React__default.createElement(MessagOpenChannelMessageeHoc, {
      key: (message === null || message === void 0 ? void 0 : message.messageId) || (message === null || message === void 0 ? void 0 : message.reqId),
      message: message,
      chainTop: chainTop,
      chainBottom: chainBottom,
      hasSeparator: hasSeparator,
      renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage
    });
  }) : ((_a = props === null || props === void 0 ? void 0 : props.renderPlaceHolderEmptyList) === null || _a === void 0 ? void 0 : _a.call(props)) || /*#__PURE__*/React__default.createElement(PlaceHolder, {
    className: "sendbird-openchannel-conversation-scroll__container__place-holder",
    type: PlaceHolderTypes.NO_MESSAGES
  }))), showScrollDownButton && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-openchannel-conversation-scroll__container__scroll-bottom-button",
    onClick: scrollToBottom,
    onKeyDown: scrollToBottom,
    tabIndex: 0,
    role: "button"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    width: "24px",
    height: "24px",
    type: IconTypes.CHEVRON_DOWN,
    fillColor: IconColors.CONTENT
  })));
}

var OpenChannelMessageList = /*#__PURE__*/React__default.forwardRef(OpenchannelMessageList);

export { OpenChannelMessageList as default };
//# sourceMappingURL=OpenChannelMessageList.js.map
