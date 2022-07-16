import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-5374df4f.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-480e2d9e.js';
import '../../utils-87c63da6.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../LocalizationContext-d3e49456.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-6bfe08d8.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-d880236d.js';
import '../../index-53585fab.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-153af432.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-91011cda.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-fcb040ec.js';
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
