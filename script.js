const gridContainer = document.querySelector('#gridContainer');
const setSizeButton = document.querySelector('.setSizeButton');
const clearButton = document.querySelector('.clearButton');

const setGridSize = () => {
  const customeGridSize = prompt();
  gridContainer.innerHTML = '';
  gridContainer.appendChild(gridGenerator(customeGridSize))
  refreshEventListner()
};

setSizeButton.onclick = () => setGridSize();

const DEFAULT_SIZE = 64;

function gridGenerator(gridSize) {
  const newGridElements = document.createElement('div')

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 1; j <= gridSize; j++) {
      let cell = document.createElement('div');
      cell.setAttribute(
        'style',
        `height: ${500 / gridSize}px; width: ${500 / gridSize}px`
      );
      cell.className = 'gridsquare';
      row.appendChild(cell);
    }
    newGridElements.appendChild(row);
  }

  return newGridElements;
}


console.log(gridGenerator(DEFAULT_SIZE));
gridContainer.appendChild(gridGenerator(DEFAULT_SIZE));
refreshEventListner()



clearButton.textContent = 'clear';
clearButton.onclick = () => {
  gridContainer.innerHTML = '';
  gridContainer.appendChild(gridGenerator(DEFAULT_SIZE));
  refreshEventListner()
};

function refreshEventListner () {
const cells = document.querySelectorAll('.gridsquare')
  cells.forEach(function(cell) {
    cell.addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'black'
    });
  })
}
