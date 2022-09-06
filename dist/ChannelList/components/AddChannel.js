import React__default, { useState } from 'react';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import CreateChannel from '../../CreateChannel.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-a25c3f8a.js';
import 'prop-types';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-4ce233f3.js';
import '../../sendbirdSelectors.js';
import '../../topics-f928ee3e.js';
import '../../utils-c794f866.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../tslib.es6-1d5f2fa9.js';
import '../../LocalizationContext-e63b92dd.js';
import '../../stringSet-e139b667.js';
import '../../index-e851fa9b.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-e56e31b3.js';
import '../../index-b422234e.js';
import '../../index-a401bc58.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-9e885899.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-6e50e4c4.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../ui/ContextMenu.js';
import '../../index-ee45e5fc.js';
import '../../ui/SortByRow.js';
import '../../CreateChannel/components/SelectChannelType.js';

var AddChannel = function () {
  var _a;

  var _b = useState(false),
      showModal = _b[0],
      setShowModal = _b[1];

  var state = useSendbirdStateContext();
  var isOnline = (_a = state === null || state === void 0 ? void 0 : state.config) === null || _a === void 0 ? void 0 : _a.isOnline;
  var disabled = !isOnline;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(IconButton, {
    height: "32px",
    width: "32px",
    onClick: function () {
      setShowModal(true);
    },
    disabled: disabled
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CREATE,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), showModal && /*#__PURE__*/React__default.createElement(CreateChannel, {
    onCancel: function () {
      setShowModal(false);
    },
    onCreateChannel: function () {
      setShowModal(false);
    }
  }));
};

export { AddChannel, AddChannel as default };
//# sourceMappingURL=AddChannel.js.map
