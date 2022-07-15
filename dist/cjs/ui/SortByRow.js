'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

const componentClassName = 'sendbird-sort-by-row';
function SortByRow(_ref) {
  let {
    className,
    maxItemCount,
    itemWidth,
    itemHeight,
    children
  } = _ref;

  if (children.length > maxItemCount) {
    const result = [];

    for (let i = 0; i < children.length; i += maxItemCount) {
      result.push( /*#__PURE__*/React__default["default"].createElement("div", {
        className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
        key: className + i,
        style: {
          width: itemWidth * maxItemCount,
          height: itemHeight
        }
      }, children.slice(i, i + maxItemCount)));
    }

    return result;
  }

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
    style: {
      width: itemWidth * children.length,
      height: itemHeight
    }
  }, children);
}
SortByRow.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]),
  maxItemCount: PropTypes__default["default"].number.isRequired,
  itemWidth: PropTypes__default["default"].number.isRequired,
  itemHeight: PropTypes__default["default"].number.isRequired,
  children: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].arrayOf(PropTypes__default["default"].element), PropTypes__default["default"].string, PropTypes__default["default"].arrayOf(PropTypes__default["default"].string)]).isRequired
};
SortByRow.defaultProps = {
  className: ''
};

module.exports = SortByRow;
//# sourceMappingURL=SortByRow.js.map
