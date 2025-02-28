/**
 * Explain :    - Given an integer x, return true if x is a Palindrome, and false otherwise.   
                - Palindome: An integer is a palindrome when it reads the same forward and backward.
                    + For example, 121 is a palindrome while 123 is not.
 --------------------------------------------------------------------------------------------------------------------------------------------
 * Solution 1:  - Negative numbers and numbers ending in 0 (except 0) are not palindromes
                - Reverse half of the number
                - Add last digit to reversed
                - Remove last digit from x
                - Check if original number (or half of it) matches the reversed half
   Solution 2:  - Use String reverse and check 2 string               
 -------------------------------------------------------------------------------------------------------------------------------------------                
 * TestCase:    - Input:  121           | 122
 *              - Output: true          | false
 -------------------------------------------------------------------------------------------------------------------------------------------
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    
    let reversed = 0;

    /**
         * Case 1 :
                    With x = 121
                    Loop 1:  reversed = 1
                             x        = 12
                    Loop 2:  reversed = 12
                             x        = 1 
                    result = Math.floor(reversed / 10) = 1
                    x = result => true
         * 
         * Case 2: 
                    With x = 122
                    Loop 1: reversed = 2
                            x        = 12
                    Loop 2:reveresed = 22
                            x         = 1
                    result = Math.floor(reversed / 10) = 2
                    x != result => false
    */
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reversed || x === Math.floor(reversed / 10);

    // let xString = x.toString()
    // let reverseXString = xString.split("").reverse().join("")
    // return xString === reverseXString
 };