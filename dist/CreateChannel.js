import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-e2a7223a.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-21381414.js';
import './LocalizationContext-09cb5078.js';
import './stringSet-9cd89798.js';
import './index-5b9a7c71.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-6a3c1c63.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-58f6a33c.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-8c1601f6.js';
import './index-8eb795c0.js';
import './utils-20d05a65.js';
import './ui/UserListItem.js';
import './UserProfileContext-63091e16.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-ee711734.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-a22af37d.js';
import './ui/ContextMenu.js';
import './index-af6c813e.js';
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
