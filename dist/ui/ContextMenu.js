import React__default, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dd7d2c20.js';
import { k as getClassName } from '../index-5b610291.js';
import { a as _defineProperty, _ as _objectSpread2 } from '../_rollupPluginBabelHelpers-5ef7889e.js';
import { createPortal } from 'react-dom';
import SortByRow from './SortByRow.js';
import '../stringSet-bc59be04.js';
import '../tslib.es6-5837fd36.js';

class MenuItems$1 extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "setupEvents", () => {
      const {
        closeDropdown
      } = this.props;
      const {
        menuRef
      } = this;

      const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      this.setState({
        handleClickOutside
      });
      document.addEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "getMenuPosition", () => {
      const {
        parentRef,
        openLeft
      } = this.props;
      const parentRect = parentRef.current.getBoundingClientRect();
      const x = parentRect.x || parentRect.left;
      const y = parentRect.y || parentRect.top;
      const menuStyle = {
        top: y,
        left: x
      };
      if (!this.menuRef.current) return menuStyle;
      const {
        innerWidth,
        innerHeight
      } = window;
      const rect = this.menuRef.current.getBoundingClientRect();

      if (y + rect.height > innerHeight) {
        menuStyle.top -= rect.height;
      }

      if (x + rect.width > innerWidth && !openLeft) {
        menuStyle.left -= rect.width;
      }

      if (menuStyle.top < 0) {
        menuStyle.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
      }

      if (menuStyle.left < 0) {
        menuStyle.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
      }

      menuStyle.top += 32;

      if (openLeft) {
        const padding = Number.isNaN(rect.width - 30) ? 108 // default
        : rect.width - 30;
        menuStyle.left -= padding;
      }

      return this.setState({
        menuStyle
      });
    });

    this.menuRef = /*#__PURE__*/React__default.createRef();
    this.state = {
      menuStyle: {},
      handleClickOutside: () => {}
    };
  }

  componentDidMount() {
    this.setupEvents();
    this.getMenuPosition();
  }

  componentWillUnmount() {
    this.cleanUpEvents();
  }

  render() {
    const {
      menuStyle
    } = this.state;
    const {
      children,
      style
    } = this.props;
    return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default.createElement("ul", {
      className: "sendbird-dropdown__menu",
      ref: this.menuRef,
      style: _objectSpread2({
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(menuStyle.left)}px`,
        top: `${Math.round(menuStyle.top)}px`
      }, style)
    }, children)), document.getElementById('sendbird-dropdown-portal'));
  }

}
MenuItems$1.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  style: PropTypes.shape({}),
  // https://stackoverflow.com/a/51127130
  parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]).isRequired,
  // parentContainRef: PropTypes.oneOfType([
  //   PropTypes.func,
  //   PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  // ]).isRequired,
  openLeft: PropTypes.bool
};
MenuItems$1.defaultProps = {
  style: {},
  openLeft: false
};

class EmojiListItems$1 extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "showParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.add('sendbird-reactions--pressed');
      }
    });

    _defineProperty(this, "hideParent", () => {
      const {
        parentContainRef = {}
      } = this.props;
      const {
        current
      } = parentContainRef;

      if (parentContainRef && current) {
        current.classList.remove('sendbird-reactions--pressed');
      }
    });

    _defineProperty(this, "setupEvents", () => {
      const {
        closeDropdown
      } = this.props;
      const {
        reactionRef
      } = this;

      const handleClickOutside = event => {
        if (reactionRef.current && !reactionRef.current.contains(event.target)) {
          closeDropdown();
        }
      };

      this.setState({
        handleClickOutside
      });
      document.addEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _defineProperty(this, "getBarPosition", () => {
      // calculate the location that the context menu should be
      const {
        parentRef,
        spaceFromTrigger
      } = this.props;
      const spaceFromTriggerX = spaceFromTrigger.x || 0;
      const spaceFromTriggerY = spaceFromTrigger.y || 0;
      const parentRect = parentRef.current.getBoundingClientRect();
      const x = parentRect.x || parentRect.left;
      const y = parentRect.y || parentRect.top;
      const reactionStyle = {
        top: y,
        left: x
      };
      if (!this.reactionRef.current) return reactionStyle;
      const rect = this.reactionRef.current.getBoundingClientRect();

      if (reactionStyle.top < rect.height) {
        reactionStyle.top += parentRect.height;
        reactionStyle.top += spaceFromTriggerY;
      } else {
        reactionStyle.top -= rect.height;
        reactionStyle.top -= spaceFromTriggerY;
      }

      reactionStyle.left -= rect.width / 2;
      reactionStyle.left += parentRect.height / 2 - 2;
      reactionStyle.left += spaceFromTriggerX;
      const maximumLeft = window.innerWidth - rect.width;

      if (maximumLeft < reactionStyle.left) {
        reactionStyle.left = maximumLeft;
      }

      if (reactionStyle.left < 0) {
        reactionStyle.left = 0;
      }

      return this.setState({
        reactionStyle
      });
    });

    this.reactionRef = /*#__PURE__*/React__default.createRef();
    this.state = {
      reactionStyle: {},
      handleClickOutside: () => {}
    };
  }

  componentDidMount() {
    this.setupEvents();
    this.getBarPosition();
    this.showParent();
  }

  componentWillUnmount() {
    this.cleanUpEvents();
    this.hideParent();
  }

  render() {
    const {
      reactionStyle
    } = this.state;
    const {
      children
    } = this.props;
    return /*#__PURE__*/createPortal( /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default.createElement("ul", {
      className: "sendbird-dropdown__reaction-bar",
      ref: this.reactionRef,
      style: {
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(reactionStyle.left)}px`,
        top: `${Math.round(reactionStyle.top)}px`
      }
    }, /*#__PURE__*/React__default.createElement(SortByRow, {
      className: "sendbird-dropdown__reaction-bar__row",
      maxItemCount: 8,
      itemWidth: 44,
      itemHeight: 40
    }, children))), document.getElementById('sendbird-emoji-list-portal'));
  }

}
EmojiListItems$1.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  parentRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]).isRequired,
  parentContainRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]).isRequired,
  spaceFromTrigger: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
};
EmojiListItems$1.defaultProps = {
  spaceFromTrigger: {}
};

