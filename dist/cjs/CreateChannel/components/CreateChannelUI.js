'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-41fa033b.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../topics-9033c412.js');
require('../../utils-787f6393.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-95f9644b.js');
require('../../tslib.es6-79d6c001.js');
require('../../LocalizationContext-c4e6256c.js');
require('../../stringSet-6c45946e.js');
require('../../index-5a900a14.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-c0ef2913.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-d3743106.js');
require('../../index-9235a70d.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-7343163c.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-35ad849a.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-442b2a43.js');
require('../../ui/SortByRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CreateChannel = function (props) {
  var onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = CreateChannel_context.useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_SelectChannelType, {
    onCancel: onCancel
  })), step === 1 && /*#__PURE__*/React__default["default"].createElement(CreateChannel_components_InviteUsers, {
    onCancel: function () {
      setStep(0);
      onCancel();
    }
  }));
};

module.exports = CreateChannel;
//# sourceMappingURL=CreateChannelUI.js.map
