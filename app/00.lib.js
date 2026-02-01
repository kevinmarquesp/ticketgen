/**
 * @param {boolean} ok 
 * @param {string} error 
 */
function assert(ok, error) {
  if (!ok)
    throw new Error(error);
}