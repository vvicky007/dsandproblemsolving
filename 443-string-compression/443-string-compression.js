/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

		if(chars.length === 0) return 0;
	let start = 0,
		end = 0, 
		counter = 0, 
		currentChar = chars[0];

	while(end <= chars.length){
		if(currentChar !== chars[end]){
			let nums = counter.toString();
			let newString =  counter > 1 ? [currentChar, ...nums] : [currentChar];
			chars.splice(start,(end - start), ...newString);
			start += newString.length;
			end = start;
			currentChar = chars[end];
			counter = 0;
		}else{
			counter++;
			end++;
		}
	};

	return chars.length;
};