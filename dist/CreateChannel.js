import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-7ec47f78.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-6b1ce61a.js';
import './LocalizationContext-bdb56d81.js';
import './stringSet-1cad1dbf.js';
import './index-8d5e2563.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-5522a8f6.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-deb6aab1.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-1187996f.js';
import './index-96f2ca18.js';
import './utils-d6f171ef.js';
import './ui/UserListItem.js';
import './UserProfileContext-7c91714e.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-21b2a5db.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-e87f2985.js';
import './ui/ContextMenu.js';
import './index-f2c869d7.js';
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
