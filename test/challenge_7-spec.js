var PrimeFinder = require('../challenge_7.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();



//PRIMEFINDER MODULE FUNCTION
describe('PrimeFinder', function() {
	var pf = new PrimeFinder();

	it('should be a function', function() {
		expect(PrimeFinder).to.be.a('function');
	});

	// GETPRIMENUMBER FUNCTION
	describe('getPrimeNumber', function() {
		
		it('should be a function', function() {
			expect(pf.getPrimeNumber).to.be.a('function');
		});

		it('should not be a function on PrimeFinder', function() {
			expect(PrimeFinder.getPrimeNumber).to.be.undefined;
		});



	});




});

// describe the class PrimeFinder

