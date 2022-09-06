'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var ui_Label = require('../index-2dfdb9de.js');
require('../stringSet-c8c286da.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function AdminMessage(_ref) {
  let {
    className,
    message
  } = _ref;

  if (!(message.isAdminMessage || message.messageType) || !message.isAdminMessage() || message.messageType !== 'admin') {
    return null;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-admin-message'].join(' ')
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "sendbird-admin-message__text",
    type: ui_Label.LabelTypography.CAPTION_2,
    color: ui_Label.LabelColors.ONBACKGROUND_2
  }, message.message));
}
AdminMessage.propTypes = {
  /** type: AdminMessage */
  message: PropTypes__default["default"].shape({
    message: PropTypes__default["default"].string,
    messageType: PropTypes__default["default"].string,
    isAdminMessage: PropTypes__default["default"].func
  }),
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)])
};
AdminMessage.defaultProps = {
  message: {},
  className: ''
};

module.exports = AdminMessage;
//# sourceMappingURL=AdminMessage.js.map
