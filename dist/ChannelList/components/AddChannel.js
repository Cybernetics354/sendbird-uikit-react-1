import React__default, { useState } from 'react';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import CreateChannel from '../../CreateChannel.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import 'prop-types';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-c5e9269f.js';
import '../../sendbirdSelectors.js';
import '../../topics-fc458762.js';
import '../../utils-c830dbcc.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../LocalizationContext-6dc0d190.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-bf6cbc46.js';
import '../../index-28e59bab.js';
import '../../index-ed7103e1.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-c84a4f87.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-4b033040.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../ui/ContextMenu.js';
import '../../index-bb395be0.js';
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
