import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-c458f3ae.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-5b2e6feb.js';
import '../../utils-1fc25d9a.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-42f11fe4.js';
import '../../tslib.es6-5cbf2d41.js';
import '../../LocalizationContext-6b2a3bfd.js';
import '../../stringSet-bfbe6996.js';
import '../../index-139e5f19.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-ec60ce57.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-fc0130a5.js';
import '../../index-d9ca04bb.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-0d690a96.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-ffa79983.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-5ddc9ee9.js';
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
