import React__default, { useContext, useState, useEffect } from 'react';
import { Y as Yr } from '../../groupChannel-5d4b44d8.js';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { u as uuidv4 } from '../../uuid-ffa79983.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-d9ca04bb.js';
import { u as useChannelContext } from '../../ChannelProvider-477ebebb.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../__bundle-ba710a09-50a7d4d5.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import 'prop-types';
import '../../UserProfileContext-0d690a96.js';
import '../../index-4cc90022.js';
import '../../topics-5b2e6feb.js';
import '../../index-5ddc9ee9.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../compareIds-8f332743.js';
import '../../const-b6b0314e.js';
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
