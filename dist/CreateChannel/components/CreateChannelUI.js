import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-4d8d3454.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-16b6b21b.js';
import '../../utils-338c9de2.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-5ef7889e.js';
import '../../tslib.es6-5837fd36.js';
import '../../LocalizationContext-c6c43024.js';
import '../../stringSet-bc59be04.js';
import '../../index-7ce5a58a.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-3ea1545e.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-d7f84f9a.js';
import '../../index-dd7d2c20.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-c80e77ff.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-bf348b66.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-5b610291.js';
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
