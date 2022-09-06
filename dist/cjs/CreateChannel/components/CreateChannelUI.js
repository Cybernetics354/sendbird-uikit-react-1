'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-0a413c0f.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../topics-9b308b83.js');
require('../../utils-ae4d63e2.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-34e22b99.js');
require('../../tslib.es6-bd7bd76d.js');
require('../../LocalizationContext-ea1242a7.js');
require('../../stringSet-c8c286da.js');
require('../../index-10f7dd53.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-77afdf6b.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-51cd7ad2.js');
require('../../index-2dfdb9de.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-24790fe2.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-d427ce45.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-6292ff33.js');
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
