'use strict';

var React = require('react');
var ui_ContextMenu = require('./ContextMenu.js');
var ui_Icon = require('./Icon.js');
var ui_IconButton = require('./IconButton.js');
var index = require('../index-029c9c4b.js');
var LocalizationContext = require('../LocalizationContext-219f1540.js');
require('prop-types');
require('../index-7309809e.js');
require('../stringSet-49111b06.js');
require('../_rollupPluginBabelHelpers-404a108a.js');
require('react-dom');
require('./SortByRow.js');
require('../tslib.es6-c9f1dea2.js');
require('../index-6ada6170.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function MessageItemMenu(_a) {
  var className = _a.className,
      message = _a.message,
      channel = _a.channel,
      _b = _a.isByMe,
      isByMe = _b === void 0 ? false : _b,
      _c = _a.disabled,
      disabled = _c === void 0 ? false : _c,
      replyType = _a.replyType,
      showEdit = _a.showEdit,
      showRemove = _a.showRemove,
      resendMessage = _a.resendMessage,
      setQuoteMessage = _a.setQuoteMessage,
      setSupposedHover = _a.setSupposedHover;
  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var triggerRef = React.useRef(null);
  var containerRef = React.useRef(null);
  var showMenuItemCopy = index.isUserMessage(message);
  var showMenuItemEdit = index.isUserMessage(message) && index.isSentMessage(message) && isByMe;
  var showMenuItemResend = index.isFailedMessage(message) && (message === null || message === void 0 ? void 0 : message.isResendable) && isByMe;
  var showMenuItemDelete = !index.isPendingMessage(message) && isByMe;
  /**
   * TODO: Manage timing issue
   * User delete pending message -> Sending message success
   */

  var showMenuItemReply = replyType === 'QUOTE_REPLY' && !index.isFailedMessage(message) && !index.isPendingMessage(message) && (channel === null || channel === void 0 ? void 0 : channel.isGroupChannel()) && !(channel === null || channel === void 0 ? void 0 : channel.isBroadcast);

  if (!(showMenuItemCopy || showMenuItemReply || showMenuItemEdit || showMenuItemResend || showMenuItemDelete)) {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: index.getClassName([className, 'sendbird-message-item-menu']),
    ref: containerRef
  }, /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu["default"], {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
        className: "sendbird-message-item-menu__trigger",
        ref: triggerRef,
        width: "32px",
        height: "32px",
        onClick: function () {
          toggleDropdown();
          setSupposedHover(true);
        },
        onBlur: function () {
          setSupposedHover(false);
        }
      }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
        className: "sendbird-message-item-menu__trigger__icon",
        type: ui_Icon.IconTypes.MORE,
        fillColor: ui_Icon.IconColors.CONTENT_INVERSE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function (close) {
      var _a;

      var closeDropdown = function () {
        close();
        setSupposedHover(false);
      };

      return /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItems, {
        className: "sendbird-message-item-menu__list",
        parentRef: triggerRef,
        parentContainRef: containerRef,
        closeDropdown: closeDropdown,
        openLeft: isByMe
      }, showMenuItemCopy && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-copy",
        onClick: function () {
          index.copyToClipboard(message === null || message === void 0 ? void 0 : message.message);
          closeDropdown();
        }
      }, stringSet.MESSAGE_MENU__COPY), showMenuItemReply && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-reply",
        onClick: function () {
          setQuoteMessage(message);
          closeDropdown();
        },
        disable: (message === null || message === void 0 ? void 0 : message.parentMessageId) > 0
      }, stringSet.MESSAGE_MENU__REPLY), showMenuItemEdit && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-edit",
        onClick: function () {
          if (!disabled) {
            showEdit(true);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__EDIT), showMenuItemResend && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-resend",
        onClick: function () {
          if (!disabled) {
            resendMessage(message);
            closeDropdown();
          }
        }
      }, stringSet.MESSAGE_MENU__RESEND), showMenuItemDelete && /*#__PURE__*/React__default["default"].createElement(ui_ContextMenu.MenuItem, {
        className: "sendbird-message-item-menu__list__menu-item menu-item-delete",
        onClick: function () {
          if (!disabled) {
            showRemove(true);
            closeDropdown();
          }
        },
        disable: ((_a = message === null || message === void 0 ? void 0 : message.threadInfo) === null || _a === void 0 ? void 0 : _a.replyCount) > 0
      }, stringSet.MESSAGE_MENU__DELETE));
    }
  }));
}

module.exports = MessageItemMenu;
//# sourceMappingURL=MessageItemMenu.js.map
