import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-c5e9269f.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-fc458762.js';
import '../../utils-c830dbcc.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../LocalizationContext-6dc0d190.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-bf6cbc46.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-28e59bab.js';
import '../../index-ed7103e1.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-4b033040.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-bb395be0.js';
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
