console.log('polyfill for flatMap');

window.Array.prototype.flatMap =
  Array.prototype.flatMap ||
  function flatMap() {
    // ... implementation for older browsers
  };
