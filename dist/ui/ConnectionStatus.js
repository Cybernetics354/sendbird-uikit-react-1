import React__default, { useContext } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-19cce0bb.js';
import { a as LocalizationContext } from '../LocalizationContext-f2486c30.js';
import 'prop-types';
import '../stringSet-5c50e96e.js';
import '../index-bfc04e6e.js';

function ConnectionStatus() {
  const {
    stringSet
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-connection-status"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.TRYING_TO_CONNECT), /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.DISCONNECTED,
    fillColor: IconColors.SENT,
    width: "14px",
    height: "14px"
  }));
}

export { ConnectionStatus as default };
//# sourceMappingURL=ConnectionStatus.js.map