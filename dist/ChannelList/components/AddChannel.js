import React__default, { useState } from 'react';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import CreateChannel from '../../CreateChannel.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-5522a8f6.js';
import 'prop-types';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-7ec47f78.js';
import '../../sendbirdSelectors.js';
import '../../topics-e87f2985.js';
import '../../utils-d6f171ef.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../tslib.es6-6b1ce61a.js';
import '../../LocalizationContext-bdb56d81.js';
import '../../stringSet-1cad1dbf.js';
import '../../index-8d5e2563.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-deb6aab1.js';
import '../../index-1187996f.js';
import '../../index-96f2ca18.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-7c91714e.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-21b2a5db.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../ui/ContextMenu.js';
import '../../index-f2c869d7.js';
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
