const removeDuplicateValues = (array) => {
   let arr = [];
   array.map((item) => arr.push(item.value));
   let uniqueSet = new Set(arr);
   let uniqueArr = Array.from(uniqueSet);
   return uniqueArr;
};

module.exports = removeDuplicateValues;
