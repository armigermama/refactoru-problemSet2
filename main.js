

//#1 Write a function firstReverse that takes a single string parameter and 
//   returns the string in reverse order.

var firstReverse = function(str) {
	var s = str.length;
	var reverse = [];
	for (var i=0; i<=s; i++){
		reverse.push(str[s-i])
	} 
	return reverse.join('');
};

var firstReverse = function(str){
	var s = str.split('').reverse().join('');
	return s;
};


console.log(firstReverse('abcdefghij klmnop'));

//#2 Write a function swapCase that takes a single string parameter and 
//	 swaps the case of each character. 
//	 For example: if a string is "Hello World" the output should be "hELLO wORLD". 
//	 Let numbers and symbols stay the way they are.

// var swapCase = function(str){
// 	var strSwap = [];
// 	for (var j=0; j<str.length; j++){
// 		str[j] === str[j].toUpperCase() ?
// 			strSwap.push(str[j].toLowerCase()):
// 			strSwap.push(str[j].toUpperCase());
// 	}
// 	return strSwap.join('');
// };

var swapLetter = function(char){
	return char === char.toUpperCase() ?
		char.toLowerCase():
		char.toUpperCase();
}

var swapCase = function (str) { 
	return map(str, swapLetter).join('');
};


console.log(swapCase('Happy Birthday'));

//Bonus
//	 Write a function letterCount that takes a single string parameter and 
//	 returns the first word with the greatest number of repeated letters. 
//	 For example: "Today, is the greatest day ever!" should return greatest because 
//	 it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
//	 If there are no words with repeating letters return -1. 
//	 Words will be separated by single spaces.

var letterCount = function (str){
	var subLetter = str.split(' ');
	var countAry = [];
	var maxCount = 0;
	var maxWord = '';
	for (var i=0; i<subLetter.length; i++){
		var currentCount = 0;
		for (var j=0; j<subLetter[i].length; j++){
			var subStrLetter = subLetter[i].substr(j+1);
			if (subStrLetter.search(subLetter[i][j]) > 0){
				countAry.push(subLetter[i]);
				currentCount++;
			}
		}
		// console.log(currentCount);
		if (currentCount > maxCount){
			maxCount = currentCount;
			maxWord = subLetter[i];
		}
	}
	console.log(maxCount);
	// console.log(maxWord);
	// console.log(countAry);
	return maxCount === 0 ? -1: maxWord;

};

console.log(letterCount('Write a functio'));
console.log(letterCount('returns the first word with the greatest number of repeated letters'));
console.log(letterCount('returns the first word with the greatest number of repeated letters mississippi'));


