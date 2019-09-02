function msw(word1, word2) {
	let loopcount = (word1.length > word2.length) ? word1.length : word2.length;
	let Difc = "";
	for (var i = 0; i < loopcount; i++) {
		if (word1.charAt(i) != word2.charAt(i)) {
			Difc += word2.charAt(i);
			
		} 
	}
	if (Difc.length > 1) {
		return false;
	} else {
		return true;
	}
	
}

console.log(msw("world", "word"));