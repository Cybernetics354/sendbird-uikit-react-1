import React__default from 'react';
import CreateChannel$1 from './CreateChannel/components/CreateChannelUI.js';
import { C as CreateChannelProvider } from './CreateChannelProvider-da20c311.js';
import './CreateChannel/components/InviteUsers.js';
import './tslib.es6-4021ca51.js';
import './LocalizationContext-8a121e1d.js';
import './stringSet-955abea5.js';
import './index-76197404.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';
import './_rollupPluginBabelHelpers-4dd1a6d8.js';
import './ui/Modal.js';
import 'prop-types';
import 'react-dom';
import './index-675ee70c.js';
import './ui/IconButton.js';
import './ui/Icon.js';
import './index-bd1b8bfb.js';
import './index-2cd7fa96.js';
import './utils-d8815494.js';
import './ui/UserListItem.js';
import './UserProfileContext-aa0ce103.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './uuid-c5fe47ff.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './sendbirdSelectors.js';
import './topics-e07cc011.js';
import './ui/ContextMenu.js';
import './index-2dbecfe3.js';
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
