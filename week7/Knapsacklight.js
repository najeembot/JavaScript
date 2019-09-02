let value1, weight1, value2, weight2, maxW;

function knapsackl(value1, weight1, value2, weight2, maxW) {
	if ((weight1 + weight2) <= maxW) {
		console.log("You are strong enough to carray both!");
	} else if(weight1 > maxW || weight2 > maxW) {
		console.log("Unfortunately you are not strong enough to carry any of these items!");
	} else if (weight1 <= maxW || weight2 <= maxW) {
		console.log("You can only carry one item!");
	}
}
knapsackl(4, 5, 4, 6, 10);