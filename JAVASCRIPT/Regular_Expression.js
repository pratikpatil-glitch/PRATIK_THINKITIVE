/* 
 Regular Expression:
  - Regular Expression (RegEx) is a pattern used to search, match, validate, or replace text.
  - Without RegEx, checking complex text patterns can require many conditions.

  - There are two ways to create a regular expression.
        - Method 1: Literal syntax: let pattern = /hello/;
        - Method 2: RegExp constructor: let pattern = new RegExp("hello");
        
    - RegEx Methods: There are two important RegEx methods.
      - A. test(): Checks whether a pattern exists in a string. Returns true or false.
      - B. exec(): Finds a match and returns detailed match information, or null if no match exists.

    - String Methods with RegEx:
        - match()- Returns matching text
        - matchAll()- Returns all matches with details
        - replace()- Replaces matching text
        - search()- Returns the position of a match
        - split()- Splits a string using a pattern

    - RegEx Flags: 
        g - Finds all matches
        i - Ignores uppercase/lowercase differences
        m - Makes ^ and $ work with individual lines
        s - Allows . to match newline characters
        u - Enables Unicode-aware matching
        y - Matches only at the current lastIndex position
        d - Provides information about match positions

    - RegEx Patterns: 
        abc : Matches exact text	                       /abc/
        . : Matches any character except line terminators  /a.c/
        ^ : Matches start of input	                       /^Hello/
        $ : Matches end of input	                       /end$/
        \d : Matches a digit	                           /\d/
        \D : Matches a non-digit	                       /\D/
        \w : Matches a word character	                   /\w/
        \W : Matches a non-word character	               /\W/
        \s : Matches whitespace	                           /\s/
        \S : Matches non-whitespace	                       /\S/

    - Character Classes:
        [abc] : Matches a, b, or c
        [a-z] : Matches lowercase letters
        [A-Z] : Matches uppercase letters
        [0-9] : Matches digits
        [a-zA-Z] : Matches uppercase or lowercase letters
        [^abc] : Matches any character except a, b, or c

    - Quantifiers: 
        * : 0 or more times
        + : 1 or more times
        ? : 0 or 1 time
        {3} : Exactly 3 times
        {2,5} : Between 2 and 5 times
        {2,} : At least 2 times

    - Special Characters
        | \ | Escapes a special character |
        | () | Creates a group |
        | | | Means OR |
        | [] | Creates a character class |
        | {} | Specifies repetition count |

    - Groups and Capturing Groups : Parentheses () group parts of a pattern.They also allow you to capture matching text.

*/

let pattern = /hello/;

console.log("\n===== test =====");
// test
console.log(pattern.test("hello"));
console.log(pattern.test("good morning"));

console.log("\n===== exec =====");
// exec()
console.log(pattern.exec("hello world"));

console.log("\n===== String Methods with RegEx =====");

let text = "I love JavaScript";

console.log(text.match("JavaScript")); // match()
console.log(text.match("java")); // match() - null

let text1 = "cat dog cat";
let result = text1.matchAll(/cat/g); // matchAll()
console.log([...result]);

console.log(text.replace(/JavaScript/, "Java")); // replace()

console.log(text.search(/Java/)); // 7
console.log(text.search(/krishna/)); // -1

let text5 = "apple,banana-orange=mango";
console.log(text5.split(/,|-/));

let text6 = "hello HELLO Hello";
console.log(text6.match(/hello/gi));

console.log("\n===== RegEx Patterns =====");
console.log(/\d/.test("hello123"));
console.log(/\D/.test("123"));
console.log(/\s/.test("hello world"));

console.log("\n===== Character Classes =====");
let pattern1 = /[0-9]/;
console.log(pattern.test("Pratik123"));

console.log("\n===== Quantifiers  =====");
console.log(/a*/.test("bbb"));
console.log(/a+/.test("bbb"));
console.log(/a{3}/.test("aaa"));

console.log("\n===== Special Characters  =====");
let pattern2 = /cat|dog/;
console.log(pattern.test("I have a dog"));

console.log("\n===== Groups and Capturing Groups =====");
let pattern3 = /(hello) (world)/;
let result3 = pattern.exec("hello world");

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
