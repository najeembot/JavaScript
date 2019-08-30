// function for negation string  and checking the negation operator 

function NegationValue(negationString, tf) {
	switch (negationString) {
		case "!":
			if (tf === false) {
				return true;
			} else {
				return false;
			}
			break;
		case "!!":
		    if (tf === true) {
		    	return true;
		    } else {
		    	return false;
		    }
		    break;
		case "!!!":
		    if (tf === true) {
		    	return false;
		    } else {
		    	return true;
		    }
		    break;
		case "!!!!":
		    if (tf === true) {
		    	return true;
		    } else {
		    	return false;
		    }
		    break;
		case "!!!!!":
		    if (tf === true) {
		    	return false;
		    } else {
		    	return true;
		    }
		    break;
		case "!!!!!!":
		    if (tf === true) {
		    	return false;
		    } else {
		    	return true;
		    }
		    break;
		default: 
		    return false;
		    break;
	}
}

console.log(NegationValue("!", true));
console.log(NegationValue("!!", false));
console.log(NegationValue("!!!", true));
console.log(NegationValue("!!!!", false));
console.log(NegationValue("!!!!!", true));
console.log(NegationValue("!!!!!!", false));