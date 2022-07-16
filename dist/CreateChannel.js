import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-c458f3ae.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-5cbf2d41.js';
import './LocalizationContext-6b2a3bfd.js';
import './stringSet-bfbe6996.js';
import './index-139e5f19.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-42f11fe4.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-ec60ce57.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-fc0130a5.js';
import './index-d9ca04bb.js';
import './utils-1fc25d9a.js';
import './ui/UserListItem.js';
import './UserProfileContext-0d690a96.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-ffa79983.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-5b2e6feb.js';
import './ui/ContextMenu.js';
import './index-5ddc9ee9.js';
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
