import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-5374df4f.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-4a4f5c58.js';
import './LocalizationContext-d3e49456.js';
import './stringSet-49030004.js';
import './index-a53c3ed1.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-59897f6c.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-6bfe08d8.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-d880236d.js';
import './index-53585fab.js';
import './utils-87c63da6.js';
import './ui/UserListItem.js';
import './UserProfileContext-153af432.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-91011cda.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-480e2d9e.js';
import './ui/ContextMenu.js';
import './index-fcb040ec.js';
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
