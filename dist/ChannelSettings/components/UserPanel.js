import React__default, { useContext, useState } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d3e49456.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-53585fab.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Badge from '../../ui/Badge.js';
import { M as MemberList } from '../../MemberList-57b5d8c8.js';
import { useChannelSettingsContext } from '../context.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import 'prop-types';
import '../../index-d880236d.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../ui/ContextMenu.js';
import '../../index-fcb040ec.js';
import '../../tslib.es6-4a4f5c58.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import './UserListItem.js';
import '../../UserProfileContext-153af432.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-91011cda.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../sendbirdSelectors.js';
import '../../topics-480e2d9e.js';
import '../../utils-87c63da6.js';
import '../../ui/Modal.js';
import '../../index-6bfe08d8.js';
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
