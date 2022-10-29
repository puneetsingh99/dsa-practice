const printFirstNegativeInteger = (n, k, arr) => {
  const firstNegativeNumsInWindow = [];
  for (let i = 0; i <= n - k; i++) {
    let isNegativeNumFound = false;
    for (let j = i; j < i + k; j++) {
      const num = arr[j];
      if (num < 0 && !isNegativeNumFound) {
        isNegativeNumFound = true;
        firstNegativeNumsInWindow.push(num);
      }
    }
    if (!isNegativeNumFound) firstNegativeNumsInWindow.push(0);
  }
  return firstNegativeNumsInWindow;
};

const nums = [-8, 2, 3, -6, 10];
const res = printFirstNegativeInteger(nums.length, 2, nums);
console.log(res);
