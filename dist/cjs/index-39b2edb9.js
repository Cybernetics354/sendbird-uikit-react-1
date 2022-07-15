'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var SendbirdProvider = require('./SendbirdProvider.js');
var ChannelList = require('./ChannelList.js');
var Channel_context = require('./ChannelProvider-e0e2dc55.js');
var useSendbirdStateContext = require('./useSendbirdStateContext.js');
var ui_PlaceHolder = require('./index-8fc3f327.js');
var ui_ConnectionStatus = require('./ui/ConnectionStatus.js');
var Channel_components_ChannelHeader = require('./Channel/components/ChannelHeader.js');
var Channel_components_MessageList = require('./Channel/components/MessageList.js');
var Channel_components_TypingIndicator = require('./Channel/components/TypingIndicator.js');
var Channel_components_FrozenNotification = require('./Channel/components/FrozenNotification.js');
var Channel_components_UnreadCount = require('./Channel/components/UnreadCount.js');
var tslib_es6 = require('./tslib.es6-ca286580.js');
var ui_MessageInput = require('./ui/MessageInput.js');
var ui_QuoteMessageInput = require('./ui/QuoteMessageInput.js');
var LocalizationContext = require('./LocalizationContext-44ed70a4.js');
var Channel_components_SuggestedMentionList = require('./Channel/components/SuggestedMentionList.js');
var _const = require('./const-e72bf9c1.js');
var ChannelSettings = require('./ChannelSettings.js');
var MessageSearch = require('./MessageSearch.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var MessageInputWrapper = function () {
  var _a = Channel_context.useChannelContext(),
      currentGroupChannel = _a.currentGroupChannel,
      initialized = _a.initialized,
      quoteMessage = _a.quoteMessage,
      sendMessage = _a.sendMessage;
      _a.sendFileMessage;
      var setQuoteMessage = _a.setQuoteMessage,
      messageInputRef = _a.messageInputRef,
      renderUserMentionItem = _a.renderUserMentionItem;

  var globalStore = useSendbirdStateContext();
  var channel = currentGroupChannel;

  var _b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config,
      isOnline = _b.isOnline,
      isMentionEnabled = _b.isMentionEnabled,
      userMention = _b.userMention;

  var maxUserMentionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxMentionCount) || 10;
  var maxUserSuggestionCount = (userMention === null || userMention === void 0 ? void 0 : userMention.maxSuggestionCount) || 15;
  React.useContext(FileInputContext);
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _c = React.useState(''),
      mentionNickname = _c[0],
      setMentionNickname = _c[1];

  var _d = React.useState([]),
      mentionedUsers = _d[0],
      setMentionedUsers = _d[1];

  var _e = React.useState([]),
      mentionedUserIds = _e[0],
      setMentionedUserIds = _e[1];

  var _f = React.useState(null),
      selectedUser = _f[0],
      setSelectedUser = _f[1];

  var _g = React.useState([]),
      mentionSuggestedUsers = _g[0],
      setMentionSuggestedUsers = _g[1];

  var _h = React.useState(true),
      ableMention = _h[0],
      setAbleMention = _h[1];

  var _j = React.useState(null),
      messageInputEvent = _j[0],
      setMessageInputEvent = _j[1];

  var disabled = !initialized || Channel_context.isDisabledBecauseFrozen(channel) || Channel_context.isDisabledBecauseMuted(channel) || !isOnline;
  var isOperator = Channel_context.isOperator(channel);
  var isBroadcast = channel === null || channel === void 0 ? void 0 : channel.isBroadcast;
  var displaySuggestedMentionList = isOnline && isMentionEnabled && mentionNickname.length > 0 && !Channel_context.isDisabledBecauseFrozen(channel) && !Channel_context.isDisabledBecauseMuted(channel); // Reset when channel changes

  React.useEffect(function () {
    setMentionNickname('');
    setMentionedUsers([]);
    setMentionedUserIds([]);
    setSelectedUser(null);
    setMentionSuggestedUsers([]);
    setAbleMention(true);
    setMessageInputEvent(null);
  }, [channel === null || channel === void 0 ? void 0 : channel.url]);
  React.useEffect(function () {
    if ((mentionedUsers === null || mentionedUsers === void 0 ? void 0 : mentionedUsers.length) >= maxUserMentionCount) {
      setAbleMention(false);
    } else {
      setAbleMention(true);
    }
  }, [mentionedUsers]);
  React.useEffect(function () {
    setMentionedUsers(mentionedUsers.filter(function (_a) {
      var userId = _a.userId;
      var i = mentionedUserIds.indexOf(userId);

      if (i < 0) {
        return false;
      } else {
        mentionedUserIds.splice(i, 1);
        return true;
      }
    }));
  }, [mentionedUserIds]); // broadcast channel + not operator

  if (isBroadcast && !isOperator) {
    return null;
  } // other conditions


  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper"
  }, displaySuggestedMentionList && /*#__PURE__*/React__default["default"].createElement(Channel_components_SuggestedMentionList, {
    targetNickname: mentionNickname,
    inputEvent: messageInputEvent,
    renderUserMentionItem: renderUserMentionItem,
    onUserItemClick: function (user) {
      if (user) {
        setMentionedUsers(tslib_es6.__spreadArray(tslib_es6.__spreadArray([], mentionedUsers, true), [user], false));
      }

      setMentionNickname('');
      setSelectedUser(user);
      setMessageInputEvent(null);
    },
    onFocusItemChange: function () {
      setMessageInputEvent(null);
    },
    onFetchUsers: function (users) {
      setMentionSuggestedUsers(users);
    },
    ableAddMention: ableMention,
    maxMentionCount: maxUserMentionCount,
    maxSuggestionCount: maxUserSuggestionCount
  }), quoteMessage && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-message-input-wrapper__quote-message-input"
  }, /*#__PURE__*/React__default["default"].createElement(ui_QuoteMessageInput, {
    replyingMessage: quoteMessage,
    onClose: function () {
      return setQuoteMessage(null);
    }
  })), /*#__PURE__*/React__default["default"].createElement(ui_MessageInput, {
    className: "sendbird-message-input-wrapper__message-input",
    channelUrl: channel === null || channel === void 0 ? void 0 : channel.url,
    mentionSelectedUser: selectedUser,
    isMentionEnabled: isMentionEnabled,
    placeholder: quoteMessage && stringSet.MESSAGE_INPUT__QUOTE_REPLY__PLACE_HOLDER || Channel_context.isDisabledBecauseFrozen(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__DISABLED || Channel_context.isDisabledBecauseMuted(channel) && stringSet.MESSAGE_INPUT__PLACE_HOLDER__MUTED,
    ref: messageInputRef,
    disabled: disabled,
    onStartTyping: function () {
      channel === null || channel === void 0 ? void 0 : channel.startTyping();
    },
    onSendMessage: function (_a) {
      var message = _a.message,
          mentionTemplate = _a.mentionTemplate;
      sendMessage({
        message: message,
        quoteMessage: quoteMessage,
        mentionedUsers: mentionedUsers,
        mentionTemplate: mentionTemplate
      });
      setMentionNickname('');
      setMentionedUsers([]);
      setQuoteMessage(null);
      channel === null || channel === void 0 ? void 0 : channel.endTyping();
    },
    onFileUpload: function (file) {
      // TODO: upload to s3
      console.log(fileInputContext); // const result = fileInputContext.onFilePicked(file);
      // if(result) {
      //   sendMessage({
      //     message: result,
      //   })
      // }
      // sendFileMessage(file, quoteMessage);

      setQuoteMessage(null);
    },
    onUserMentioned: function (user) {
      if ((selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.userId) === (user === null || user === void 0 ? void 0 : user.userId)) {
        setSelectedUser(null);
        setMentionNickname('');
      }
    },
    onMentionStringChange: function (mentionText) {
      setMentionNickname(mentionText);
    },
    onMentionedUserIdsUpdated: function (userIds) {
      setMentionedUserIds(userIds);
    },
    onKeyDown: function (e) {
      if (displaySuggestedMentionList && (mentionSuggestedUsers === null || mentionSuggestedUsers === void 0 ? void 0 : mentionSuggestedUsers.length) > 0 && (e.key === _const.MessageInputKeys.Enter && ableMention || e.key === _const.MessageInputKeys.ArrowUp || e.key === _const.MessageInputKeys.ArrowDown)) {
        setMessageInputEvent(e);
        return true;
      }

      return false;
    }
  }));
};

