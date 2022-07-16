import React__default, { useRef, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { a as LocalizationContext } from '../../LocalizationContext-6dc0d190.js';
import ContextMenu, { MenuItems, MenuItem } from '../../ui/ContextMenu.js';
import IconButton from '../../ui/IconButton.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { n as noop } from '../../utils-c830dbcc.js';
import Modal from '../../ui/Modal.js';
import { u as useChannelListContext } from '../../ChannelListProvider-ba978866.js';
import '../../stringSet-acf9d2a1.js';
import '../../index-527c3bc4.js';
import '../../index-ed7103e1.js';
import '../../index-bb395be0.js';
import '../../tslib.es6-bdfb18b0.js';
import '../../_rollupPluginBabelHelpers-2c484fe0.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../withSendbird.js';
import '../../index-bf6cbc46.js';
import '../../index-28e59bab.js';
import '../../groupChannel-e68120a4.js';
import '../../__bundle-ba710a09-4a7e5f3a.js';
import '../../topics-fc458762.js';
import '../../uuid-4b033040.js';
import '../../UserProfileContext-c84a4f87.js';

var LeaveChannel = function (props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      onSubmit = _d === void 0 ? noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? noop : _e;
  var channel = (_a = useChannelListContext()) === null || _a === void 0 ? void 0 : _a.currentChannel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default.createElement(Modal, {
      disabled: !isOnline,
      onCancel: onCancel,
      onSubmit: function () {
        logger.info('ChannelSettings: Leaving channel', channel);
        channel === null || channel === void 0 ? void 0 : channel.leave().then(function () {
          logger.info('ChannelSettings: Leaving channel successful!', channel);
          onSubmit();
        });
      },
      submitText: "Leave",
      titleText: "Leave this channel?"
    });
  }
};

function ChannelPreviewAction(_ref) {
  let {
    disabled,
    onLeaveChannel
  } = _ref;
  const parentRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const {
    stringSet
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    role: "button",
    style: {
      display: 'inline-block'
    },
    onKeyDown: e => {
      e.stopPropagation();
    },
    tabIndex: 0,
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: toggleDropdown => /*#__PURE__*/React__default.createElement(IconButton, {
      ref: parentRef,
      onClick: toggleDropdown,
      height: "32px",
      width: "32px"
    }, /*#__PURE__*/React__default.createElement(Icon, {
      type: IconTypes.MORE,
      fillColor: IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })),
    menuItems: closeDropdown => /*#__PURE__*/React__default.createElement(MenuItems, {
      parentRef: parentRef,
      parentContainRef: parentRef,
      closeDropdown: closeDropdown
    }, /*#__PURE__*/React__default.createElement(MenuItem, {
      onClick: () => {
        if (disabled) {
          return;
        }

        setShowModal(true);
        closeDropdown();
      }
    }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))
  }), showModal && /*#__PURE__*/React__default.createElement(LeaveChannel, {
    onSubmit: () => {
      setShowModal(false);
      onLeaveChannel();
    },
    onCancel: () => setShowModal(false)
  }));
}
ChannelPreviewAction.propTypes = {
  disabled: PropTypes.bool,
  onLeaveChannel: PropTypes.func.isRequired
};
ChannelPreviewAction.defaultProps = {
  disabled: false
};

export { ChannelPreviewAction as default };
//# sourceMappingURL=ChannelPreviewAction.js.map
