import React__default, { useState } from 'react';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import CreateChannel from '../../CreateChannel.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../_rollupPluginBabelHelpers-59897f6c.js';
import 'prop-types';
import '../../CreateChannel/components/CreateChannelUI.js';
import '../../CreateChannelProvider-5374df4f.js';
import '../../sendbirdSelectors.js';
import '../../topics-480e2d9e.js';
import '../../utils-87c63da6.js';
import '../../CreateChannel/components/InviteUsers.js';
import '../../tslib.es6-4a4f5c58.js';
import '../../LocalizationContext-d3e49456.js';
import '../../stringSet-49030004.js';
import '../../index-a53c3ed1.js';
import '../../ui/Modal.js';
import 'react-dom';
import '../../index-6bfe08d8.js';
import '../../index-d880236d.js';
import '../../index-53585fab.js';
import '../../ui/UserListItem.js';
import '../../UserProfileContext-153af432.js';
import '../../ui/Avatar.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-91011cda.js';
import '../../ui/MutedAvatarOverlay.js';
import '../../ui/Checkbox.js';
import '../../ui/UserProfile.js';
import '../../withSendbird.js';
import '../../ui/ContextMenu.js';
import '../../index-fcb040ec.js';
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
