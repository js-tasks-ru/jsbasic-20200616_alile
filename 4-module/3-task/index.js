/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
  let rowsNum = table.rows.length;

  for (let i = 1; i < rowsNum; i++) { // Skip title of the table
    let row = table.rows[i];

    if (row.cells[3].hasAttribute('data-available')) {
      if (row.cells[3].getAttribute('data-available') == 'true') {
        row.classList.add('available');
      } else {
        row.classList.add('unavailable');
      }
    } else {
      row.setAttribute('hidden', true);
    }

    if (row.cells[2].textContent == 'm') {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    if (+row.cells[1].textContent < 18) {
      row.setAttribute('style', 'text-decoration: line-through');
    }
  }
}
