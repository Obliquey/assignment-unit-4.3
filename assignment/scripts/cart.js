console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// init global variable/array basket, empty
let basket = [];

// create function addItem, which adds given string input to basket array, returns true
function addItem (item) {
    // add given item to basket array
    basket.push(item);
    return true;
}
addItem('chips');
addItem('carrots');

console.log("Testing addItem, should return true:", addItem('cheese'));
console.log('What is in my basket?', basket);


// create function listItems, which loops over basket array and lists each individual item in array
function listItems() {
    // loop through basket array
    for (item of basket) {
        // print individual item in array
        console.log(item);
    }
}
console.log(listItems());
