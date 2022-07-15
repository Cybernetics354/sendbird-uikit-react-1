'use strict';

var React = require('react');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

/*
  ImageRenderer displays image with url or source
  it checks if the source exist with img tag first
  if it exists onLoad is called, if not onError is called
  and those properties switch img tag to real purposing element
*/
// TODO: Set up the official constant of width and height with DesignTeam

function ImageRenderer(_ref) {
  let {
    className,
    url,
    alt,
    width,
    height,
    fixedSize,
    defaultComponent,
    circle,
    placeHolder,
    // a function returing JSX / (style) => Element
    onLoad,
    onError
  } = _ref;
  const [showDefaultComponent, setShowDefaultComponent] = React.useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = React.useState(true);
  const DefaultComponent = React.useMemo(() => {
    if (typeof defaultComponent === 'function') {
      return defaultComponent();
    }

    return defaultComponent;
  }, [defaultComponent]);
  const PlaceHolder = React.useMemo(() => {
    if (placeHolder && typeof placeHolder === 'function') {
      return placeHolder({
        style: {
          width: '100%',
          minWidth: width,
          maxWidth: fixedSize ? width : '400px',
          height,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
    }

    return null;
  }, [placeHolder]);
  const HiddenImageLoader = React.useMemo(() => {
    setShowDefaultComponent(false); // reset the state when url is changed

    return /*#__PURE__*/React__default["default"].createElement("img", {
      className: "sendbird-image-renderer__hidden-image-loader",
      src: url,
      alt: alt,
      onLoad: () => {
        setShowPlaceHolder(false);
        onLoad();
      },
      onError: () => {
        setShowDefaultComponent(true);
        onError();
      }
    });
  }, [url]);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: [...(Array.isArray(className) ? className : [className]), 'sendbird-image-renderer'].join(' '),
    style: {
      width: '100%',
      minWidth: width,
      maxWidth: fixedSize ? width : '400px',
      height
    }
  }, showPlaceHolder && PlaceHolder, showDefaultComponent ? DefaultComponent : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "sendbird-image-renderer__image",
    style: {
      width: '100%',
      minWidth: width,
      maxWidth: fixedSize ? width : '400px',
      height,
      position: 'absolute',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${url})`,
      borderRadius: circle ? '50%' : null
    }
  }), HiddenImageLoader);
}
ImageRenderer.propTypes = {
  className: PropTypes__default["default"].oneOfType([PropTypes__default["default"].arrayOf(PropTypes__default["default"].string), PropTypes__default["default"].string]),
  url: PropTypes__default["default"].string.isRequired,
  alt: PropTypes__default["default"].string,
  width: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  height: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number]),
  fixedSize: PropTypes__default["default"].bool,
  defaultComponent: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func]),
  placeHolder: PropTypes__default["default"].func,
  circle: PropTypes__default["default"].bool,
  onLoad: PropTypes__default["default"].func,
  onError: PropTypes__default["default"].func
};
ImageRenderer.defaultProps = {
  className: '',
  defaultComponent: null,
  placeHolder: null,
  alt: '',
  width: null,
  height: null,
  fixedSize: false,
  circle: false,
  onLoad: () => {},
  onError: () => {}
};

module.exports = ImageRenderer;
//# sourceMappingURL=ImageRenderer.js.map
