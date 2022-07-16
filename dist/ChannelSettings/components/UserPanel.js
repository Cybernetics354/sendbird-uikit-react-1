import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-ed7103e1.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../MemberList-60afa50d.js';
import { useChannelSettingsContext } from '../context.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import 'prop-types';
import '../../index-28e59bab.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../ui/ContextMenu.js';
import '../../index-bb395be0.js';
import '../../tslib.es6-bdfb18b0.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import './UserListItem.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-4b033040.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../sendbirdSelectors.js';
import '../../topics-fc458762.js';
import '../../utils-c830dbcc.js';
import '../../ui/Modal.js';
import '../../index-bf6cbc46.js';
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
