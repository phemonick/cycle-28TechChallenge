// const assert = require('chai').assert;
import { assert } from 'chai';
import rainDrop from '../src/primeFactor.js'

// const assert = chai.assert;



	describe("primeFactor", () => {

		describe("handle invalid input", ()=> {
			it("should display invalid input for string ", () => {
				assert.equal(myApp("name"), "undefined");

			});
		})

		describe("handle invalid input", ()=> {
			it("should display undefined for empty string", () => {
				assert.equal(myApp.(" "), "undefined");

			});
		})

		describe("handle valid input", ()=> {
			it("should display pling as 3 is a prime factor ", () => {
				assert.equal(myApp.factor(3), "pling");

			});
		})

		describe("handle valid input", ()=> {
			it("should display plang as 5 is a prime factor ", () => {
				assert.equal(myApp.factor(5), "plang");

			});
		})
		describe("handle valid input", ()=> {
			it("should display plong as 3 is a prime factor ", () => {
				assert.equal(myApp.factor(7), "plong");

			});
		})

		describe("handle valid input", ()=> {
			it("should display '34' as not knowing what to do ", () => {
				assert.equal(myApp.factor(34), 34);

			});
		})
		describe("handle valid input", ()=> {
			it("should display '50' as not knowing what to do ", () => {
				assert.equal(myApp.factor(50), 50);

			});
		})
		describe("handle valid input", ()=> {
			it("should return pingplang for 1755 ", () => {
				assert.equal(myApp.factor(1755), "plingplang");

			});
		})






	})