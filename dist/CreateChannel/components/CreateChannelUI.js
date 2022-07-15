import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-e2a7223a.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-a22af37d.js';
import '../../utils-20d05a65.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-6a3c1c63.js';
import '../../tslib.es6-21381414.js';
import '../../LocalizationContext-09cb5078.js';
import '../../stringSet-9cd89798.js';
import '../../index-5b9a7c71.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-58f6a33c.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-8c1601f6.js';
import '../../index-8eb795c0.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-63091e16.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-ee711734.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-af6c813e.js';
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