const ENTER = 13;
const MenuItems = MenuItems$1;
const EmojiListItems = EmojiListItems$1;
const MenuItem = _ref => {
  let {
    className,
    children,
    onClick,
    disable
  } = _ref;

  const handleClickEvent = e => {
    if (!disable) onClick(e);
  };

  return /*#__PURE__*/React__default.createElement("li", {
    className: getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']),
    role: "menuitem",
    onClick: handleClickEvent,
    onKeyPress: e => {
      if (e.keyCode === ENTER) handleClickEvent(e);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: LabelTypography.SUBTITLE_2,
    color: disable ? LabelColors.ONBACKGROUND_4 : LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool
};
MenuItem.defaultProps = {
  className: '',
  disable: false
}; // Root components should be appended before ContextMenu is rendered

const MenuRoot = () => /*#__PURE__*/React__default.createElement("div", {
  id: "sendbird-dropdown-portal"
});
const EmojiReactionListRoot = () => /*#__PURE__*/React__default.createElement("div", {
  id: "sendbird-emoji-list-portal"
});
function ContextMenu(_ref2) {
  let {
    menuTrigger,
    menuItems
  } = _ref2;
  const [showMenu, setShowMenu] = useState(false);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-context-menu",
    style: {
      display: 'inline'
    }
  }, menuTrigger(() => setShowMenu(!showMenu)), showMenu && menuItems(() => setShowMenu(false)));
}
ContextMenu.propTypes = {
  menuTrigger: PropTypes.func.isRequired,
  menuItems: PropTypes.func.isRequired
};

export { EmojiListItems, EmojiReactionListRoot, MenuItem, MenuItems, MenuRoot, ContextMenu as default };
//# sourceMappingURL=ContextMenu.js.map
