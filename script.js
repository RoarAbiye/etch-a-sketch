const gridContainer = document.querySelector('#gridContainer');
const setSizeButton = document.querySelector('.setSizeButton');
const clearButton = document.querySelector('.clearButton');
const drawingModeElement = document.getElementsByName('drawingMode');

const setGridSize = () => {
  const customeGridSize = prompt();
  gridContainer.innerHTML = '';
  gridContainer.appendChild(gridGenerator(customeGridSize));
  refreshEventListner('regular');
};

setSizeButton.onclick = () => setGridSize();

const DEFAULT_SIZE = 64;

function gridGenerator(gridSize) {
  const newGridElements = document.createElement('div');

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

gridContainer.appendChild(gridGenerator(DEFAULT_SIZE));
refreshEventListner('regular');

clearButton.onclick = () => {
  gridContainer.innerHTML = '';
  gridContainer.appendChild(gridGenerator(DEFAULT_SIZE));
  refreshEventListner('regular');
};

drawingModeElement.forEach((mode) => {
  mode.onclick = () => {
    refreshEventListner(mode.value);
    console.log('drawing mode changed to ', mode.value);
  };
});

function refreshEventListner(drawingMode) {
  if (drawingMode == 'regular') {
    const cells = document.querySelectorAll('.gridsquare');
    cells.forEach(function (cell) {
      cell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'black';
      });
    });
    console.log('drwing with ', drawingMode);
  } else if (drawingMode == 'random') {
    const cells = document.querySelectorAll('.gridsquare');
    cells.forEach(function (cell) {
      cell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = `rgb( ${Math.floor(
          Math.random() * 254 + 1
        )} ${Math.floor(Math.random() * 254 + 1)}, ${Math.floor(
          Math.random() * 254 + 1
        )} )`;
      });
    });
    console.log('drwing with ', drawingMode);
  }
}
