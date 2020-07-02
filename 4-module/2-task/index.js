/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let rowsNum = table.rows.length;

  for (let i = 0; i < rowsNum; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