var MessageInputWrapper$1 = /*#__PURE__*/React__default["default"].forwardRef(MessageInputWrapper);

var ChannelUI = function (_a) {
  var _b, _c, _d, _e;

  var renderPlaceholderLoader = _a.renderPlaceholderLoader,
      renderPlaceholderInvalid = _a.renderPlaceholderInvalid,
      renderPlaceholderEmpty = _a.renderPlaceholderEmpty,
      renderChannelHeader = _a.renderChannelHeader,
      renderMessage = _a.renderMessage,
      renderMessageInput = _a.renderMessageInput,
      renderTypingIndicator = _a.renderTypingIndicator,
      renderCustomSeparator = _a.renderCustomSeparator;

  var _f = Channel_context.useChannelContext(),
      currentGroupChannel = _f.currentGroupChannel,
      channelUrl = _f.channelUrl,
      isInvalid = _f.isInvalid,
      unreadSince = _f.unreadSince,
      loading = _f.loading,
      setInitialTimeStamp = _f.setInitialTimeStamp,
      setAnimatedMessageId = _f.setAnimatedMessageId,
      setHighLightedMessageId = _f.setHighLightedMessageId,
      scrollRef = _f.scrollRef,
      messagesDispatcher = _f.messagesDispatcher;

  var _g = React.useState(0),
      unreadCount = _g[0],
      setUnreadCount = _g[1];

  React.useEffect(function () {
    setUnreadCount(currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount);
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.unreadMessageCount]);
  var globalStore = useSendbirdStateContext();
  var sdkError = (_c = (_b = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.error;
  var logger = (_d = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _d === void 0 ? void 0 : _d.logger;
  var isOnline = (_e = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _e === void 0 ? void 0 : _e.isOnline;

  if (!channelUrl) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.NO_CHANNELS
    }));
  }

  if (isInvalid) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG
    }));
  }

  if (sdkError) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-conversation"
    }, (renderPlaceholderInvalid === null || renderPlaceholderInvalid === void 0 ? void 0 : renderPlaceholderInvalid()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
      type: ui_PlaceHolder.PlaceHolderTypes.WRONG,
      retryToConnect: function () {
        logger.info('Channel: reconnecting'); // reconnect();
      }
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderChannelHeader === null || renderChannelHeader === void 0 ? void 0 : renderChannelHeader()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_ChannelHeader, null), (currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.isFrozen) && /*#__PURE__*/React__default["default"].createElement(Channel_components_FrozenNotification, null), unreadCount > 0 && /*#__PURE__*/React__default["default"].createElement(Channel_components_UnreadCount, {
    count: unreadCount,
    time: unreadSince,
    onClick: function () {
      var _a, _b, _c;

      setUnreadCount(0);

      if ((_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) {
        scrollRef.current.scrollTop = ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.scrollHeight) - ((_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.offsetHeight);
      }

      currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.markAsRead();
      messagesDispatcher({
        type: Channel_context.MARK_AS_READ,
        payload: {
          channel: currentGroupChannel
        }
      });
      setInitialTimeStamp(null);
      setAnimatedMessageId(null);
      setHighLightedMessageId(null);
    }
  }), loading ? /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation"
  }, (renderPlaceholderLoader === null || renderPlaceholderLoader === void 0 ? void 0 : renderPlaceholderLoader()) || /*#__PURE__*/React__default["default"].createElement(ui_PlaceHolder.PlaceHolder, {
    type: ui_PlaceHolder.PlaceHolderTypes.LOADING
  })) : /*#__PURE__*/React__default["default"].createElement(Channel_components_MessageList, {
    renderMessage: renderMessage,
    renderPlaceholderEmpty: renderPlaceholderEmpty,
    renderCustomSeparator: renderCustomSeparator
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer"
  }, (renderMessageInput === null || renderMessageInput === void 0 ? void 0 : renderMessageInput()) || /*#__PURE__*/React__default["default"].createElement(MessageInputWrapper$1, null), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-conversation__footer__typing-indicator"
  }, (renderTypingIndicator === null || renderTypingIndicator === void 0 ? void 0 : renderTypingIndicator()) || /*#__PURE__*/React__default["default"].createElement(Channel_components_TypingIndicator["default"], null), !isOnline && /*#__PURE__*/React__default["default"].createElement(ui_ConnectionStatus, null))));
};

