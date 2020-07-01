/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = [];
  let length = users.length;
  users.forEach(item => {
      if (item.age <= age) {
        result.push(item.name + ', ' + item.balance);
      }
    }
  )
  return result.join('\n');
}
