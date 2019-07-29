// Select color input
const color = document['getElementById']('colorPicker');
// Select size input
const sizePicker = document['getElementById']('sizePicker');
const canvas = document['getElementById']('pixelCanvas');
const height = document['getElementById']('inputHeight')['value'];
const width = document['getElementById']('inputWidth')['value'];

makeGrid(height, width);

sizePicker['addEventListener']('submit', function() {
event['preventDefault']();

canvas['firstElementChild']['remove']();
let height = document['getElementById']('inputHeight')['value'];
let width = document['getElementById']('inputWidth')['value'];
// When size is submitted by the user, call makeGrid()
makeGrid(height, width);

});

function makeGrid(height, width) {
// Your code goes here!
for (let r = 0; r < height; r++){
  let row = canvas['insertRow']();
  for (let c = 0; c < width; c++){
    let cell = row['insertCell']();
  cell['addEventListener']('mousedown', function() {
  cell['style']['backgroundColor'] = color['value'];
    });
  }
}
}
