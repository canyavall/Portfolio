
// Highest word count (45 mins)

// Write a function that given a string returns an array containing
// the most frequent word in it. If the top frequency is shared by more than
// one word, the array will contain all of them (the order is not relevant).
// Your implementation should exclude anything that is not a word
// (e.g. punctuation and numbers), and use lodash methods where possible.
// If the input is an empty string, return an empty array.
// If the input is not a string, an error should be thrown.
// TIP: You'll need to use a regex.

function highestWordCount (str) {
	if (str.legth == 0) return [];
	if (typeof str != 'string') return "Error";
	let arrayStr = str.replace(/[^A-Za-z ]/g, '').split(" ");

	let objectStr = {};
	let max = 0;
	for (var i = 0; i < arrayStr.length; i++) {
		if (objectStr[arrayStr[i]]){
			objectStr[arrayStr[i]]++
			if (objectStr[arrayStr[i]] > max ) max = objectStr[arrayStr[i]];
		}else{
			objectStr[arrayStr[i]] = 1;
		}
	}
	finalArray = [];
	for (var variable in objectStr) {
		if(variable != '' && objectStr[variable] == max) finalArray.push(variable);
	}
return finalArray;
}

console.time('someFunction');

highestWordCount("oh yes, no wait... yes!"); //yes

console.timeEnd('someFunction');
// console.log(highestWordCount("oh yes, no wait... yes!")); //yes
// console.log(highestWordCount("I See, mmm... I see, 2 and 2.")); //['I', 'see']
// console.log(highestWordCount("")); //[]
// console.log(highestWordCount(["asd"])); // Error
