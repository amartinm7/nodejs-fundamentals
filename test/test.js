const assert = require('assert')
const milrest = require("mil-rest")

console.log("welcome!")
console.log(milrest.printMsg.hello())
console.log(milrest.printMsg.bye())

describe('mil-rest', function() {
	describe('hello', function() {
		it('should return Hello world', function() {
		  expect(milrest.printMsg.hello()).toBe("Hello world")
		})
	})
	describe('bye', function() {
		it('should return Bye bye', function() {
		  expect(milrest.printMsg.bye()).toBe("Bye bye")
		})
	})
})