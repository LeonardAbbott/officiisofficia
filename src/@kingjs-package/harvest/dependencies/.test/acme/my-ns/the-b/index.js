var {
  assert,
  childProcess,
  isBuiltinModule,
  ['@acme']: {
    myNs: {
      theA: a
    }
  }
} = require('./dependencies')

/**
 * @description A description of the package B.
 */
function b() { 
  return a()
}

module.exports = b