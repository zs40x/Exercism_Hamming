var computeHammingDistance = function(s, t) {
	
	var hammingDistance = 0;
	
	if(s.length != t.length)
		throw new Error("DNA strands must be of equal length.");
	
	for(var i = 0; i <= s.length; i++) {
		if(s[i] != t[i])
			hammingDistance++;
	}
	
	return hammingDistance;
}

module.exports = computeHammingDistance;