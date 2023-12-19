/* MAIN LOGIC */
//Test 1 Sets cats to default array
const cats = []
arrayReset()

//Test 2. Destructively push a cat name, reset the array
destructivelyAppendCat()
arrayReset()

//Test 3. Destructively prepend a cat name to the beginnig if the array
destructivelyPrependCat()
arrayReset()

//Test 4. Destructively remove the last cat
destructivelyRemoveLastCat()
arrayReset()

//Test 5. Destructively remove the first cat
destructivelyRemoveFirstCat()
arrayReset()

//Test 6. Appends a cat to the cats array and returns a new array, leaving the cats array unchanged
// appendCat(cats)
appendCat()
arrayReset()

//Test 7. Prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
prependCat()
arrayReset()

//Test 8. Removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
removeLastCat()
arrayReset()

//Test 9.  Removes the first cat in the cats array and returns a new array, leaving the cats array unchanged
removeFirstCat()
arrayReset()


/* FUNCTIONS */

/*Function that destructively pushes Ralph to the main array*/
function destructivelyAppendCat(cat){
    cats.push(cat)
}

/* Create a function that destructively pushes a cat name to the main array */
function destructivelyPrependCat(cat){
    cats.unshift(cat)
}

/* Create a function that destructively removed last cat name from the main array */
function destructivelyRemoveLastCat(cat){
    cats.pop(cat)
}

/* Create a function that destructively removed first cat name from the main array */
function destructivelyRemoveFirstCat(cat){
    cats.shift(cat)
}

/* Create a function that appends a cat to the cats array and returns a new array, leaving the cats array unchanged */
function appendCat(cat){
    const copyCats = [...cats]
    copyCats.push(cat)
    return copyCats
}

/* Create a function that removes the last cat in the cats array and returns a new array, leaving the cats array unchanged */
function removeLastCat(cat){
    const copyCats = [...cats]
    copyCats.pop(cat)
    return copyCats
}

/* Create a function that removes the first cat in the cats array and returns a new array, leaving the cats array unchanged */
function removeFirstCat(cat){
    const copyCats = [...cats]
    copyCats.shift(cat)
    return copyCats
}


/* Create a function that prepends a cat to the cats array and returns a new array, leaving the cats array unchanged */
function prependCat(cat){
    const copyCats = [...cats]
    copyCats.unshift(cat)
    return copyCats
}

/* Create a function that will reset the array before each function */
function arrayReset(){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}