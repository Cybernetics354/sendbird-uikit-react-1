import React__default, { useContext } from 'react';
import Icon, { IconTypes, IconColors } from './Icon.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-96f2ca18.js';
import { a as LocalizationContext } from '../LocalizationContext-bdb56d81.js';
import 'prop-types';
import '../stringSet-1cad1dbf.js';
import '../index-8d5e2563.js';

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
