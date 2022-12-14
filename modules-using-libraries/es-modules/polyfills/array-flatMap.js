console.log('polyfill for flatMap');

window.Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap(callbackFn, thisArg) {
    const o = Object(this);
    if (!callbackFn || typeof callbackFn.call !== 'function') {
      throw TypeError('callbackFn must be callable.');
    }
    const t = thisArg !== undefined ? thisArg : undefined;

    const a = arraySpeciesCreate(o, o.length);
    flattenIntoArray(
      a,
      o,
      /*start*/ 0,
      /*depth*/ 1,
      callbackFn,
      t);
    return a.filter(x => x !== undefined, a);
  };
