/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries){
    if (salaries[key] !== undefined && isFinite(salaries[key])){
      sum += Number(salaries[key]);
    }
  }

  return sum;
}
