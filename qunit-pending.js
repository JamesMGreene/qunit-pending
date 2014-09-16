/*global QUnit:false */

(function() {

  // Duck-punch `QUnit.test` to support the Mocha-style "pending" test syntax
  var QUnit_test = QUnit.test;
  QUnit.test = function() {
    if (arguments.length === 1 && typeof arguments[0] === "string") {
      return QUnit.skip(arguments[0]);
    }
    else {
      return QUnit_test.apply(QUnit, arguments);
    }
  };

})();