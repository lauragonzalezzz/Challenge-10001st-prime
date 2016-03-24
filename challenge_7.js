'use strict';

function PrimeFinder(n) {
	var primeNumber = n;


	this.getPrimeNumber = function() {
		return primeNumber;
	};

} 

// PrimeFinder.prototype.getPrimeNumber = function(){};

module.exports = PrimeFinder;