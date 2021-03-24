const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let depth = 1;
    let startDepth = 1;

    arr.forEach(arraElement => {

      if (Array.isArray(arraElement)) {
        startDepth += this.calculateDepth(arraElement);
      }

      if (startDepth > depth) {
        depth = startDepth;
      }
      
      startDepth = 1;
    });
    return depth;
  }
};