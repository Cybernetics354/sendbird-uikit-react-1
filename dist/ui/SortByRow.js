import React__default from 'react';
import PropTypes from 'prop-types';

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
      result.push( /*#__PURE__*/React__default.createElement("div", {
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), componentClassName].join(' '),
    style: {
      width: itemWidth * children.length,
      height: itemHeight
    }
  }, children);
}
SortByRow.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  maxItemCount: PropTypes.number.isRequired,
  itemWidth: PropTypes.number.isRequired,
  itemHeight: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired
};
SortByRow.defaultProps = {
  className: ''
};

export { SortByRow as default };
//# sourceMappingURL=SortByRow.js.map
