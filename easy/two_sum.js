/**
 * Explain :    - Given an numbers[] and an number target, return indices of the two numbers such that they add up to target.              
 -------------------------------------------------------------------------------------------------------------------------------------------
 * Solution:    - Use an object to store numbers and their indices
                - Loop through the array:
                    + Compute the complement (target - nums[i]).
                    + If the complement exists in numMap, return the indices [numMap[complement], i].
                    + Otherwise, store the current number and its index in numMap.
                - The function returns the first pair of indices that sum to the target.
 -------------------------------------------------------------------------------------------------------------------------------------------          
 * Big(O):      - O(n)
 -------------------------------------------------------------------------------------------------------------------------------------------                
 * TestCase:    - Input: twoSum([2,7,10,15], 9)
 *              - Output: [0, 1]
 -------------------------------------------------------------------------------------------------------------------------------------------
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
};