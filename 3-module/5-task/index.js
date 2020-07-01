/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let wordsArray = str.split(" ").join(",").split(',');
  let numbersArray = [];

  wordsArray.forEach(item => {
    if (isFinite(item.trim())) {
      numbersArray.push(+item.trim());
    }
  })

  return {
    max: Math.max(...numbersArray),
    min: Math.min(...numbersArray)
  };
}
