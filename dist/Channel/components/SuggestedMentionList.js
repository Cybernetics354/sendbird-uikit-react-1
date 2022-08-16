import React__default, { useRef, useContext, useEffect, useMemo, useState } from 'react';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-b990bb50.js';
import Icon, { IconTypes, IconColors } from '../../ui/Icon.js';
import Avatar from '../../ui/Avatar.js';
import { a as LocalizationContext } from '../../LocalizationContext-12a49911.js';
import { u as uuidv4 } from '../../uuid-5ca3889a.js';
import { u as useChannelContext } from '../../ChannelProvider-22857348.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import { U as USER_MENTION_TEMP_CHAR, M as MAX_USER_MENTION_COUNT, a as MAX_USER_SUGGESTION_COUNT } from '../../const-169ab7cc.js';
import { M as MessageInputKeys } from '../../const-8515f91a.js';
import 'prop-types';
import '../../stringSet-1980c44a.js';
import '../../tslib.es6-7262cbaf.js';
import '../../ui/ImageRenderer.js';
import '../../index-f2df602e.js';
import '../../UserProfileContext-82d9c025.js';
import '../../index-2580d704.js';
import '../../topics-de8d1abb.js';
import '../../index-5075c241.js';
import '../../_rollupPluginBabelHelpers-edb8daf2.js';
import '../../compareIds-01d1c3e1.js';
import '../../groupChannel-e13c550e.js';
import '../../__bundle-ba710a09-f2231fe3.js';
import '../../ui/ContextMenu.js';
import 'react-dom';
import '../../ui/SortByRow.js';
import '../../ui/ReactionButton.js';
import '../../withSendbird.js';

