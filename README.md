[![Build Status](https://travis-ci.org/JamesMGreene/qunit-pending.png)](https://travis-ci.org/JamesMGreene/qunit-pending)

# qunit-pending

A [QUnit](http://qunitjs.com/) plugin that adds the "pending" test syntax, a la Mocha.


## Requirements

This plugin requires QUnit core ("qunitjs") >= `v1.16.0`+, which introduced the "skipped" test status and `QUnit.skip` function.


## Usage

```js
QUnit.test( "This test is not implemented yet" );
```


## Compatibility

This plugin works in every environment that QUnit core does.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](http://gruntjs.com/).


## License

Copyright (c) 2014 James M. Greene  
Licensed under the MIT license.
