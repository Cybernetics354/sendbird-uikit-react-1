import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { c as LabelStringSet, L as Label, a as LabelTypography, b as LabelColors } from '../index-53585fab.js';
import { a as LocalizationContext } from '../LocalizationContext-d3e49456.js';
import Icon, { IconTypes, IconColors } from './Icon.js';
import IconButton from './IconButton.js';
import ChannelAvatar from './ChannelAvatar.js';
import '../stringSet-49030004.js';
import '../index-a53c3ed1.js';
import '../_rollupPluginBabelHelpers-59897f6c.js';
import './Avatar.js';
import '../tslib.es6-4a4f5c58.js';
import './ImageRenderer.js';
import '../uuid-91011cda.js';
import '../utils-aa207dba.js';

const getChannelTitle = function () {
  var _channel$members;

  let channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let currentUserId = arguments.length > 1 ? arguments[1] : undefined;
  let stringSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LabelStringSet;

  if (!(channel !== null && channel !== void 0 && channel.name) && !(channel !== null && channel !== void 0 && channel.members)) {
    return stringSet.NO_TITLE;
  }

  if (channel !== null && channel !== void 0 && channel.name && channel.name !== 'Group Channel') {
    return channel.name;
  }

  if ((channel === null || channel === void 0 ? void 0 : (_channel$members = channel.members) === null || _channel$members === void 0 ? void 0 : _channel$members.length) === 1) {
    return stringSet.NO_MEMBERS;
  }

  return ((channel === null || channel === void 0 ? void 0 : channel.members) || []).filter(_ref => {
    let {
      userId
    } = _ref;
    return userId !== currentUserId;
  }).map(_ref2 => {
    let {
      nickname
    } = _ref2;
    return nickname || stringSet.NO_NAME;
  }).join(', ');
};

// delete

const noop = () => {};

function ChatHeader(props) {
  const {
    currentGroupChannel,
    currentUser,
    title,
    subTitle,
    isMuted,
    theme,
    showSearchIcon,
    onSearchClick,
    onActionClick
  } = props;
  const {
    userId
  } = currentUser;
  const {
    stringSet
  } = useContext(LocalizationContext);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header__left"
  }, /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    theme: theme,
    channel: currentGroupChannel,
    userId: userId,
    height: 32,
    width: 32
  }), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-chat-header__left__title",
    type: LabelTypography.H_2,
    color: LabelColors.ONBACKGROUND_1
  }, title || getChannelTitle(currentGroupChannel, userId, stringSet)), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-chat-header__left__subtitle",
    type: LabelTypography.BODY_1,
    color: LabelColors.ONBACKGROUND_2
  }, subTitle)), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-chat-header__right"
  }, (typeof isMuted === 'string' && isMuted === 'true' || typeof isMuted === 'boolean' && isMuted) && /*#__PURE__*/React__default.createElement(Icon, {
    className: "sendbird-chat-header__right__mute",
    type: IconTypes.NOTIFICATIONS_OFF_FILLED,
    width: "24px",
    height: "24px"
  }), showSearchIcon && /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-chat-header__right__search",
    width: "32px",
    height: "32px",
    onClick: onSearchClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.SEARCH,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  })), /*#__PURE__*/React__default.createElement(IconButton, {
    className: "sendbird-chat-header__right__info",
    width: "32px",
    height: "32px",
    onClick: onActionClick
  }, /*#__PURE__*/React__default.createElement(Icon, {
    type: IconTypes.INFO,
    fillColor: IconColors.PRIMARY,
    width: "24px",
    height: "24px"
  }))));
}
ChatHeader.propTypes = {
  /** Type: GroupChannel */
  currentGroupChannel: PropTypes.shape({
    members: PropTypes.arrayOf(PropTypes.shape({})),
    coverUrl: PropTypes.string
  }),

  /** Type: User */
  currentUser: PropTypes.shape({
    userId: PropTypes.string
  }),
  title: PropTypes.string,
  subTitle: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isMuted: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  theme: PropTypes.string,
  showSearchIcon: PropTypes.bool,
  onSearchClick: PropTypes.func,

  /** For clicking the info button */
  onActionClick: PropTypes.func
};
ChatHeader.defaultProps = {
  currentGroupChannel: {},
  currentUser: {},
  title: '',
  subTitle: '',
  isMuted: false,
  theme: 'light',
  showSearchIcon: false,
  onSearchClick: noop,
  onActionClick: noop
};

export { ChatHeader as default };
//# sourceMappingURL=ChatHeader.js.map
