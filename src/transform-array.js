module.exports = function transform(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-next':
        if (i + 1 < arr.length) result.push(arr[i + 1]);
        break;
      case '--discard-prev':
        if (i != 0 && arr[i - 2] != '--discard-next') result.pop();
        break;
      case '--discard-next':
        i++;
        break;
      case '--double-prev':
        if (i != 0 && arr[i - 2] != '--discard-next') result.push(arr[i - 1]);
        break;
      default:
        if (arr[i] != undefined) result.push(arr[i]);
        break;
    }
  }
  return result;
};
