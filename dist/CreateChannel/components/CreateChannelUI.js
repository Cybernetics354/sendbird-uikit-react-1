import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-ed6269e0.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-351221d8.js';
import '../../utils-21bd7664.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-848c5853.js';
import '../../tslib.es6-19dec4e0.js';
import '../../LocalizationContext-f2486c30.js';
import '../../stringSet-5c50e96e.js';
import '../../index-bfc04e6e.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-3f12e269.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-9a801843.js';
import '../../index-19cce0bb.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-8fcecbac.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-30725b60.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-42611471.js';
import '../../ui/SortByRow.js';

var CreateChannel = function (props) {
  var onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  var createChannelProps = useCreateChannelContext();
  var step = createChannelProps.step,
      setStep = createChannelProps.setStep;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, step === 0 && ((renderStepOne === null || renderStepOne === void 0 ? void 0 : renderStepOne()) || /*#__PURE__*/React__default.createElement(SelectChannelType, {
    onCancel: onCancel
  })), step === 1 && /*#__PURE__*/React__default.createElement(InviteUsers, {
    onCancel: function () {
      setStep(0);
      onCancel();
    }
  }));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannelUI.js.map
