'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var LocalizationContext = require('../../LocalizationContext-b96a3e25.js');
var ui_ContextMenu = require('../../ui/ContextMenu.js');
var ui_IconButton = require('../../ui/IconButton.js');
var ui_Icon = require('../../ui/Icon.js');
var useSendbirdStateContext = require('../../useSendbirdStateContext.js');
var utils = require('../../utils-8f0d7826.js');
var ui_Modal = require('../../ui/Modal.js');
var ChannelList_context = require('../../ChannelListProvider-97dcb17d.js');
require('../../stringSet-c701d85c.js');
require('../../index-30aacb0e.js');
require('../../index-2777b3d9.js');
require('../../index-67d733e9.js');
require('../../tslib.es6-90bf9fc5.js');
require('../../_rollupPluginBabelHelpers-131d30dc.js');
require('react-dom');
require('../../ui/SortByRow.js');
require('../../withSendbird.js');
require('../../index-675dba65.js');
require('../../index-86c744f1.js');
require('../../groupChannel-dd5d6911.js');
require('../../__bundle-ba710a09-5006ce8c.js');
require('../../topics-efe1f803.js');
require('../../uuid-04261033.js');
require('../../UserProfileContext-a3f3d44c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var LeaveChannel = function (props) {
  var _a, _b, _c;

  var _d = props.onSubmit,
      onSubmit = _d === void 0 ? utils.noop : _d,
      _e = props.onCancel,
      onCancel = _e === void 0 ? utils.noop : _e;
  var channel = (_a = ChannelList_context.useChannelListContext()) === null || _a === void 0 ? void 0 : _a.currentChannel;
  var state = useSendbirdStateContext();
  var logger = (_b = state === null || state === void 0 ? void 0 : state.config) === null || _b === void 0 ? void 0 : _b.logger;
  var isOnline = (_c = state === null || state === void 0 ? void 0 : state.config) === null || _c === void 0 ? void 0 : _c.isOnline;

  if (channel) {
    return /*#__PURE__*/React__default["default"].createElement(ui_Modal["default"], {
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
  const parentRef = React.useRef(null);
  const [showModal, setShowModal] = React.useState(false);
  const {
    stringSet
  } = React.useContext(LocalizationContext.LocalizationContext);
  return /*#__PURE__*/React__default["default"].createElement("div", {
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
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: toggleDropdown => /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
      ref: parentRef,
      onClick: toggleDropdown,
      height: "32px",
      width: "32px"
    }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
      type: ui_Icon.IconTypes.MORE,
      fillColor: ui_Icon.IconColors.PRIMARY,
      width: "24px",
      height: "24px"
    })),
    menuItems: closeDropdown => /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
      parentRef: parentRef,
      parentContainRef: parentRef,
      closeDropdown: closeDropdown
    }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
      onClick: () => {
        if (disabled) {
          return;
        }

        setShowModal(true);
        closeDropdown();
      }
    }, stringSet.CHANNEL_SETTING__LEAVE_CHANNEL__TITLE))
  }), showModal && /*#__PURE__*/React__default["default"].createElement(LeaveChannel, {
    onSubmit: () => {
      setShowModal(false);
      onLeaveChannel();
    },
    onCancel: () => setShowModal(false)
  }));
}
ChannelPreviewAction.propTypes = {
  disabled: PropTypes__default["default"].bool,
  onLeaveChannel: PropTypes__default["default"].func.isRequired
};
ChannelPreviewAction.defaultProps = {
  disabled: false
};

module.exports = ChannelPreviewAction;
//# sourceMappingURL=ChannelPreviewAction.js.map
