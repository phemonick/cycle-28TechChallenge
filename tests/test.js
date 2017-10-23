// const assert = require('chai').assert;
import { assert } from 'chai';
import rainDrop from '../src/primeFactor.js'

// const assert = chai.assert;



	describe("primeFactor", () => {

		describe("handle invalid input", ()=> {
			it("should display invalid input for string ", () => {
				assert.equal(rainDrop("name"), "undefined");

			});
		})

		describe("handle invalid input", ()=> {
			it("should display undefined for empty string", () => {
				assert.equal(rainDrop(" "), "undefined");

			});
		})

		describe("handle valid input", ()=> {
			it("should display pling as 3 is a prime factor ", () => {
				assert.equal(rainDrop(3), "pling");

			});
		})

		describe("handle valid input", ()=> {
			it("should display plang as 5 is a prime factor ", () => {
				assert.equal(rainDrop(5), "plang");

			});
		})
		describe("handle valid input", ()=> {
			it("should display plong as 3 is a prime factor ", () => {
				assert.equal(rainDrop(7), "plong");

			});
		})

		describe("handle valid input", ()=> {
			it("should display '34' as not knowing what to do ", () => {
				assert.equal(rainDrop(34), 34);

			});
		})
		describe("handle valid input", ()=> {
			it("should display '50' as not knowing what to do ", () => {
				assert.equal(rainDrop(50), 50);

			});
		})
		describe("handle valid input", ()=> {
			it("should display plingplang  ", () => {
				assert.equal(rainDrop(15),(15), "plingplang");

			});
		})

		describe("handle valid input", ()=> {
			it("should display plingplangplong  ", () => {
				assert.equal(rainDrop(105),(105), "plingplangplong");

			});
		})

		describe("handle valid input", ()=> {
			it("should display plingplang  ", () => {
				assert.equal(rainDrop(35),(35), "plangplong");

			});
		})
		describe("handle invalid input", ()=> {
			it("should display undefined  ", () => {
				assert.equal(rainDrop(-1), "undefined");

			});
		})
		describe("handle valid input", ()=> {
			it("should display 21 for 7 and 1  ", () => {
				assert.equal(rainDrop(21), "plingplong");

			});
		})




	})