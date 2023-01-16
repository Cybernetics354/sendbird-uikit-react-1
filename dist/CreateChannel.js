import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-ed6269e0.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-19dec4e0.js';
import './LocalizationContext-f2486c30.js';
import './stringSet-5c50e96e.js';
import './index-bfc04e6e.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-848c5853.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-3f12e269.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-9a801843.js';
import './index-19cce0bb.js';
import './utils-21bd7664.js';
import './ui/UserListItem.js';
import './UserProfileContext-8fcecbac.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-30725b60.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-351221d8.js';
import './ui/ContextMenu.js';
import './index-42611471.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';

var CreateChannel = function (props) {
  var onBeforeCreateChannel = props.onBeforeCreateChannel,
      userListQuery = props.userListQuery,
      onCreateChannel = props.onCreateChannel,
      onCancel = props.onCancel,
      renderStepOne = props.renderStepOne;
  return /*#__PURE__*/React__default.createElement(CreateChannelProvider, {
    onBeforeCreateChannel: onBeforeCreateChannel,
    userListQuery: userListQuery,
    onCreateChannel: onCreateChannel
  }, /*#__PURE__*/React__default.createElement(CreateChannel$1, {
    renderStepOne: renderStepOne,
    onCancel: onCancel
  }));
};

export { CreateChannel as default };
//# sourceMappingURL=CreateChannel.js.map
