/**
 * Explain :    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
                    Symbol       Value
                    I             1
                    V             5
                    X             10
                    L             50
                    C             100
                    D             500
                    M             1000
                For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

                Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV.
                Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
                    I can be placed before V (5) and X (10) to make 4 and 9. 
                    X can be placed before L (50) and C (100) to make 40 and 90. 
                    C can be placed before D (500) and M (1000) to make 400 and 900.

                Given a roman numeral, convert it to an integer.
 --------------------------------------------------------------------------------------------------------------------------------------------
 * Solution 1:  - A dictionary (romanMap) stores the values of Roman numerals.
                - Iterate through the string and check if the current value is smaller than the next value.
                - If the current numeral is smaller than the next, we subtract it.
                - Otherwise, we add it.
                - The final sum is returned.
 -------------------------------------------------------------------------------------------------------------------------------------------          
 * Big(O):      - O(n)
 -------------------------------------------------------------------------------------------------------------------------------------------                
 * TestCase:    - Input:  V   | LVIII   | MCMXCIV
 *              - Output: 5   | 58      | 1994
 -------------------------------------------------------------------------------------------------------------------------------------------
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let result = 0;
    
    /**
     * Case 1: "V"
     *         next     = undefined
     *         result   = 5
     * Case 2: "LVIII"
     *         L = 50   > V = 5  => result = 50 + 5 = 55
     *         V = 5    > I = 1  => result = 55 + 1 = 56
     *         I = 1    = 1 = 1  => result = 56 + 1 = 57
     *         I = 1    = 1 = 1  => result = 57 + 1 = 58
     * Case 3: "MCMXCIV" 
               M = 1000 > C = 100      => Result = 1000
               C = 100  < M = 1000     => Result = 1000 - 100 = 900
               M = 1000 > X = 10       => Result = 900 + 1000 = 1900
               X = 10   < C = 100      => Result = 1900 - 10 = 1890
               C = 100  > I = 1        => Result = 1890 + 100 = 1990
               I = 1    < V = 5        => Result = 1990 - 1 = 1989
               V = 5    > I = 1        => Result = 1989 + 5 = 1994
     */
    for (let i = 0; i < s.length; i++) {
        let currentValue = romanMap[s[i]];
        let nextValue = romanMap[s[i + 1]];
        
        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }

    return result;
};