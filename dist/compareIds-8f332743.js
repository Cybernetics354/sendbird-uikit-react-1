const isEmpty = val => val === null || val === undefined; // Some Ids return string and number inconsistently
// only use to comapre IDs


function compareIds (a, b) {
  if (isEmpty(a) || isEmpty(b)) {
    return false;
  }

  const aString = a.toString();
  const bString = b.toString();
  return aString === bString;
}

export { compareIds as c };
//# sourceMappingURL=compareIds-8f332743.js.map
