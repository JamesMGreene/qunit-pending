/*global QUnit */

(function() {

var testDoneContext,
    testDone = 0;

QUnit.testDone(function(context) {
  testDone++;
  testDoneContext = context;
});

QUnit.module("Verify prerequisite `QUnit.skip`");

QUnit.test("exists", function(assert) {
  assert.equal(typeof QUnit.skip, "function", "`QUnit.skip` should be a function");
});

QUnit.skip("skipped test, no callback");

QUnit.test("test the results for the skipped test, no callback", function(assert) {
  delete testDoneContext.runtime;
  delete testDoneContext.duration;
  delete testDoneContext.source;

  assert.strictEqual(testDone, 2, "Should be 2 tests completed already");
  assert.deepEqual(testDoneContext, {
    assertions: [],
    module: "Verify prerequisite `QUnit.skip`",
    name: "skipped test, no callback",
    failed: 0,
    passed: 0,
    total: 0,
    testId: "7b9c5a3d",
    skipped: true
  }, "testDone context");
});

QUnit.skip("skipped test, with callback", function(assert) {
  assert.ok(false, "should not be asserted");
});

QUnit.test("test the results for the skipped test, with callback", function(assert) {
  delete testDoneContext.runtime;
  delete testDoneContext.duration;
  delete testDoneContext.source;

  assert.strictEqual(testDone, 4, "Should be 4 tests completed already");
  assert.deepEqual(testDoneContext, {
    assertions: [],
    module: "Verify prerequisite `QUnit.skip`",
    name: "skipped test, with callback",
    failed: 0,
    passed: 0,
    total: 0,
    testId: "5a559298",
    skipped: true
  }, "testDone context");
});

QUnit.module("Verify normal test syntax");

QUnit.test("still works", function(assert) {
  assert.ok( true );
});

QUnit.test("test the results of the previous normal test", function(assert) {
  delete testDoneContext.runtime;
  delete testDoneContext.duration;
  delete testDoneContext.source;

  assert.strictEqual(testDone, 6, "Should be 6 tests completed already");
  assert.deepEqual(testDoneContext, {
    assertions: [
      { message: "okay", result: true }
    ],
    module: "Verify normal test syntax",
    name: "still works",
    failed: 0,
    passed: 1,
    total: 1,
    testId: "5c08c34d",
    skipped: false
  }, "testDone context");
});

QUnit.module("Verify new pending syntax");

QUnit.test("works");

QUnit.test("test the results of the previous pending test", function(assert) {
  delete testDoneContext.runtime;
  delete testDoneContext.duration;
  delete testDoneContext.source;

  assert.strictEqual(testDone, 8, "Should be 8 tests completed already");
  assert.deepEqual(testDoneContext, {
    assertions: [],
    module: "Verify new pending syntax",
    name: "works",
    failed: 0,
    passed: 0,
    total: 0,
    testId: "fb3cba99",
    skipped: true
  }, "testDone context");
});

})();
