/**
 * Explain :    - Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
                - An input string is valid if:
                    + Open brackets must be closed by the same type of brackets.
                    + Open brackets must be closed in the correct order.
                    + Every close bracket has a corresponding open bracket of the same type.
 -------------------------------------------------------------------------------------------------------------------------------------------
 * Solution:    - Use a stack to track open brackets.
                - Push open brackets onto the stack.
                - When encountering a closing bracket "), ], }":
                    + Check if the stack is empty -> return false
                    + Check if the top of the stack matches the closing bracket.
                    + If it matches, pop the stack.
                    + If it doesn't match, return false.
                - After processing all characters, the stack should be empty for the string to be valid.
 -------------------------------------------------------------------------------------------------------------------------------------------        
 * Big(O):      - Solution: O(n)
 -------------------------------------------------------------------------------------------------------------------------------------------                
 * TestCase:    - Input : "()"  | "(]"  | "()[]{}"
 *              - Output: true  | false | false
 -------------------------------------------------------------------------------------------------------------------------------------------
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            
            let topOfStack = stack.pop();
            let valueOfChar = map[char];
            if(topOfStack !== valueOfChar){
                return false;
            }
        }
    }

    return stack.length === 0;
};