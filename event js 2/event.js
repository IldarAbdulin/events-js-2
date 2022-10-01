// 1
// document.addEventListener('DOMContentLoaded' , function() {
//     let div = document.querySelector('#test-div'); 
//     let img = document.querySelector('#test-img');

//     console.log(div.textContent);
//     console.log(getComputedStyle(img).width);
// });

// document.addEventListener('load' , function() {
//     let div = document.querySelector('#test-div'); 
//     let img = document.querySelector('#test-img');

//     console.log(div.textContent);
//     console.log(getComputedStyle(img).width);
// })



// 2
// let div = document.querySelector('#testDiv');
// div.addEventListener('mouseover' , mouseOverHandler);
// div.addEventListener('mouseout' , mouseOutHandler);
// div.addEventListener('mousemove' , mouseMoveHandler);

// function mouseOverHandler() {
//     div.style.background = 'orange';
// }
// function mouseOutHandler() {
//     div.style.background = 'green';
// }
// function mouseMoveHandler(e) {
//     let message = `X: ${e.clientX} , Y: ${e.clientY}`;
//     div.textContent = message
// }



// 3
// let testButton = document.querySelector('#testBtn');
// let resetButton = document.querySelector('#resetBtn');
// let output = document.querySelector('#output');

// resetButton.addEventListener('click' , function() {
//     output.innerHTML = '';
// })

// testButton.addEventListener('mousedown' , function(e) {
//     output.innerHTML += 'click which :' + e.which + '<br />';
// })

// testButton.addEventListener('mouseup' , function(e) {
//     output.innerHTML += 'mouseup which :' + e.which + '<br />'
// })


//4
let output = document.querySelector('#output');

document.addEventListener('keydown' , function(e) {
    let message = `keydowm (Code = ${e.code} , Key = ${e.key})`;
    output.innerHTML = message;
});

document.addEventListener('keyup' , function(e) {
    let message = `keyup (Code = ${e.code} , Key = ${e.key})`;
    output.innerHTML = message;
    console.log(e)
})