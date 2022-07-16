import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-c5e9269f.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-bdfb18b0.js';
import './LocalizationContext-6dc0d190.js';
import './stringSet-acf9d2a1.js';
import './index-527c3bc4.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-2c484fe0.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-bf6cbc46.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-28e59bab.js';
import './index-ed7103e1.js';
import './utils-c830dbcc.js';
import './ui/UserListItem.js';
import './UserProfileContext-c84a4f87.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-4b033040.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-fc458762.js';
import './ui/ContextMenu.js';
import './index-bb395be0.js';
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
