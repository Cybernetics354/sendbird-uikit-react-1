import React__default, { useContext, useState, useEffect } from 'react';
import { Y as Yr } from '../../groupChannel-8bf47932.js';
import { a as LocalizationContext } from '../../LocalizationContext-e63b92dd.js';
import { u as uuidv4 } from '../../uuid-6e50e4c4.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-a401bc58.js';
import { u as useChannelContext } from '../../ChannelProvider-7f17dfa8.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../__bundle-ba710a09-60e8438d.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import 'prop-types';
import '../../UserProfileContext-9e885899.js';
import '../../index-0daadd03.js';
import '../../topics-f928ee3e.js';
import '../../index-ee45e5fc.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../compareIds-a43728b9.js';
import '../../const-92587921.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../ui/ImageRenderer.js';
import '../../ui/Icon.js';
import '../../withSendbird.js';

var TypingIndicatorText = function (_a) {
  var members = _a.members;
  var stringSet = useContext(LocalizationContext).stringSet;

  if (!members || members.length === 0) {
    return '';
  }

  if (members && members.length === 1) {
    return "".concat(members[0].nickname, " ").concat(stringSet.TYPING_INDICATOR__IS_TYPING);
  }

  if (members && members.length === 2) {
    return "".concat(members[0].nickname, " ").concat(stringSet.TYPING_INDICATOR__AND, " ").concat(members[1].nickname, " ").concat(stringSet.TYPING_INDICATOR__ARE_TYPING);
  }

  return stringSet.TYPING_INDICATOR__MULTIPLE_TYPING;
};

var TypingIndicator = function () {
  var _a, _b, _c;

  var channelUrl = useChannelContext().channelUrl;
  var globalStore = useSendbirdStateContext();
  var sb = (_b = (_a = globalStore === null || globalStore === void 0 ? void 0 : globalStore.stores) === null || _a === void 0 ? void 0 : _a.sdkStore) === null || _b === void 0 ? void 0 : _b.sdk;
  var logger = (_c = globalStore === null || globalStore === void 0 ? void 0 : globalStore.config) === null || _c === void 0 ? void 0 : _c.logger;

  var _d = useState(uuidv4()),
      handlerId = _d[0],
      setHandlerId = _d[1];

  var _e = useState([]),
      typingMembers = _e[0],
      setTypingMembers = _e[1];

  useEffect(function () {
    var _a;

    if ((_a = sb === null || sb === void 0 ? void 0 : sb.groupChannel) === null || _a === void 0 ? void 0 : _a.addGroupChannelHandler) {
      sb.groupChannel.removeGroupChannelHandler(handlerId);
      var newHandlerId = uuidv4();
      var handler = new Yr({
        onTypingStatusUpdated: function (groupChannel) {
          // there is a possible warning in here - setState called after unmount
          logger.info('Channel > Typing Indicator: onTypingStatusUpdated', groupChannel);

          if (groupChannel.url === channelUrl) {
            var members = groupChannel.getTypingUsers();
            setTypingMembers(members);
          }
        }
      });
      sb.groupChannel.addGroupChannelHandler(newHandlerId, handler);
      setHandlerId(newHandlerId);
    }

    return function () {
      setTypingMembers([]);

      if (sb) {
        sb.groupChannel.removeGroupChannelHandler(handlerId);
      }
    };
  }, [channelUrl]);
  return /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-conversation__footer__typing-indicator__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, /*#__PURE__*/React__default.createElement(TypingIndicatorText, {
    members: typingMembers
  }));
};

export { TypingIndicatorText, TypingIndicator as default };
//# sourceMappingURL=TypingIndicator.js.map