function SuggestedUserMentionItem(props) {
  var member = props.member,
      _a = props.isFocused,
      isFocused = _a === void 0 ? false : _a,
      parentScrollRef = props.parentScrollRef,
      onClick = props.onClick,
      onMouseOver = props.onMouseOver,
      onMouseMove = props.onMouseMove,
      renderUserMentionItem = props.renderUserMentionItem;
  var scrollRef = useRef(null);
  var _b = useContext(LocalizationContext).stringSet,
      stringSet = _b === void 0 ? {} : _b;
  useEffect(function () {
    var _a, _b, _c, _d, _e, _f, _g;

    if (isFocused) {
      if (((_a = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTop) >= ((_b = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _b === void 0 ? void 0 : _b.offsetTop)) {
        (_c = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _c === void 0 ? void 0 : _c.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (((_d = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _d === void 0 ? void 0 : _d.scrollTop) + ((_e = parentScrollRef === null || parentScrollRef === void 0 ? void 0 : parentScrollRef.current) === null || _e === void 0 ? void 0 : _e.clientHeight) <= ((_f = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _f === void 0 ? void 0 : _f.offsetTop)) {
        (_g = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _g === void 0 ? void 0 : _g.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      }
    }
  }, [isFocused]);
  var customMentionItem = useMemo(function () {
    if (renderUserMentionItem) {
      return /*#__PURE__*/React__default.createElement("div", {
        className: "sendbird-mention-suggest-list__user-item",
        onClick: function (event) {
          return onClick === null || onClick === void 0 ? void 0 : onClick({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        onMouseOver: function (event) {
          return onMouseOver === null || onMouseOver === void 0 ? void 0 : onMouseOver({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        onMouseMove: function (event) {
          return onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove({
            event: event,
            member: member,
            itemRef: scrollRef
          });
        },
        key: (member === null || member === void 0 ? void 0 : member.userId) || uuidv4(),
        ref: scrollRef
      }, renderUserMentionItem({
        user: member
      }));
    }
  }, [renderUserMentionItem]);

  if (customMentionItem) {
    return customMentionItem;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-mention-suggest-list__user-item ".concat(isFocused ? 'focused' : ''),
    onClick: function (event) {
      return onClick === null || onClick === void 0 ? void 0 : onClick({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    onMouseOver: function (event) {
      return onMouseOver === null || onMouseOver === void 0 ? void 0 : onMouseOver({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    onMouseMove: function (event) {
      return onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove({
        event: event,
        member: member,
        itemRef: scrollRef
      });
    },
    key: (member === null || member === void 0 ? void 0 : member.userId) || uuidv4(),
    ref: scrollRef
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    className: "sendbird-mention-suggest-list__user-item__avatar",
    src: member === null || member === void 0 ? void 0 : member.profileUrl,
    alt: "user-profile",
    width: "24px",
    height: "24px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-mention-suggest-list__user-item__nickname",
    type: LabelTypography.SUBTITLE_2,
    color: (member === null || member === void 0 ? void 0 : member.nickname) ? LabelColors.ONBACKGROUND_1 : LabelColors.ONBACKGROUND_3
  }, (member === null || member === void 0 ? void 0 : member.nickname) || (stringSet === null || stringSet === void 0 ? void 0 : stringSet.MENTION_NAME__NO_NAME)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-mention-suggest-list__user-item__user-id",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_2
  }, member === null || member === void 0 ? void 0 : member.userId));
}

var DEBOUNCING_TIME = 300;

function SuggestedMentionList(props) {
  var _a, _b, _c;

  var _d = props.targetNickname,
      targetNickname = _d === void 0 ? '' : _d,
      // memberListQuery,
  onUserItemClick = props.onUserItemClick,
      onFocusItemChange = props.onFocusItemChange,
      onFetchUsers = props.onFetchUsers,
      renderUserMentionItem = props.renderUserMentionItem,
      inputEvent = props.inputEvent,
      _e = props.ableAddMention,
      ableAddMention = _e === void 0 ? true : _e,
      _f = props.maxMentionCount,
      maxMentionCount = _f === void 0 ? MAX_USER_MENTION_COUNT : _f,
      _g = props.maxSuggestionCount,
      maxSuggestionCount = _g === void 0 ? MAX_USER_SUGGESTION_COUNT : _g;

  var _h = useSendbirdStateContext(),
      config = _h.config,
      stores = _h.stores;

  var logger = config.logger;
  var currentUserId = ((_c = (_b = (_a = stores === null || stores === void 0 ? void 0 : stores.sdkStore) === null || _a === void 0 ? void 0 : _a.sdk) === null || _b === void 0 ? void 0 : _b.currentUser) === null || _c === void 0 ? void 0 : _c.userId) || '';
  var currentGroupChannel = useChannelContext().currentGroupChannel;
  var scrollRef = useRef(null);
  var stringSet = useContext(LocalizationContext).stringSet;

  var _j = useState(null),
      timer = _j[0],
      setTimer = _j[1];

  var _k = useState(''),
      searchString = _k[0],
      setSearchString = _k[1];

  var _l = useState(''),
      lastSearchString = _l[0],
      setLastSearchString = _l[1];

  var _m = useState(null),
      currentUser = _m[0],
      setCurrentUser = _m[1];

  var _o = useState([]),
      currentMemberList = _o[0],
      setCurrentMemberList = _o[1];

  useEffect(function () {
    clearTimeout(timer);
    setTimer(setTimeout(function () {
      setSearchString(targetNickname);
    }, DEBOUNCING_TIME));
  }, [targetNickname]);
  useEffect(function () {
    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === MessageInputKeys.Enter) {
      if (currentMemberList.length > 0) {
        onUserItemClick(currentUser);
      }
    }

    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === MessageInputKeys.ArrowUp) {
      var currentUserIndex = currentMemberList.findIndex(function (member) {
        return (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId);
      });

      if (0 < currentUserIndex) {
        setCurrentUser(currentMemberList[currentUserIndex - 1]);
        onFocusItemChange(currentMemberList[currentUserIndex - 1]);
      }
    }

    if ((inputEvent === null || inputEvent === void 0 ? void 0 : inputEvent.key) === MessageInputKeys.ArrowDown) {
      var currentUserIndex = currentMemberList.findIndex(function (member) {
        return (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId);
      });

      if (currentUserIndex < currentMemberList.length - 1) {
        setCurrentUser(currentMemberList[currentUserIndex + 1]);
        onFocusItemChange(currentMemberList[currentUserIndex + 1]);
      }
    }
  }, [inputEvent]);
  /* Fetch member list */

  useEffect(function () {
    if (!(currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.createMemberListQuery)) {
      logger.warning('SuggestedMentionList: Creating member list query failed');
      return;
    }

    if (lastSearchString && searchString.indexOf(lastSearchString) === 0 && currentMemberList.length === 0) {
      // Don't need to request query again
      return;
    }

    var query = currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.createMemberListQuery({
      limit: maxSuggestionCount + 1,
      nicknameStartsWithFilter: searchString.slice(USER_MENTION_TEMP_CHAR.length)
    }); // Add member list query for customization

    query.next().then(function (memberList) {
      var suggestingMembers = memberList.filter(function (member) {
        return currentUserId !== (member === null || member === void 0 ? void 0 : member.userId);
      }).slice(0, maxSuggestionCount);

      if (suggestingMembers.length < 1) {
        logger.info('SuggestedMentionList: Fetched member list is empty');
      } else {
        logger.info('SuggestedMentionList: Fetching member list succeeded', {
          memberListQuery: query,
          memberList: suggestingMembers
        });
        setCurrentUser(suggestingMembers[0]);
      }

      setLastSearchString(searchString);
      onFetchUsers(suggestingMembers);
      setCurrentMemberList(suggestingMembers);
    }).catch(function (error) {
      if (error) {
        logger.error('SuggestedMentionList: Fetching member list failed', error);
      }
    });
  }, [currentGroupChannel === null || currentGroupChannel === void 0 ? void 0 : currentGroupChannel.url, searchString]);

  if (!ableAddMention && currentMemberList.length === 0) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-mention-suggest-list",
    key: "sendbird-mention-suggest-list",
    ref: scrollRef
  }, ableAddMention && (currentMemberList === null || currentMemberList === void 0 ? void 0 : currentMemberList.map(function (member) {
    return /*#__PURE__*/React__default.createElement(SuggestedUserMentionItem, {
      key: (member === null || member === void 0 ? void 0 : member.userId) || uuidv4(),
      member: member,
      isFocused: (member === null || member === void 0 ? void 0 : member.userId) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userId),
      parentScrollRef: scrollRef,
      onClick: function (_a) {
        var member = _a.member;
        onUserItemClick(member);
      },
      onMouseOver: function (_a) {
        var member = _a.member;
        setCurrentUser(member);
      },
      renderUserMentionItem: renderUserMentionItem
    });
  })), !ableAddMention && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-mention-suggest-list__notice-item"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-mention-suggest-list__notice-item__icon",
    type: IconTypes.INFO,
    fillColor: IconColors.ON_BACKGROUND_2,
    width: "20px",
    height: "20px"
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-mention-suggest-list__notice-item__text",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_2
  }, stringSet.MENTION_COUNT__OVER_LIMIT.replace('%d', maxMentionCount))));
}

export { SuggestedMentionList as default };
//# sourceMappingURL=SuggestedMentionList.js.map
