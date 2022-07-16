'use strict';

var React = require('react');
var CreateChannel_context = require('../../CreateChannelProvider-f0c58d70.js');
var CreateChannel_components_InviteUsers = require('./InviteUsers.js');
var CreateChannel_components_SelectChannelType = require('./SelectChannelType.js');
require('../../sendbirdSelectors.js');
require('../../topics-efe1f803.js');
require('../../utils-8f0d7826.js');
require('../../useSendbirdStateContext.js');
require('../../withSendbird.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../LocalizationContext-b96a3e25.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('../../ui/Modal.js');
require('prop-types');
require('react-dom');
require('../../index-675dba65.js');
require('../../ui/IconButton.js');
require('../../ui/Icon.js');
require('../../index-86c744f1.js');
require('../../index-2777b3d9.js');
require('../../ui/UserListItem.js');
require('../../UserProfileContext-a3f3d44c.js');
require('../../ui/Avatar.js');
require('../../ui/ImageRenderer.js');
require('../../uuid-04261033.js');
require('../../ui/MutedAvatarOverlay.js');
require('../../ui/Checkbox.js');
require('../../ui/UserProfile.js');
require('../../ui/ContextMenu.js');
require('../../index-67d733e9.js');
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
