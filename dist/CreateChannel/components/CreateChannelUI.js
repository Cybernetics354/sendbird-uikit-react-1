import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-c3130b46.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-72f59d50.js';
import '../../utils-c7026724.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-33833b5a.js';
import '../../tslib.es6-cb5d3fd4.js';
import '../../LocalizationContext-d22b125b.js';
import '../../stringSet-3b6413f0.js';
import '../../index-b218dad1.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-54145d22.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-44bf1b6e.js';
import '../../index-af45308d.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-701bbd1d.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-361fa4d5.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-130c824d.js';
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
