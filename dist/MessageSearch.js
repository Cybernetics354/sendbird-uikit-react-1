import React__default, { useState, useContext, useEffect } from 'react';
import { MessageSearchUI } from './MessageSearch/components/MessageSearchUI.js';
import { a as LocalizationContext } from './LocalizationContext-c6c43024.js';
import Icon, { IconTypes, IconColors } from './ui/Icon.js';
import IconButton from './ui/IconButton.js';
import { L as Label, a as LabelTypography, b as LabelColors } from './index-dd7d2c20.js';
import Loader from './ui/Loader.js';
import { MessageSearchProvider } from './MessageSearch/context.js';
import './ui/MessageSearchItem.js';
import './tslib.es6-5837fd36.js';
import './index-f9f73baa.js';
import './index-7ce5a58a.js';
import './index-eb0b4427.js';
import './index-c14a4189.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import 'prop-types';
import './uuid-bf348b66.js';
import './index-b12dead7.js';
import './ui/MessageSearchFileItem.js';
import './stringSet-bc59be04.js';
import './_rollupPluginBabelHelpers-5ef7889e.js';
import './useSendbirdStateContext.js';
import './withSendbird.js';

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

  var _a = useState(''),
      searchString = _a[0],
      setSearchString = _a[1];

  var _b = useState(''),
      inputString = _b[0],
      setInputString = _b[1];

  var _c = useState(false),
      loading = _c[0],
      setLoading = _c[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var timeout = null;
  useEffect(function () {
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: COMPONENT_CLASS_NAME
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__header")
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "".concat(COMPONENT_CLASS_NAME, "__header__title"),
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, stringSet.SEARCH_IN_CHANNEL), /*#__PURE__*/React__default.createElement(IconButton, {
    className: "".concat(COMPONENT_CLASS_NAME, "__header__close-button"),
    width: "32px",
    height: "32px",
    onClick: onCloseClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.CLOSE,
    fillColor: IconColors.ON_BACKGROUND_1,
    width: "22px",
    height: "22px"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container")
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__search-icon"),
    type: IconTypes.SEARCH,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "24px",
    height: "24px"
  }), /*#__PURE__*/React__default.createElement("input", {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__input-area"),
    placeholder: stringSet.SEARCH,
    value: inputString,
    onChange: handleOnChangeInputString
  }), inputString && loading && /*#__PURE__*/React__default.createElement(Loader, {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__spinner"),
    width: "20px",
    height: "20px"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SPINNER,
    fillColor: IconColors.PRIMARY,
    width: "20px",
    height: "20px"
  })), !loading && inputString && /*#__PURE__*/React__default.createElement(Icon, {
    className: "".concat(COMPONENT_CLASS_NAME, "__input__container__reset-input-button"),
    type: IconTypes.REMOVE,
    fillColor: IconColors.ON_BACKGROUND_3,
    width: "20px",
    height: "20px",
    onClick: handleOnClickResetStringButton
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(COMPONENT_CLASS_NAME, "__message-search")
  }, /*#__PURE__*/React__default.createElement(MessageSearchProvider, {
    channelUrl: channelUrl,
    searchString: searchString,
    onResultClick: onResultClick,
    onResultLoaded: handleOnResultLoaded,
    messageSearchQuery: messageSearchQuery
  }, /*#__PURE__*/React__default.createElement(MessageSearchUI, {
    renderPlaceHolderError: renderPlaceHolderError,
    renderPlaceHolderLoading: renderPlaceHolderLoading,
    renderPlaceHolderNoString: renderPlaceHolderNoString,
    renderPlaceHolderEmptyList: renderPlaceHolderEmptyList,
    renderSearchItem: renderSearchItem
  }))));
}

export { MessageSearchPannel as default };
//# sourceMappingURL=MessageSearch.js.map
