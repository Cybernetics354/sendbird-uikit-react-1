import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-4ce233f3.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-1d5f2fa9.js';
import './LocalizationContext-e63b92dd.js';
import './stringSet-e139b667.js';
import './index-e851fa9b.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-a25c3f8a.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-e56e31b3.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-b422234e.js';
import './index-a401bc58.js';
import './utils-c794f866.js';
import './ui/UserListItem.js';
import './UserProfileContext-9e885899.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-6e50e4c4.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-f928ee3e.js';
import './ui/ContextMenu.js';
import './index-ee45e5fc.js';
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
