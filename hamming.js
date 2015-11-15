var computeHamming = function(a, b) {
	
	var hammingDistance = 0;
	
	if(a.length != b.length)
		throw new Error("DNA strands must be of equal length.");
	
	for(var i = 0; i <= a.length; i++) {
		if(a[i] != b[i])
			hammingDistance++;
	}
	
	return hammingDistance;
}

module.exports = computeHamming;