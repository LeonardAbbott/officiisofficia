var { 
  '@kingjs': { 
    '-rx': {
      '-sync-static': { iterate },
    }
  }
} = module[require('@kingjs-module/dependencies')]()

/**
 * @description Create an `IObservable` from a generator.
 * @param generator The generator function.
 * @returns Returns `IObservable` that emits values generated by `generator`.
 */
function generate(generator) {
  return iterate(generator())
}

module.exports = generate