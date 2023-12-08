function twoSum(nums, target) {
    const map = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(nums[i], i);
    }
  
    return null; // If no such pair is found
  }
  
  // Example usage:
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  
  if (result !== null) {
    console.log(`The indices of the elements are: [${result}]`);
  } else {
    console.log("No such pair found!");
  }
  