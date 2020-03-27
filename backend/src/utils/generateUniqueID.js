const crypto = require('crypto');

/**
 * Generates a HEX code of a random byte code:
 */
module.exports = function generateUniqueID() {
  return crypto.randomBytes(4).toString('HEX'); 
}