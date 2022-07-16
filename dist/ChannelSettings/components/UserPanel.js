import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6b2a3bfd.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-d9ca04bb.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../MemberList-18504071.js';
import { useChannelSettingsContext } from '../context.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import 'prop-types';
import '../../index-fc0130a5.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../ui/ContextMenu.js';
import '../../index-5ddc9ee9.js';
import '../../tslib.es6-5cbf2d41.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import './UserListItem.js';
import '../../UserProfileContext-0d690a96.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-ffa79983.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../sendbirdSelectors.js';
import '../../topics-5b2e6feb.js';
import '../../utils-1fc25d9a.js';
import '../../ui/Modal.js';
import '../../index-ec60ce57.js';
import '../../ui/UserListItem.js';
import '../../ui/Checkbox.js';
import '../../useSendbirdStateContext.js';

var kFormatter = function (num) {
  return Math.abs(num) > 999 ? "".concat((Math.abs(num) / 1000).toFixed(1), "K") : num;
};

var UserPanel = function () {
  var stringSet = useContext(LocalizationContext).stringSet;

  var _a = useState(false),
      showAccordion = _a[0],
      setShowAccordion = _a[1];

  var channel = useChannelSettingsContext().channel;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-channel-settings__panel-item', 'sendbird-channel-settings__members'].join(' '),
    role: "switch",
    "aria-checked": showAccordion,
    onKeyDown: function () {
      return setShowAccordion(!showAccordion);
    },
    onClick: function () {
      return setShowAccordion(!showAccordion);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-channel-settings__panel-icon-left",
    type: IconTypes.MEMBERS,
    fillColor: IconColors.PRIMARY,
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.SUBTITLE_1,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE, /*#__PURE__*/React__default.createElement(Badge, {
    count: kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount)
  })), /*#__PURE__*/React__default.createElement(Icon, {
    className: ['sendbird-channel-settings__panel-icon-right', 'sendbird-channel-settings__panel-icon--chevron', showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''].join(' '),
    type: IconTypes.CHEVRON_RIGHT,
    height: "24px",
    width: "24px"
  })), showAccordion && /*#__PURE__*/React__default.createElement(MemberList, null));
};

export { UserPanel as default };
//# sourceMappingURL=UserPanel.js.map
