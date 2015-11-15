var computeHammingDistance = function(s, t) {
		
	if(areStrandLengthsNotEqual(s,t))
		throw new Error("DNA strands must be of equal length.");

	return checkStrandsPosition(s, t, 0, 0);
}

function areStrandLengthsNotEqual(s, t) {
	return (s.length != t.length) ? true : false;
}

function checkStrandsPosition(s, t, i, hammingDist) {
	return (i == s.length) 
		? hammingDist 
		: checkStrandsPosition(s, t, i + 1, incrementIfMutation(s,t,i,hammingDist))
}
	
function incrementIfMutation(s, t, i, hammingDist) {
	return (s[i] != t[i]) ? ++hammingDist : hammingDist;
}

module.exports = computeHammingDistance;