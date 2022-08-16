import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-fc6a87b0.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-7262cbaf.js';
import './LocalizationContext-12a49911.js';
import './stringSet-1980c44a.js';
import './index-f2df602e.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-edb8daf2.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-4a28b1a1.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-6b3586e6.js';
import './index-b990bb50.js';
import './utils-67d0347a.js';
import './ui/UserListItem.js';
import './UserProfileContext-82d9c025.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-5ca3889a.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-de8d1abb.js';
import './ui/ContextMenu.js';
import './index-5075c241.js';
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
