'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-f5ed4eb1.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../topics-1218aada.js');
require('../../utils-f60a9a5a.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-652929ec.js');
require('../../tslib.es6-c3158c01.js');
require('../../LocalizationContext-4edc1945.js');
require('../../stringSet-8a123999.js');
require('../../index-1968df45.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-6e41140f.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-a189c9f3.js');
require('../../index-1ac2a868.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-80f2ddb9.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-11d3ef5e.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-8daa2cfb.js');
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
