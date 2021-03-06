'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var ui_Label = require('../../index-2777b3d9.js');
var ui_Icon = require('../../ui/Icon.js');
var ui_Badge = require('../../ui/Badge.js');
var MemberList = require('../../MemberList-f1672aea.js');
var ChannelSettings_context = require('../context.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('prop-types');
require('../../index-86c744f1.js');
require('../../ui/IconButton.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../ui/ContextMenu.js');
require('../../index-67d733e9.js');
require('../../tslib.es6-90bf9fc5.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('./UserListItem.js');
require('../../UserProfileContext-a3f3d44c.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-04261033.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/UserProfile.js');
require('../../withSendbird.js');
require('../../sendbirdSelectors.js');
require('../../topics-efe1f803.js');
require('../../utils-8f0d7826.js');
require('../../ui/Modal.js');
require('../../index-675dba65.js');
require('../../ui/UserListItem.js');
require('../../ui/Checkbox.js');
require('../../useSendbirdStateContext.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var kFormatter = function (num) {
  return Math.abs(num) > 999 ? "".concat((Math.abs(num) / 1000).toFixed(1), "K") : num;
};

var UserPanel = function () {
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;

  var _a = React.useState(false),
      showAccordion = _a[0],
      setShowAccordion = _a[1];

  var channel = ChannelSettings_context.useChannelSettingsContext().channel;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
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
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "sendbird-channel-settings__panel-icon-left",
    type: ui_Icon.IconTypes.MEMBERS,
    fillColor: ui_Icon.IconColors.PRIMARY,
    height: "24px",
    width: "24px"
  }), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    type: ui_Label.LabelTypography.SUBTITLE_1,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.CHANNEL_SETTING__MEMBERS__TITLE, /*#__PURE__*/React__default["default"].createElement(ui_Badge, {
    count: kFormatter(channel === null || channel === void 0 ? void 0 : channel.memberCount)
  })), /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: ['sendbird-channel-settings__panel-icon-right', 'sendbird-channel-settings__panel-icon--chevron', showAccordion ? 'sendbird-channel-settings__panel-icon--open' : ''].join(' '),
    type: ui_Icon.IconTypes.CHEVRON_RIGHT,
    height: "24px",
    width: "24px"
  })), showAccordion && /*#__PURE__*/React__default["default"].createElement(MemberList.MemberList, null));
};

module.exports = UserPanel;
//# sourceMappingURL=UserPanel.js.map
