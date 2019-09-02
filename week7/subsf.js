function subsf(warray) {
	let nth = "";
	for (var i=0; i < warray.length; i++) {
		nth += warray[i].slice(warray[i].indexOf(0, "nth"), warray[i].indexOf(0, "nth") + 3);
	}
	return nth;
}
console.log(subsf(['feranth', 'clanth', 'sizanth']));