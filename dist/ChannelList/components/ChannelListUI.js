import React__default, { useState } from 'react';
import ChannelListHeader from './ChannelListHeader.js';
import { AddChannel } from './AddChannel.js';
import ChannelPreview from './ChannelPreview.js';
import ChannelPreviewAction from './ChannelPreviewAction.js';
import { u as useChannelListContext, F as FETCH_CHANNELS_START, a as FETCH_CHANNELS_SUCCESS, b as FETCH_CHANNELS_FAILURE, L as LEAVE_CHANNEL_SUCCESS, S as SET_CURRENT_CHANNEL } from '../../ChannelListProvider-6181c85b.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import EditProfile from '../../EditUserProfile.js';
import { P as PlaceHolder, a as PlaceHolderTypes } from '../../index-fc9ccd03.js';
import '../../LocalizationContext-bdb56d81.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../index-96f2ca18.js';
import 'prop-types';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import '../../ui/Avatar.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../uuid-21b2a5db.js';
import '../../CreateChannel.js';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-7ec47f78.js';
import '../../sendbirdSelectors.js';
import '../../topics-e87f2985.js';
import '../../utils-d6f171ef.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../index-1187996f.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-7c91714e.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../ui/ContextMenu.js';
import '../../index-f2c869d7.js';
import '../../ui/SortByRow.js';
import '../../CreateChannel/components/SelectChannelType.js';
import '../../ui/ChannelAvatar.js';
import '../../utils-ce7905db.js';
import '../../ui/Badge.js';
import '../../index-c75c3d33.js';
import '../../index-7183b40a.js';
import '../../index-6e7e7eaa.js';
import '../../ui/MentionUserLabel.js';
import '../../Channel/components/TypingIndicator.js';
import '../../groupChannel-bddb1f44.js';
import '../../__bundle-ba710a09-e080d3fa.js';
import '../../ChannelProvider-4400f751.js';
import '../../compareIds-14392765.js';
import '../../const-1cfee98a.js';
import '../../ui/ReactionButton.js';
import '../../ui/MessageStatus.js';
import '../../ui/Loader.js';
import '../../index-db0ca2d2.js';
import '../../ui/Input.js';
import '../../ui/TextButton.js';
import '../../color-717a18f9.js';
import '../../actionTypes-9da4719d.js';

var DELIVERY_RECIPT = 'delivery_receipt';

