import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-4ce233f3.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-f928ee3e.js';
import '../../utils-c794f866.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../LocalizationContext-e63b92dd.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-e56e31b3.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-b422234e.js';
import '../../index-a401bc58.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-9e885899.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-6e50e4c4.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-ee45e5fc.js';
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
