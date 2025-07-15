let nameAsc = false;
let priceAsc = false;

function sortTable(colIndex) {
  const table = document.getElementById("premieTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.querySelectorAll("tr"));

  const asc = colIndex === 0 ? (nameAsc = !nameAsc) : (priceAsc = !priceAsc);
  const arrowName = document.getElementById("name-arrow");
  const arrowPrice = document.getElementById("price-arrow");

  rows.sort((a, b) => {
    let aText = a.children[colIndex].textContent.trim();
    let bText = b.children[colIndex].textContent.trim();

    if (colIndex === 1) {
      return asc ? aText - bText : bText - aText;
    } else {
      return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
    }
  });

  rows.forEach(row => tbody.appendChild(row));
  arrowName.textContent = nameAsc ? '▲' : '▼';
  arrowPrice.textContent = priceAsc ? '▲' : '▼';
}

function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("premieTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const firstCell = rows[i].getElementsByTagName("td")[0];
    if (firstCell) {
      const txtValue = firstCell.textContent || firstCell.innerText;
      rows[i].style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
    }
  }
}
