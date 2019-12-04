// 3 unit tests for functions

var assert = require('assert');
var random = require('../common/random')
var response = require('../common/response')
const { mockRequest, mockResponse } = require('mock-req-res')
var mongoComapny  = require('../model/company')
var utility = require('../common/ultility')

describe('Random', function () {
  describe('#getRandom()', function () {
    it('should return a random 9 digit', function () {
      assert.equal(random.getRandom(8).length, 9);
    });
  });
});

describe('Time Range', function () {
  describe('#isTimeWithinRange()', function () {
    it('should return true', function () {
      assert.equal(utility.isTimeWithinRange(0,300,200),true);
    });
  });
});

describe('Time Range', function () {
  describe('#isTimeWithinRange()', function () {
    it('should return false', function () {
      assert.equal(utility.isTimeWithinRange(300,600,200),false);
    });
  });
});


describe('Time Range', function () {
  describe('#isTimeWithinRange()', function () {
    it('should return true', function () {
      assert.equal(utility.minutesToHourString(10,20),'23 hour(s) and 50 minute(s)');
    });
  });
});




var mongo = require('../model/mongo');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
describe('getDB()', function(){
  it('should return undefined because connect is not called', function(){
    assert.equal(mongo.getDB(), undefined);
    });
});

