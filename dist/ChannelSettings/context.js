import React__default, { useState, useEffect } from 'react';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import { a as UserProfileProvider } from '../UserProfileContext-c84a4f87.js';
import { u as uuidv4 } from '../uuid-4b033040.js';
import '../withSendbird.js';
import '../_rollupPluginBabelHelpers-2c484fe0.js';
import 'prop-types';

var ChannelSettingsContext = /*#__PURE__*/React__default.createContext(undefined);

var ChannelSettingsProvider = function (props) {
  var children = props.children,
      className = props.className,
      channelUrl = props.channelUrl,
      onCloseClick = props.onCloseClick,
      onChannelModified = props.onChannelModified,
      onBeforeUpdateChannel = props.onBeforeUpdateChannel,
      queries = props.queries; // fetch store from <SendbirdProvider />

  var globalStore = useSendbirdStateContext();
  var config = globalStore.config,
      stores = globalStore.stores;
  var sdkStore = stores.sdkStore;
  var logger = config.logger;
  var initialized = sdkStore.initialized;
  var sdk = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.sdk; // hack to keep track of channel updates by triggering useEffect

  var _a = useState(uuidv4()),
      channelUpdateId = _a[0],
      setChannelUpdateId = _a[1];

  var _b = useState(null),
      channel = _b[0],
      setChannel = _b[1];

  var _c = useState(false),
      invalidChannel = _c[0],
      setInvalidChannel = _c[1];

  var forceUpdateUI = function () {
    setChannelUpdateId(uuidv4());
  };

  useEffect(function () {
    logger.info('ChannelSettings: Setting up');

    if (!channelUrl || !initialized || !sdk) {
      logger.warning('ChannelSettings: Setting up failed', 'No channelUrl or sdk uninitialized');
      setInvalidChannel(false);
    } else {
      if (!sdk || !sdk.groupChannel) {
        logger.warning('ChannelSettings: No GroupChannel');
        return;
      }

      sdk.groupChannel.getChannel(channelUrl).then(function (groupChannel) {
        if (!groupChannel) {
          logger.warning('ChannelSettings: Channel not found');
          setInvalidChannel(true);
        } else {
          logger.info('ChannelSettings: Fetched group channel', groupChannel);
          setInvalidChannel(false);
          setChannel(groupChannel);
        }
      });
    }
  }, [channelUrl, initialized, channelUpdateId]);
  return /*#__PURE__*/React__default.createElement(ChannelSettingsContext.Provider, {
    value: {
      channelUrl: channelUrl,
      onCloseClick: onCloseClick,
      onChannelModified: onChannelModified,
      onBeforeUpdateChannel: onBeforeUpdateChannel,
      queries: queries,
      setChannelUpdateId: setChannelUpdateId,
      forceUpdateUI: forceUpdateUI,
      channel: channel,
      invalidChannel: invalidChannel
    }
  }, /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-settings ".concat(className)
  }, children)));
};

var useChannelSettingsContext = function () {
  return React__default.useContext(ChannelSettingsContext);
};

export { ChannelSettingsProvider, useChannelSettingsContext };
//# sourceMappingURL=context.js.map
