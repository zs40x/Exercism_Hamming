var computeHamming = function(a, b) {
	
	var hammingDistance = 0;
	
	for(var i = 0; i <= a.length; i++) {
		if(a[i] != b[i])
			hammingDistance++;
	}
	
	return hammingDistance;
}

module.exports = computeHamming;