import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-fc6a87b0.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-de8d1abb.js';
import '../../utils-67d0347a.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import '../../tslib.es6-7262cbaf.js';
import '../../LocalizationContext-12a49911.js';
import '../../stringSet-1980c44a.js';
import '../../index-f2df602e.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-4a28b1a1.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-6b3586e6.js';
import '../../index-b990bb50.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-82d9c025.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-5ca3889a.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-5075c241.js';
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
