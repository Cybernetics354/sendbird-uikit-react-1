import React__default, { useRef, useState, useMemo } from 'react';
import { i as isSameDay } from '../../index-72d0c1dd.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-005a14f3.js';
import { u as useOpenChannelContext, c as compareMessagesForGrouping } from '../../OpenChannelProvider-c3332d15.js';
import MessagOpenChannelMessageeHoc from './OpenChannelMessage.js';
import '../../index-35d9a787.js';
import '../../index-a53c3ed1.js';
import 'prop-types';
import '../../ui/Loader.js';
import '../../LocalizationContext-d3e49456.js';
import '../../stringSet-49030004.js';
import '../../index-53585fab.js';
import '../../UserProfileContext-153af432.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../compareIds-6991be9c.js';
import '../../topics-480e2d9e.js';
import '../../openChannel-f30b9999.js';
import '../../__bundle-ba710a09-7de40396.js';
import '../../uuid-91011cda.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../ui/OpenchannelUserMessage.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../ui/ContextMenu.js';
import '../../index-fcb040ec.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/IconButton.js';
import '../../ui/UserProfile.js';
import '../../sendbirdSelectors.js';
import '../../utils-87c63da6.js';
import '../../index-d880236d.js';
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
import '../../ui/MessageInput.js';
import '../../const-e626a5c7.js';
import '../../const-f8fb2a4c.js';
import '../../ui/MentionUserLabel.js';
import '../../ui/FileViewer.js';
import '../../index-6bfe08d8.js';
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
