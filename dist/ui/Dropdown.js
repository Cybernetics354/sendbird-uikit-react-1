import React__default, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-af45308d.js';
import '../stringSet-3b6413f0.js';

function useOutsideAlerter(_ref) {
  let {
    ref,
    callback
  } = _ref;

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

const MenuItem = _ref => {
  let {
    children,
    onClick
  } = _ref;
  return /*#__PURE__*/React__default.createElement("li", {
    className: "sendbird-dropdown__menu-item",
    role: "menuitem",
    onClick: onClick,
    onKeyPress: e => {
      if (e.keyCode === 13) {
        onClick(e);
      }
    }
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-dropdown__menu-item__text",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, children));
};
MenuItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  onClick: PropTypes.func.isRequired
};
/**
 * For now, this is not a dropdown component that should be used inside forms
 * This should be used in a list or in a nav-bar where you can click
 * and a list of options opens up
 * Also closing the dropdown is a manual operation for now
 * More options, Aria labels etc should be implemented
 */

const DropdownMenu = _ref2 => {
  let {
    renderButton,
    renderItems
  } = _ref2;
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter({
    ref: wrapperRef,
    callback: () => setIsOpen(false)
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-dropdown",
    ref: wrapperRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-dropdown__button"
  }, renderButton(() => setIsOpen(!isOpen)
  /** toggle-menu */
  )), isOpen && /*#__PURE__*/React__default.createElement("ul", {
    className: "sendbird-dropdown__menu"
  }, renderItems(() => setIsOpen(false)
  /** close-menu */
  )));
};

DropdownMenu.propTypes = {
  renderButton: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired
};

export { MenuItem, DropdownMenu as default };
//# sourceMappingURL=Dropdown.js.map
