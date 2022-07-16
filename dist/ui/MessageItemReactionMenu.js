import React__default, { useRef } from 'react';
import ContextMenu, { EmojiListItems } from './ContextMenu.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import ImageRenderer from './ImageRenderer.js';
import ReactionButton from './ReactionButton.js';
import { G as isPendingMessage, F as isFailedMessage, g as getClassName, I as getEmojiListAll } from '../index-fcb040ec.js';
import 'prop-types';
import '../index-53585fab.js';
import '../stringSet-49030004.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';
import 'react-dom';
import './SortByRow.js';
import '../tslib.es6-4a4f5c58.js';

function MessageItemReactionMenu(_a) {
  var className = _a.className,
      message = _a.message,
      userId = _a.userId,
      _b = _a.spaceFromTrigger,
      spaceFromTrigger = _b === void 0 ? {} : _b,
      emojiContainer = _a.emojiContainer,
      toggleReaction = _a.toggleReaction,
      setSupposedHover = _a.setSupposedHover;
  var triggerRef = useRef(null);
  var containerRef = useRef(null);

  if (isPendingMessage(message) || isFailedMessage(message)) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: getClassName([className, 'sendbird-message-item-reaction-menu']),
    ref: containerRef
  }, /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement(IconButton, {
        className: "sendbird-message-item-reaction-menu__trigger",
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
      }, /*#__PURE__*/React__default.createElement(Icon, {
        className: "sendbird-message-item-reaction-menu__trigger__icon",
        type: IconTypes.EMOJI_MORE,
        fillColor: IconColors.CONTENT_INVERSE,
        width: "24px",
        height: "24px"
      }));
    },
    menuItems: function (close) {
      var closeDropdown = function () {
        close();
        setSupposedHover(false);
      };

      return /*#__PURE__*/React__default.createElement(EmojiListItems, {
        parentRef: triggerRef,
        parentContainRef: containerRef,
        closeDropdown: closeDropdown,
        spaceFromTrigger: spaceFromTrigger
      }, getEmojiListAll(emojiContainer).map(function (emoji) {
        var _a, _b, _c;

        var isReacted = (_c = (_b = (_a = message === null || message === void 0 ? void 0 : message.reactions) === null || _a === void 0 ? void 0 : _a.filter(function (reaction) {
          return reaction.key === emoji.key;
        })[0]) === null || _b === void 0 ? void 0 : _b.userIds) === null || _c === void 0 ? void 0 : _c.some(function (reactorId) {
          return reactorId === userId;
        });
        return /*#__PURE__*/React__default.createElement(ReactionButton, {
          key: emoji.key,
          width: "36px",
          height: "36px",
          selected: isReacted,
          onClick: function () {
            closeDropdown();
            toggleReaction(message, emoji.key, isReacted);
          }
        }, /*#__PURE__*/React__default.createElement(ImageRenderer, {
          url: emoji.url,
          width: "28px",
          height: "28px",
          placeHolder: function (style) {
            return /*#__PURE__*/React__default.createElement("div", {
              style: style
            }, /*#__PURE__*/React__default.createElement(Icon, {
              type: IconTypes.QUESTION,
              fillColor: IconColors.ON_BACKGROUND_3,
              width: "28px",
              height: "28px"
            }));
          }
        }));
      }));
    }
  }));
}

export { MessageItemReactionMenu as default };
//# sourceMappingURL=MessageItemReactionMenu.js.map
