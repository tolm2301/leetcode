/**
 * Explain :    - Write a function to find the longest common prefix string amongst an array of strings.
                - If there is no common prefix, return an empty string "".        
 -------------------------------------------------------------------------------------------------------------------------------------------
 * Solution 1:  - Set firstWord = strs[0]
                - Loop firstWord to get only one char for once
                - Loop strs start from index 1
                - Check if i >= strs[j].length                        => cannot get i cause its index out of bound                                    => return current prefix
                - Check char of strs[j][i] !== currentCharOfFirstWord => its char of continue word in strs which if not equals currentCharOfFirstWord => return current prefix

* Solution 2:   - Use function programing language support (In this case i use JS)
                - Start with the prefix is first word of strs[0]
                - Loop every word in strs[i]
                - In this case i use indexOf - Its return -1 if not found and otherwise is indexOfCharacter
                - Slice the last of prefix
                - And when its found indexOf is 0 it will be stop the loop which have condition check indexOf and retrun prefix
                - If it will be slice prefix become empty, return ""
 -------------------------------------------------------------------------------------------------------------------------------------------                
 * TestCase:    - Input : ["flower","flow","flight"]
 *              - Output: "fl"
 -------------------------------------------------------------------------------------------------------------------------------------------
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let prefix = "";
    let firstWord = strs[0]; 

    for (let i = 0; i < firstWord.length; i++) {
        let currentCharOfFirstWord = firstWord[i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== currentCharOfFirstWord) {
                return prefix;
            }
        }

        prefix += currentCharOfFirstWord;
    }

    // let prefix = strs[0];
    // for (let i = 1; i < strs.length; i++) {
    //     while (strs[i].indexOf(prefix) !== 0) {
    //         prefix = prefix.slice(0, -1)
    //         if (!prefix) return ""
    //     }
    // }

    return prefix;
};