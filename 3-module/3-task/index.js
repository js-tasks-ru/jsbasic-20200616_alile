/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let result = '';
  let upperWordsArray = [];
  let words = str.split('-');

  upperWordsArray.push(words[0]);
  words.forEach((item, index) => {
      if (item[0] !== undefined && index !== 0) {
        upperWordsArray.push(item[0].toUpperCase() + item.slice(1));
      }
    }
  );
  return upperWordsArray.join('');
}