var Channel = function (props) {
  return /*#__PURE__*/React__default["default"].createElement(Channel_context.ChannelProvider, {
    channelUrl: props === null || props === void 0 ? void 0 : props.channelUrl,
    isReactionEnabled: props === null || props === void 0 ? void 0 : props.isReactionEnabled,
    isMessageGroupingEnabled: props === null || props === void 0 ? void 0 : props.isMessageGroupingEnabled,
    showSearchIcon: props === null || props === void 0 ? void 0 : props.showSearchIcon,
    highlightedMessage: props === null || props === void 0 ? void 0 : props.highlightedMessage,
    startingPoint: props === null || props === void 0 ? void 0 : props.startingPoint,
    onBeforeSendUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendUserMessage,
    onBeforeSendFileMessage: props === null || props === void 0 ? void 0 : props.onBeforeSendFileMessage,
    onBeforeUpdateUserMessage: props === null || props === void 0 ? void 0 : props.onBeforeUpdateUserMessage,
    onChatHeaderActionClick: props === null || props === void 0 ? void 0 : props.onChatHeaderActionClick,
    onSearchClick: props === null || props === void 0 ? void 0 : props.onSearchClick,
    replyType: props === null || props === void 0 ? void 0 : props.replyType,
    queries: props === null || props === void 0 ? void 0 : props.queries,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default["default"].createElement(ChannelUI, {
    renderPlaceholderLoader: props === null || props === void 0 ? void 0 : props.renderPlaceholderLoader,
    renderPlaceholderInvalid: props === null || props === void 0 ? void 0 : props.renderPlaceholderInvalid,
    renderPlaceholderEmpty: props === null || props === void 0 ? void 0 : props.renderPlaceholderEmpty,
    renderChannelHeader: props === null || props === void 0 ? void 0 : props.renderChannelHeader,
    renderMessage: props === null || props === void 0 ? void 0 : props.renderMessage,
    renderMessageInput: props === null || props === void 0 ? void 0 : props.renderMessageInput,
    renderTypingIndicator: props === null || props === void 0 ? void 0 : props.renderTypingIndicator,
    renderCustomSeparator: props === null || props === void 0 ? void 0 : props.renderCustomSeparator
  }));
};

/**
 * This is a drop in Chat solution
 * Can also be used as an example for creating
 * default chat apps
 */
const FileInputContext = /*#__PURE__*/React.createContext({
  onFilePicked: file => file.name
});
function App(props) {
  const {
    appId,
    userId,
    accessToken,
    theme,
    userListQuery,
    nickname,
    profileUrl,
    dateLocale,
    config = {},
    isReactionEnabled,
    isMentionEnabled,
    replyType,
    isMessageGroupingEnabled,
    colorSet,
    stringSet,
    allowProfileEdit,
    disableUserProfile,
    renderUserProfile,
    showSearchIcon,
    onProfileEditSuccess,
    imageCompression,
    disableAutoSelect,
    isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList,
    onFilePicked
  } = props;
  const [currentChannelUrl, setCurrentChannelUrl] = React.useState(null);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const [highlightedMessage, setHighlightedMessage] = React.useState(null);
  const [startingPoint, setStartingPoint] = React.useState(null);
  console.log(onFilePicked);
  return /*#__PURE__*/React__default["default"].createElement(FileInputContext.Provider, {
    value: onFilePicked
  }, /*#__PURE__*/React__default["default"].createElement(SendbirdProvider, {
    stringSet: stringSet,
    appId: appId,
    userId: userId,
    accessToken: accessToken,
    theme: theme,
    nickname: nickname,
    profileUrl: profileUrl,
    dateLocale: dateLocale,
    userListQuery: userListQuery,
    config: config,
    colorSet: colorSet,
    disableUserProfile: disableUserProfile,
    renderUserProfile: renderUserProfile,
    imageCompression: imageCompression,
    isReactionEnabled: isReactionEnabled,
    isMentionEnabled: isMentionEnabled,
    isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__wrap"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__channellist-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelList, {
    allowProfileEdit: allowProfileEdit,
    onProfileEditSuccess: onProfileEditSuccess,
    disableAutoSelect: disableAutoSelect,
    onChannelSelect: channel => {
      setStartingPoint(null);
      setHighlightedMessage(null);

      if (channel !== null && channel !== void 0 && channel.url) {
        setCurrentChannelUrl(channel.url);
      } else {
        setCurrentChannelUrl('');
      }
    }
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: `
              ${showSettings ? 'sendbird-app__conversation--settings-open' : ''}
              ${showSearch ? 'sendbird-app__conversation--search-open' : ''}
              sendbird-app__conversation-wrap
            `
  }, /*#__PURE__*/React__default["default"].createElement(Channel, {
    channelUrl: currentChannelUrl,
    onChatHeaderActionClick: () => {
      setShowSearch(false);
      setShowSettings(!showSettings);
    },
    onSearchClick: () => {
      setShowSettings(false);
      setShowSearch(!showSearch);
    },
    showSearchIcon: showSearchIcon,
    startingPoint: startingPoint,
    highlightedMessage: highlightedMessage,
    isReactionEnabled: isReactionEnabled,
    replyType: replyType,
    isMessageGroupingEnabled: isMessageGroupingEnabled
  })), showSettings && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__settingspanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(ChannelSettings, {
    className: "sendbird-channel-settings",
    channelUrl: currentChannelUrl,
    onCloseClick: () => {
      setShowSettings(false);
    }
  })), showSearch && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-app__searchpanel-wrap"
  }, /*#__PURE__*/React__default["default"].createElement(MessageSearch, {
    channelUrl: currentChannelUrl,
    onResultClick: message => {
      if (message.messageId === highlightedMessage) {
        setHighlightedMessage(null);
        setTimeout(() => {
          setHighlightedMessage(message.messageId);
        });
      } else {
        setStartingPoint(message.createdAt);
        setHighlightedMessage(message.messageId);
      }
    },
    onCloseClick: () => {
      setShowSearch(false);
    }
  })))));
}
App.propTypes = {
  appId: PropTypes__default["default"].string.isRequired,
  userId: PropTypes__default["default"].string.isRequired,
  accessToken: PropTypes__default["default"].string,
  theme: PropTypes__default["default"].string,
  userListQuery: PropTypes__default["default"].func,
  nickname: PropTypes__default["default"].string,
  profileUrl: PropTypes__default["default"].string,
  allowProfileEdit: PropTypes__default["default"].bool,
  disableUserProfile: PropTypes__default["default"].bool,
  renderUserProfile: PropTypes__default["default"].func,
  onProfileEditSuccess: PropTypes__default["default"].func,
  dateLocale: PropTypes__default["default"].shape({}),
  config: PropTypes__default["default"].shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
  }),
  isReactionEnabled: PropTypes__default["default"].bool,
  replyType: PropTypes__default["default"].oneOf(['NONE', 'QUOTE_REPLY', 'THREAD']),
  showSearchIcon: PropTypes__default["default"].bool,
  isMessageGroupingEnabled: PropTypes__default["default"].bool,
  stringSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  colorSet: PropTypes__default["default"].objectOf(PropTypes__default["default"].string),
  imageCompression: PropTypes__default["default"].shape({
    compressionRate: PropTypes__default["default"].number,
    resizingWidth: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
    resizingHeight: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }),
  disableAutoSelect: PropTypes__default["default"].bool,
  isMentionEnabled: PropTypes__default["default"].bool,
  isTypingIndicatorEnabledOnChannelList: PropTypes__default["default"].bool,
  isMessageReceiptStatusEnabledOnChannelList: PropTypes__default["default"].bool,
  onFilePicked: PropTypes__default["default"].any
};
App.defaultProps = {
  accessToken: '',
  theme: 'light',
  nickname: '',
  profileUrl: '',
  userListQuery: null,
  dateLocale: null,
  allowProfileEdit: false,
  onProfileEditSuccess: null,
  disableUserProfile: false,
  showSearchIcon: false,
  renderUserProfile: null,
  config: {},
  isReactionEnabled: true,
  isMentionEnabled: false,
  replyType: 'NONE',
  isMessageGroupingEnabled: true,
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  disableAutoSelect: false,
  isTypingIndicatorEnabledOnChannelList: false,
  isMessageReceiptStatusEnabledOnChannelList: false,
  onFilePicked: file => file.name
};

exports.App = App;
exports.Channel = Channel;
exports.ChannelUI = ChannelUI;
exports.FileInputContext = FileInputContext;
exports.MessageInputWrapper = MessageInputWrapper$1;
//# sourceMappingURL=index-39b2edb9.js.map
