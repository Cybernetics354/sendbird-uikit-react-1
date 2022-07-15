import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-4d8d3454.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-5837fd36.js';
import './LocalizationContext-c6c43024.js';
import './stringSet-bc59be04.js';
import './index-7ce5a58a.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-5ef7889e.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-3ea1545e.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-d7f84f9a.js';
import './index-dd7d2c20.js';
import './utils-338c9de2.js';
import './ui/UserListItem.js';
import './UserProfileContext-c80e77ff.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-bf348b66.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-16b6b21b.js';
import './ui/ContextMenu.js';
import './index-5b610291.js';
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
