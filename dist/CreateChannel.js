import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-c3130b46.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-cb5d3fd4.js';
import './LocalizationContext-d22b125b.js';
import './stringSet-3b6413f0.js';
import './index-b218dad1.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-33833b5a.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-54145d22.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-44bf1b6e.js';
import './index-af45308d.js';
import './utils-c7026724.js';
import './ui/UserListItem.js';
import './UserProfileContext-701bbd1d.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-361fa4d5.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-72f59d50.js';
import './ui/ContextMenu.js';
import './index-130c824d.js';
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
