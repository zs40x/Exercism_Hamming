var computeHammingDistance = function(s, t) {
		
	if(areStrandLengthsNotEqual(s,t))
		throw new Error("DNA strands must be of equal length.");
	
	return forStrands(s, t, incrementIfMutation);
}

function areStrandLengthsNotEqual(s, t) {
	return (s.length != t.length) ? true : false;
}

function forStrands(s, t, increment) {
	var hammingDistance = 0;
	
	for(var i = 0; i <= s.length; i++ ) {
		hammingDistance += increment(s, t, i);
	}
	
	return hammingDistance;
}
	
function incrementIfMutation(s, t, i) {
	if(s[i] != t[i])
		return 1;
	return 0;
}

module.exports = computeHammingDistance;