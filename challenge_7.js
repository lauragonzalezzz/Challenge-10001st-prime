'use strict';

function PrimeFinder(n) {
	var number = n;

	this.getPrimeNumber = function() {
		var primeArray = [];
		
		// while (primeArray.length !== number)
		// 	for (var i = 0; i < number; i++) {
		// 		if (number % i === 0) {
		// 			return false;
		// 		};
		// 	};
			primeArray.push(number);
		// } // Ends WHILE loop
		console.log('primeArray',primeArray);
		return primeNumber;
	};

};

// PrimeFinder.prototype.getPrimeNumber = function(){};

module.exports = PrimeFinder;
