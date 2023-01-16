'use strict';

var React = require('react');
var MessageSearch_components_MessageSearchUI = require('./MessageSearch/components/MessageSearchUI.js');
var LocalizationContext = require('./LocalizationContext-06295289.js');
var ui_Icon = require('./ui/Icon.js');
var ui_IconButton = require('./ui/IconButton.js');
var ui_Label = require('./index-06ad9a23.js');
var ui_Loader = require('./ui/Loader.js');
var MessageSearch_context = require('./MessageSearch/context.js');
require('./ui/MessageSearchItem.js');
require('./tslib.es6-43d4c54c.js');
require('./index-8934b8f3.js');
require('./index-46a833a2.js');
require('./index-21673199.js');
require('./index-59877f2c.js');
require('./ui/Avatar.js');
require('./ui/ImageRenderer.js');
require('prop-types');
require('./uuid-3cedbe50.js');
require('./index-32ee0d93.js');
require('./ui/MessageSearchFileItem.js');
require('./stringSet-c0b7ef0b.js');
require('./_rollupPluginBabelHelpers-2157fc28.js');
require('./useSendbirdStateContext.js');
require('./withSendbird.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var COMPONENT_CLASS_NAME = 'sendbird-message-search-pannel';

function MessageSearchPannel(props) {
  var channelUrl = props.channelUrl,
      onResultClick = props.onResultClick,
      onCloseClick = props.onCloseClick,
      messageSearchQuery = props.messageSearchQuery,
      renderPlaceHolderError = props.renderPlaceHolderError,
      renderPlaceHolderLoading = props.renderPlaceHolderLoading,
      renderPlaceHolderNoString = props.renderPlaceHolderNoString,
      renderPlaceHolderEmptyList = props.renderPlaceHolderEmptyList,
      renderSearchItem = props.renderSearchItem;

  var _a = React.useState(''),
      searchString = _a[0],
      setSearchString = _a[1];

  var _b = React.useState(''),
      inputString = _b[0],
      setInputString = _b[1];

  var _c = React.useState(false),
      loading = _c[0],
      setLoading = _c[1];

  var stringSet = React.useContext(LocalizationContext.LocalizationContext).stringSet;
  var timeout = null;
  React.useEffect(function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      setSearchString(inputString);
      setLoading(true);
      timeout = null;
    }, 500);
  }, [inputString]);

  var handleOnChangeInputString = function (e) {
    setInputString(e.target.value);
  };

  var handleOnResultLoaded = function () {
    setLoading(false);
  };

  var handleOnClickResetStringButton = function (e) {
    e.stopPropagation();
    setInputString('');
    setSearchString('');
  };

  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__header")
  }, /*#__PURE__*/React__default["default"].createElement(ui_Label.Label, {
    className: "".concat(COMPONENT_CLASS_NAME, "__header__title"),
    type: ui_Label.LabelTypography.H_2,
    color: ui_Label.LabelColors.ONBACKGROUND_1
  }, stringSet.SEARCH_IN_CHANNEL), /*#__PURE__*/React__default["default"].createElement(ui_IconButton, {
    className: "".concat(COMPONENT_CLASS_NAME, "__header__close-button"),
    width: "32px",
    height: "32px",
    onClick: onCloseClick
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.CLOSE,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_1,
    width: "22px",
    height: "22px"
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container")
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__search-icon"),
    type: ui_Icon.IconTypes.SEARCH,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "24px",
    height: "24px"
  }), /*#__PURE__*/React__default["default"].createElement("input", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__input-area"),
    placeholder: stringSet.SEARCH,
    value: inputString,
    onChange: handleOnChangeInputString
  }), inputString && loading && /*#__PURE__*/React__default["default"].createElement(ui_Loader, {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__spinner"),
    width: "20px",
    height: "20px"
  }, /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    type: ui_Icon.IconTypes.SPINNER,
    fillColor: ui_Icon.IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  })), !loading && inputString && /*#__PURE__*/React__default["default"].createElement(ui_Icon["default"], {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__reset-input-button"),
    type: ui_Icon.IconTypes.REMOVE,
    fillColor: ui_Icon.IconColors.ON_BACKGROUND_3,
    width: "20px",
    height: "20px",
    onClick: handleOnClickResetStringButton
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__message-search")
  }, /*#__PURE__*/React__default["default"].createElement(MessageSearch_context.MessageSearchProvider, {
    channelUrl: channelUrl,
    searchString: searchString,
    onResultClick: onResultClick,
    onResultLoaded: handleOnResultLoaded,
    messageSearchQuery: messageSearchQuery
  }, /*#__PURE__*/React__default["default"].createElement(MessageSearch_components_MessageSearchUI.MessageSearchUI, {
    renderPlaceHolderError: renderPlaceHolderError,
    renderPlaceHolderLoading: renderPlaceHolderLoading,
    renderPlaceHolderNoString: renderPlaceHolderNoString,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList,
    renderSearchItem: renderSearchItem
  }))));
}

module.exports = MessageSearchPannel;
//# sourceMappingURL=MessageSearch.js.map
