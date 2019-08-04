// Select color input
const color = document['getElementById']('colorPicker');
// Select size input
const sizePicker = document['getElementById']('sizePicker');
const canvas = document['getElementById']('pixelCanvas');
const height = document['getElementById']('inputHeight')['value'];
const width = document['getElementById']('inputWidth')['value'];

makeGrid(height, width);

sizePicker['addEventListener']('submit', function () {
	event['preventDefault']();

	canvas['firstElementChild']['remove']();
	let height = document['getElementById']('inputHeight')['value'];
	let width = document['getElementById']('inputWidth')['value'];
	// When size is submitted by the user, call makeGrid()
	makeGrid(height, width);

});

/**
 * @desc create a grid of squares
 * @param int $height - number of squares representing the height of the grid
 * @param int $width - number of squares representing the width of the grid
 * loop over and insert each row
 * loop over and insert each cell
 * add event listener for each mouse click on cells
 * add cell color option per user's selection
 */
function makeGrid(height, width) {
	for (let r = 0; r < height; r++) {
		let row = canvas['insertRow']();
		for (let c = 0; c < width; c++) {
			let cell = row['insertCell']();
			cell['addEventListener']('mousedown', function () {
				cell['style']['backgroundColor'] = color['value'];
			});
		}
	}
}
