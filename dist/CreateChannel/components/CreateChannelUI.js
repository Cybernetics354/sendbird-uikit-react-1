import React__default from 'react';
import { u as useCreateChannelContext } from '../../CreateChannelProvider-da20c311.js';
import InviteUsers from './InviteUsers.js';
import SelectChannelType from './SelectChannelType.js';
import '../../sendbirdSelectors.js';
import '../../topics-e07cc011.js';
import '../../utils-d8815494.js';
import '../../useSendbirdStateContext.js';
import '../../withSendbird.js';
import '../../_rollupPluginBabelHelpers-4dd1a6d8.js';
import '../../tslib.es6-4021ca51.js';
import '../../LocalizationContext-8a121e1d.js';
import '../../stringSet-955abea5.js';
import '../../index-76197404.js';
import '../../ui/Modal.js';
import 'prop-types';
import 'react-dom';
import '../../index-675ee70c.js';
import '../../ui/IconButton.js';
import '../../ui/Icon.js';
import '../../index-bd1b8bfb.js';
import '../../index-2cd7fa96.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-aa0ce103.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-c5fe47ff.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../ui/ContextMenu.js';
import '../../index-2dbecfe3.js';
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
