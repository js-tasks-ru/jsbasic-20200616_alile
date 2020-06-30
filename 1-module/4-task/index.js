/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  return isContains(str, '1XbeT') ||
    isContains(str, 'xxx');
}

function isContains(str, word) {
  return str.toLowerCase().includes(word.toLowerCase());
}

