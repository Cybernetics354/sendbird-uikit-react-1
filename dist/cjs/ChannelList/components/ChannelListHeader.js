'use strict';

var React = require('react');
var LocalizationContext = require('../../LocalizationContext-06295289.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var ui_Label = require('../../index-06ad9a23.js');
var ui_Avatar = require('../../ui/Avatar.js');
require('../../stringSet-c0b7ef0b.js');
require('../../index-46a833a2.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-2157fc28.js');
require('prop-types');
require('../../tslib.es6-43d4c54c.js');
require('../../ui/ImageRenderer.js');
require('../../ui/Icon.js');
require('../../uuid-3cedbe50.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var ChannelListHeader = function (_a) {
  var _b;

  var renderHeader = _a.renderHeader;
      _a.renderIconButton;
      var onEdit = _a.onEdit,
      allowProfileEdit = _a.allowProfileEdit;
  var sbState = useSendbirdStateContext();
  var user = ((_b = sbState === null || sbState === void 0 ? void 0 : sbState.stores) === null || _b === void 0 ? void 0 : _b.userStore).user;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: ["sendbird-channel-header", allowProfileEdit ? "sendbird-channel-header--allow-edit" : ""].join(" ")
  }, renderHeader ? renderHeader() : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title",
    role: "button",
    onClick: function () {
      onEdit();
    },
    onKeyDown: function () {
      onEdit();
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__left"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Avatar["default"], {
    width: "32px",
    height: "32px",
    src: user.profileUrl,
    alt: user.nickname
  })), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-channel-header__title__right"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-header__title__right__name",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, user.nickname || stringSet.NO_NAME), /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-channel-header__title__right__user-id",
    type: ui_Label.LabelTypography.BODY_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, user.userId))));
};

module.exports = ChannelListHeader;
//# sourceMappingURL=ChannelListHeader.js.map
