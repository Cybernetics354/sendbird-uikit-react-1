import React__default, { useRef, useState, useCallback } from 'react';
import ContextMenu, { MenuItems } from './ContextMenu.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-a401bc58.js';
import ConnectedUserProfile from './UserProfile.js';
import useSendbirdStateContext from '../useSendbirdStateContext.js';
import 'prop-types';
import '../index-ee45e5fc.js';
import '../tslib.es6-1d5f2fa9.js';
import '../_rollupPluginBabelHelpers-a25c3f8a.js';
import 'react-dom';
import './SortByRow.js';
import '../stringSet-e139b667.js';
import '../LocalizationContext-e63b92dd.js';
import '../index-e851fa9b.js';
import '../withSendbird.js';
import '../sendbirdSelectors.js';
import '../topics-f928ee3e.js';
import '../utils-c794f866.js';
import './Avatar.js';
import './ImageRenderer.js';
import './Icon.js';
import '../uuid-6e50e4c4.js';
import '../index-b422234e.js';

function MentionLabel(props) {
  var _a, _b, _c;

  var mentionTemplate = props.mentionTemplate,
      mentionedUserId = props.mentionedUserId,
      mentionedUserNickname = props.mentionedUserNickname,
      isByMe = props.isByMe;
  var mentionRef = useRef();
  var sendbirdState = useSendbirdStateContext();
  var userId = (_a = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.config) === null || _a === void 0 ? void 0 : _a.userId;
  var sdk = (_c = (_b = sendbirdState === null || sendbirdState === void 0 ? void 0 : sendbirdState.stores) === null || _b === void 0 ? void 0 : _b.sdkStore) === null || _c === void 0 ? void 0 : _c.sdk;
  var amIBeingMentioned = userId === mentionedUserId;

  var _d = useState(),
      user = _d[0],
      setUser = _d[1];

  var fetchUser = useCallback(function (toggleDropdown) {
    if (user) {
      toggleDropdown();
    }

    var query = sdk.createApplicationUserListQuery({
      userIdsFilter: [mentionedUserId]
    });
    query.next().then(function (members) {
      if ((members === null || members === void 0 ? void 0 : members.length) > 0) {
        setUser(members[0]);
      }

      toggleDropdown();
    });
  }, [sdk, mentionedUserId]);
  return /*#__PURE__*/React__default.createElement(ContextMenu, {
    menuTrigger: function (toggleDropdown) {
      return /*#__PURE__*/React__default.createElement("a", {
        className: "\n            sendbird-word__mention\n            ".concat(amIBeingMentioned ? 'sendbird-word__mention--me' : '', "\n          "),
        onClick: function () {
          return fetchUser(toggleDropdown);
        },
        ref: mentionRef
      }, /*#__PURE__*/React__default.createElement(Label, {
        type: LabelTypography.CAPTION_1,
        color: isByMe ? LabelColors.ONCONTENT_1 : LabelColors.ONBACKGROUND_1
      }, "".concat(mentionTemplate).concat(mentionedUserNickname)));
    },
    menuItems: function (closeDropdown) {
      return /*#__PURE__*/React__default.createElement(MenuItems
      /**
      * parentRef: For catching location(x, y) of MenuItems
      * parentContainRef: For toggling more options(menus & reactions)
      */
      , {
        parentRef: mentionRef,
        parentContainRef: mentionRef,
        closeDropdown: closeDropdown,
        style: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }, /*#__PURE__*/React__default.createElement(ConnectedUserProfile, {
        user: user,
        onSuccess: closeDropdown
      }));
    }
  });
}

export { MentionLabel as default };
//# sourceMappingURL=MentionLabel.js.map
