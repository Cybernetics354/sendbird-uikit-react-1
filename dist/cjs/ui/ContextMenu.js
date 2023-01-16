'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-1ac2a868.js');
var index = require('../index-8daa2cfb.js');
var _rollupPluginBabelHelpers = require('../_rollupPluginBabelHelpers-652929ec.js');
var reactDom = require('react-dom');
var ui_SortByRow = require('./SortByRow.js');
require('../stringSet-8a123999.js');
require('../tslib.es6-c3158c01.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

class MenuItems$1 extends React.Component {
  constructor(props) {
    super(props);

    _rollupPluginBabelHelpers._defineProperty(this, "setupEvents", () => {
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

    _rollupPluginBabelHelpers._defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(this, "getMenuPosition", () => {
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

    this.menuRef = /*#__PURE__*/React__default["default"].createRef();
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
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default["default"].createElement("ul", {
      className: "sendbird-dropdown__menu",
      ref: this.menuRef,
      style: _rollupPluginBabelHelpers._objectSpread2({
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(menuStyle.left)}px`,
        top: `${Math.round(menuStyle.top)}px`
      }, style)
    }, children)), document.getElementById('sendbird-dropdown-portal'));
  }

}
MenuItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  style: PropTypes__default["default"].shape({}),
  // https://stackoverflow.com/a/51127130
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  // parentContainRef: PropTypes.oneOfType([
  //   PropTypes.func,
  //   PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  // ]).isRequired,
  openLeft: PropTypes__default["default"].bool
};
MenuItems$1.defaultProps = {
  style: {},
  openLeft: false
};

class EmojiListItems$1 extends React.Component {
  constructor(props) {
    super(props);

    _rollupPluginBabelHelpers._defineProperty(this, "showParent", () => {
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

    _rollupPluginBabelHelpers._defineProperty(this, "hideParent", () => {
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

    _rollupPluginBabelHelpers._defineProperty(this, "setupEvents", () => {
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

    _rollupPluginBabelHelpers._defineProperty(this, "cleanUpEvents", () => {
      const {
        handleClickOutside
      } = this.state;
      document.removeEventListener('mousedown', handleClickOutside);
    });

    _rollupPluginBabelHelpers._defineProperty(this, "getBarPosition", () => {
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

    this.reactionRef = /*#__PURE__*/React__default["default"].createRef();
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
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "sendbird-dropdown__menu-backdrop"
    }), /*#__PURE__*/React__default["default"].createElement("ul", {
      className: "sendbird-dropdown__reaction-bar",
      ref: this.reactionRef,
      style: {
        display: 'inline-block',
        position: 'fixed',
        left: `${Math.round(reactionStyle.left)}px`,
        top: `${Math.round(reactionStyle.top)}px`
      }
    }, /*#__PURE__*/React__default["default"].createElement(ui_SortByRow, {
      className: "sendbird-dropdown__reaction-bar__row",
      maxItemCount: 8,
      itemWidth: 44,
      itemHeight: 40
    }, children))), document.getElementById('sendbird-emoji-list-portal'));
  }

}
EmojiListItems$1.propTypes = {
  closeDropdown: PropTypes__default["default"].func.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element)]).isRequired,
  parentRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  parentContainRef: PropTypes__default["default"].oneOfType([PropTypes__default["default"].func, PropTypes__default["default"].shape({
    current: PropTypes__default["default"].instanceOf(Element)
  })]).isRequired,
  spaceFromTrigger: PropTypes__default["default"].shape({
    x: PropTypes__default["default"].number,
    y: PropTypes__default["default"].number
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

  return /*#__PURE__*/React__default["default"].createElement("li", {
    className: index.getClassName([className, 'sendbird-dropdown__menu-item', disable ? 'disable' : '']),
    role: "menuitem",
    onClick: handleClickEvent,
    onKeyPress: e => {
      if (e.keyCode === ENTER) handleClickEvent(e);
    },
    tabIndex: 0
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: ui_Label.LabelTypography.SUBTITLE_2,
    color: disable ? ui_Label.LabelColors.ONBACKGROUND_4 : ui_Label.LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].element]).isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  disable: PropTypes__default["default"].bool
};
MenuItem.defaultProps = {
  className: '',
  disable: false
}; // Root components should be appended before ContextMenu is rendered

const MenuRoot = () => /*#__PURE__*/React__default["default"].createElement("div", {
  id: "sendbird-dropdown-portal"
});
const EmojiReactionListRoot = () => /*#__PURE__*/React__default["default"].createElement("div", {
  id: "sendbird-emoji-list-portal"
});
function ContextMenu(_ref2) {
  let {
    menuTrigger,
    menuItems
  } = _ref2;
  const [showMenu, setShowMenu] = React.useState(false);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-context-menu",
    style: {
      display: 'inline'
    }
  }, menuTrigger(() => setShowMenu(!showMenu)), showMenu && menuItems(() => setShowMenu(false)));
}
ContextMenu.propTypes = {
  menuTrigger: PropTypes__default["default"].func.isRequired,
  menuItems: PropTypes__default["default"].func.isRequired
};

exports.EmojiListItems = EmojiListItems;
exports.EmojiReactionListRoot = EmojiReactionListRoot;
exports.MenuItem = MenuItem;
exports.MenuItems = MenuItems;
exports.MenuRoot = MenuRoot;
exports["default"] = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
