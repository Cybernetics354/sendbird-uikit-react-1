'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useSendbirdStateContext = require('../useSendbirdStateContext.js');
var UserProfileContext = require('../UserProfileContext-dd094164.js');
require('../withSendbird.js');
require('../_rollupPluginBabelHelpers-3b162d85.js');
require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var OpenChannelSettingsContext = /*#__PURE__*/React__default["default"].createContext(undefined);

var OpenChannelSettingsProvider = function (props) {
  var _a, _b, _c;

  var children = props.children,
      channelUrl = props.channelUrl,
      onCloseClick = props.onCloseClick,
      onChannelModified = props.onChannelModified,
      onBeforeUpdateChannel = props.onBeforeUpdateChannel,
      onDeleteChannel = props.onDeleteChannel; // fetch store from <SendbirdProvider />

  var globalStore = useSendbirdStateContext();
  var sdk = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = React.useState(null),
      channel = _d[0],
      setChannel = _d[1];

  React.useEffect(function () {
    if (!channelUrl || !sdk.openChannel) {
      setChannel(null);
      return;
    }

    sdk.openChannel.getChannel(channelUrl).then(function (channel) {
      logger.info('open channel setting: fetched', channel);
      setChannel(channel);
    }).catch(function (error) {
      logger.error('open channel setting: error fetching', error);
      setChannel(null);
    });
  }, [channelUrl, sdk]);
  return /*#__PURE__*/React__default["default"].createElement(OpenChannelSettingsContext.Provider, {
    value: {
      channelUrl: channelUrl,
      channel: channel,
      setChannel: setChannel,
      onCloseClick: onCloseClick,
      onChannelModified: onChannelModified,
      onBeforeUpdateChannel: onBeforeUpdateChannel,
      onDeleteChannel: onDeleteChannel
    }
  }, /*#__PURE__*/React__default["default"].createElement(UserProfileContext.UserProfileProvider, {
    isOpenChannel: true,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, children));
};

var useOpenChannelSettingsContext = function () {
  return React__default["default"].useContext(OpenChannelSettingsContext);
};

exports.OpenChannelSettingsProvider = OpenChannelSettingsProvider;
exports.useOpenChannelSettingsContext = useOpenChannelSettingsContext;
//# sourceMappingURL=context.js.map
