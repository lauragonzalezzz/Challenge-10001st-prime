var PrimeFinder = require('../challenge_7.js');
var chai = require('chai');
var expect = chai.expect;
chai.should();



//PRIME FINDER MODULE FUNCTION
describe('PrimeFinder', function() {
	var pf = new PrimeFinder();

	it('should be a function', function() {
		expect(PrimeFinder).to.be.a('function');
	});

	// GET PRIME NUMBER FUNCTION
	describe('getPrimeNumber', function() {
		
		it('should be a function', function() {
			expect(pf.getPrimeNumber).to.be.a('function');
		});

		it('should not be a function on PrimeFinder', function() {
			expect(PrimeFinder.getPrimeNumber).to.be.undefined;
		});

		it('should return a number', function() {
			expect(pf.getPrimeNumber()).to.be.a('number');
		});

		it('should return a prime number', function() {
			var pf2 = new PrimeFinder(2);
			expect(pf2.getPrimeNumber()).to.equal(3);
			var pf3 = new PrimeFinder(3);
			expect(pf3.getPrimeNumber()).to.equal(5);
			var pf4 = new PrimeFinder(6);
			expect(pf4.getPrimeNumber()).to.equal(13);
		});

		
	});




});

// describe the class PrimeFinder

