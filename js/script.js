var floorboard = document.getElementById('floorBoard');

let divs = document.createElement('div');
divs.className = 'wrapper';

for (let i = 1; i < 9; i++) {
	let rowDiv = document.createElement('div');
	rowDiv.className = 'row';
	for (let j = 1; j < 9; j++) {
		let colDiv = document.createElement('div');
		colDiv.className = `col row${i} col${j}`;
		rowDiv.appendChild(colDiv);
	}
	divs.appendChild(rowDiv);
}
console.log(divs)
floorboard.appendChild(divs);

let battery = 1000, dirtyTilePoints = 250, movingPoints = 10, currentPoint = 0;
let blocks = [...document.querySelectorAll('.col')];
let status = ['clean', 'dirty'];

blocks.forEach(block => {

	let stateIndex = Math.floor(Math.random() * status.length)
	let stateOfTile = status[stateIndex] 
	block.classList.add(stateOfTile)

	if(block.className.match('dirty')) {
		currentPoint += dirtyTilePoints;
	} else {
		currentPoint -= movingPoints;
		battery--;
	}
});

document.querySelector('.battery').innerHTML = battery

document.querySelector('.points').innerHTML = currentPoint
