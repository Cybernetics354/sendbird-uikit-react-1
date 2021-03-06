import React__default, { useState, useEffect } from 'react';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import { a as UserProfileProvider } from '../UserProfileContext-c84a4f87.js';
import '../withSendbird.js';
import '../_rollupPluginBabelHelpers-2c484fe0.js';
import 'prop-types';

var OpenChannelSettingsContext = /*#__PURE__*/React__default.createContext(undefined);

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

  var _d = useState(null),
      channel = _d[0],
      setChannel = _d[1];

  useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement(OpenChannelSettingsContext.Provider, {
    value: {
      channelUrl: channelUrl,
      channel: channel,
      setChannel: setChannel,
      onCloseClick: onCloseClick,
      onChannelModified: onChannelModified,
      onBeforeUpdateChannel: onBeforeUpdateChannel,
      onDeleteChannel: onDeleteChannel
    }
  }, /*#__PURE__*/React__default.createElement(UserProfileProvider, {
    isOpenChannel: true,
    renderUserProfile: props === null || props === void 0 ? void 0 : props.renderUserProfile,
    disableUserProfile: props === null || props === void 0 ? void 0 : props.disableUserProfile
  }, children));
};

var useOpenChannelSettingsContext = function () {
  return React__default.useContext(OpenChannelSettingsContext);
};

export { OpenChannelSettingsProvider, useOpenChannelSettingsContext };
//# sourceMappingURL=context.js.map
