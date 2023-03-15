console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// init global variable/array basket set to empty
let basket = [];
// init global const maxItems set to 5
const maxItems = 5;

// create function addItem, which adds given string input to basket array, returns true
function addItem (item) {
    // add given item to basket array
    if (isFull() == false){
        basket.push(item);
        return true;
    }
    else if (isFull() == true) {
        return false;
    }
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
    return "Finshed";
}
console.log(listItems());

// create function empty, which emptys/resets the basket array
function empty () {
    basket.length = 0;
    return "Basket emptied";
}
console.log(empty());
addItem('chips');
addItem('cups');
addItem('blankets');
addItem('copper');
console.log(basket);


// creat function isFull, checks against maxItems if basket array is full
function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    else {
        return true;
    }
}

console.log("Checking if basket is full:", isFull());

// create function removeItem, to remove the given item from basket array. If no matching item is found within the array, return null

function removeItem(item) {
        for (let i = 0; i < basket.length; i++) {
            if (basket.includes(item) == true) {
                basket.splice(basket.indexOf([i]), 1);
                return item;
            }
            else {
                return null;
            }
        }
    }

console.log("Checking if removeItem works, should return blankets:", removeItem());
console.log(basket)