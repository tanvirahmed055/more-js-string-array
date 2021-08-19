//৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে।

const numbersArray = [25, 67, 87, 78, 88, 38, 83, 28, 94];

const sortedNumbersArray = numbersArray.sort(function (a, b) {
    return a - b;
});

console.log(sortedNumbersArray);

//Output
// [
//   25, 28, 38, 67, 78,
//   83, 87, 88, 94
// ]



//-------------------------------------
//-------------------------------------

// const numbersArray = [25, 67, 87, 78, 88, 38, 83, 28, 94];

// const sortedNumbersArray = numbersArray.sort(function (a, b) {
//     return b - a;
// });

// console.log(sortedNumbersArray);


//Output
// [
//     94, 88, 87, 83, 78,
//     67, 38, 28, 25
//   ]
