'use strict';

var OpenChannelMessageStatusTypes = {
  NONE: 'none',
  PENDING: 'pending',
  FAILED: 'failed',
  CANCELED: 'canceled',
  SUCCEEDED: 'succeeded'
};
var getSenderFromMessage = function (message) {
  // @ts-ignore
  return message.sender || message._sender;
};
var checkIsSent = function (status) {
  return status === OpenChannelMessageStatusTypes.SUCCEEDED;
};
var checkIsPending = function (status) {
  return status === OpenChannelMessageStatusTypes.PENDING;
};
var checkIsFailed = function (status) {
  return status === OpenChannelMessageStatusTypes.FAILED;
};
var checkIsByMe = function (message, userId) {
  return getSenderFromMessage(message).userId === userId;
};
var isFineCopy = function (_a) {
  var _b;

  var message = _a.message;
  return (message === null || message === void 0 ? void 0 : message.messageType) === 'user' && ((_b = message === null || message === void 0 ? void 0 : message.message) === null || _b === void 0 ? void 0 : _b.length) > 0;
};
var isFineResend = function (_a) {
  var message = _a.message,
      status = _a.status,
      userId = _a.userId;
  return checkIsByMe(message, userId) && checkIsFailed(status) // @ts-ignore
  && (message === null || message === void 0 ? void 0 : message.isResendable());
};
var isFineEdit = function (_a) {
  var message = _a.message,
      status = _a.status,
      userId = _a.userId;
  return checkIsByMe(message, userId) && checkIsSent(status);
};
var isFineDelete = function (_a) {
  var message = _a.message,
      userId = _a.userId;
  return checkIsByMe(message, userId);
};
var showMenuTrigger = function (props) {
  var message = props.message,
      status = props.status,
      userId = props.userId; // @ts-ignore

  if (message.messageType === 'user') {
    return isFineDelete({
      message: message,
      status: status,
      userId: userId
    }) || isFineEdit({
      message: message,
      status: status,
      userId: userId
    }) // @ts-ignore
    || isFineCopy({
      message: message,
      status: status,
      userId: userId
    }) || isFineResend({
      message: message,
      status: status,
      userId: userId
    });
  } else {
    return isFineDelete({
      message: message,
      status: status,
      userId: userId
    }) || isFineResend({
      message: message,
      status: status,
      userId: userId
    });
  }
};

exports.checkIsByMe = checkIsByMe;
exports.checkIsFailed = checkIsFailed;
exports.checkIsPending = checkIsPending;
exports.checkIsSent = checkIsSent;
exports.getSenderFromMessage = getSenderFromMessage;
exports.isFineCopy = isFineCopy;
exports.isFineDelete = isFineDelete;
exports.isFineEdit = isFineEdit;
exports.isFineResend = isFineResend;
exports.showMenuTrigger = showMenuTrigger;
//# sourceMappingURL=openChannelUtils-b746e93f.js.map