var ChannelListUI = function (props) {
  var _a, _b;

  var renderHeader = props.renderHeader,
      renderChannelPreview = props.renderChannelPreview,
      renderPlaceHolderError = props.renderPlaceHolderError,
      renderPlaceHolderLoading = props.renderPlaceHolderLoading,
      renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList;

  var _c = useState(false),
      showProfileEdit = _c[0],
      setShowProfileEdit = _c[1];

  var _d = useChannelListContext(),
      onThemeChange = _d.onThemeChange,
      allowProfileEdit = _d.allowProfileEdit,
      allChannels = _d.allChannels,
      loading = _d.loading,
      currentChannel = _d.currentChannel,
      channelListDispatcher = _d.channelListDispatcher,
      channelSource = _d.channelSource,
      typingChannels = _d.typingChannels;

  var state = useSendbirdStateContext();
  var sdkStore = (_a = state === null || state === void 0 ? void 0 : state.stores) === null || _a === void 0 ? void 0 : _a.sdkStore;
  var config = state === null || state === void 0 ? void 0 : state.config;
  var isOnline = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.isOnline;
  var logger = config === null || config === void 0 ? void 0 : config.logger;
  var sdk = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.sdk;
  var sdkError = sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.error;
  var sdkIntialized = (sdkStore === null || sdkStore === void 0 ? void 0 : sdkStore.initialized) || false;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-list__header"
  }, /*#__PURE__*/React__default.createElement(ChannelListHeader, {
    renderHeader: renderHeader,
    onEdit: function () {
      if (allowProfileEdit) {
        setShowProfileEdit(true);
      }
    },
    allowProfileEdit: allowProfileEdit,
    renderIconButton: function () {
      return /*#__PURE__*/React__default.createElement(AddChannel, null);
    }
  })), showProfileEdit && /*#__PURE__*/React__default.createElement(EditProfile, {
    onThemeChange: onThemeChange,
    onCancel: function () {
      setShowProfileEdit(false);
    },
    onEditProfile: function () {
      setShowProfileEdit(false);
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-channel-list__body",
    onScroll: function (e) {
      var target = e === null || e === void 0 ? void 0 : e.target;
      var fetchMore = target.clientHeight + target.scrollTop === target.scrollHeight;

      if (fetchMore && (channelSource === null || channelSource === void 0 ? void 0 : channelSource.hasNext)) {
        logger.info('ChannelList: Fetching more channels');
        channelListDispatcher({
          type: FETCH_CHANNELS_START,
          payload: null
        });
        channelSource.next().then(function (channelList) {
          var _a, _b;

          logger.info('ChannelList: Fetching channels successful', channelList);
          channelListDispatcher({
            type: FETCH_CHANNELS_SUCCESS,
            payload: channelList
          });
          var canSetMarkAsDelivered = (_b = (_a = sdk === null || sdk === void 0 ? void 0 : sdk.appInfo) === null || _a === void 0 ? void 0 : _a.premiumFeatureList) === null || _b === void 0 ? void 0 : _b.find(function (feature) {
            return feature === DELIVERY_RECIPT;
          });

          if (canSetMarkAsDelivered) {
            logger.info('ChannelList: Marking all channels as read'); // eslint-disable-next-line no-unused-expressions

            channelList === null || channelList === void 0 ? void 0 : channelList.forEach(function (c, idx) {
              // Plan-based rate limits - minimum limit is 5 requests per second
              setTimeout(function () {
                c === null || c === void 0 ? void 0 : c.markAsDelivered();
              }, 300 * idx);
            });
          }
        }).catch(function (err) {
          logger.info('ChannelList: Fetching channels failed', err);
          channelListDispatcher({
            type: FETCH_CHANNELS_FAILURE,
            payload: err
          });
        });
      }
    }
  }, sdkError && (renderPlaceHolderError && typeof renderPlaceHolderError === 'function' ? renderPlaceHolderError === null || renderPlaceHolderError === void 0 ? void 0 : renderPlaceHolderError() : /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.WRONG
  })), /*#__PURE__*/React__default.createElement("div", null, allChannels && allChannels.map(function (channel, idx) {
    var onLeaveChannel = function (c, cb) {
      logger.info('ChannelList: Leaving channel', c);
      c.leave().then(function (res) {
        logger.info('ChannelList: Leaving channel success', res);

        if (cb && typeof cb === 'function') {
          cb(res, null);
        }

        channelListDispatcher({
          type: LEAVE_CHANNEL_SUCCESS,
          payload: channel === null || channel === void 0 ? void 0 : channel.url
        });
      }).catch(function (err) {
        logger.error('ChannelList: Leaving channel failed', err);

        if (cb && typeof cb === 'function') {
          cb(null, err);
        }
      });
    };

    var onClick = function () {
      if (!isOnline) {
        return;
      }

      logger.info('ChannelList: Clicked on channel:', channel);
      channelListDispatcher({
        type: SET_CURRENT_CHANNEL,
        payload: channel
      });
    };

    return renderChannelPreview ?
    /*#__PURE__*/
    // eslint-disable-next-line
    React__default.createElement("div", {
      key: channel === null || channel === void 0 ? void 0 : channel.url,
      onClick: onClick
    }, renderChannelPreview({
      channel: channel,
      onLeaveChannel: onLeaveChannel
    })) : /*#__PURE__*/React__default.createElement(ChannelPreview, {
      key: channel === null || channel === void 0 ? void 0 : channel.url,
      tabIndex: idx,
      onClick: onClick,
      channel: channel,
      isActive: (channel === null || channel === void 0 ? void 0 : channel.url) === (currentChannel === null || currentChannel === void 0 ? void 0 : currentChannel.url),
      isTyping: typingChannels === null || typingChannels === void 0 ? void 0 : typingChannels.some(function (_a) {
        var url = _a.url;
        return url === (channel === null || channel === void 0 ? void 0 : channel.url);
      }),
      renderChannelAction: function () {
        return /*#__PURE__*/React__default.createElement(ChannelPreviewAction, {
          disabled: !isOnline,
          onLeaveChannel: function () {
            return onLeaveChannel(channel, null);
          }
        });
      }
    });
  })), (!sdkIntialized || loading) && (renderPlaceHolderLoading && typeof renderPlaceHolderLoading === 'function' ? renderPlaceHolderLoading === null || renderPlaceHolderLoading === void 0 ? void 0 : renderPlaceHolderLoading() : /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.LOADING
  })), (!allChannels || allChannels.length === 0) && (renderPlaceHolderEmptyList && typeof renderPlaceHolderEmptyList === 'function' ? renderPlaceHolderEmptyList === null || renderPlaceHolderEmptyList === void 0 ? void 0 : renderPlaceHolderEmptyList() : /*#__PURE__*/React__default.createElement(PlaceHolder, {
    type: PlaceHolderTypes.NO_CHANNELS
  }))));
};

export { ChannelListUI as default };
//# sourceMappingURL=ChannelListUI.js.map
