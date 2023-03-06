import { useEffect } from "react";

const TwoSum = () => {
  function twoSum(arr: any[], target: number) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; i++) {
        if (arr[j] == target - arr[i]) return console.log([i, j]);
      }
    }

    // In case there is no solution, we'll just return null
    return null;
  }

  useEffect(() => {
    twoSum([2, 7, 11, 15], 9);
    // twoSum([3, 2, 4], 6);
    // twoSum([3, 3], 6);
  }, []);
  return (
    <>
      Given an array of integers array and an integer target, return indices of
      the two numbers such that they add up to target.
      <br />
      You may assume that each input would have exactly one solution, and you
      may not use the same element twice.
      <br />
      You can return the answer in anyorder.
      <br />
      <br />
      Example 1:
      <br /> Input: array = [2,7,11,15], target = 9
      <br /> Output: [0,1]
      <br /> Explanation: Because array[0] + array[1] == 9, we return [0, 1].
      <br />
      <br />
      Example 2:
      <br /> Input: array = [3,2,4], target = 6 <br /> Output: [1,2]
      <br />
      <br />
      Example 3:
      <br /> Input: array = [3,3], target = 6 <br /> Output: [0,1]
      <br />
      <br />
      Constraints:
      <br />
      {`2 <= nums.length <= 104`}
      <br />
      {`-109 <= nums[i] <= 109`}
      <br />
      {`-109 <= target <= 109`}
      <br />
      <br />
      Can you come up with an algorithm that is less than O(n2) time complexity?
    </>
  );
};

export default TwoSum;
