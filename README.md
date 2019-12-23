# Bracket Challenge

## Instructions
This is just a simple logic test that takes a string input of any series of brackets: (, ), {, }, [, or ]. It checks to see if they're in order and if they close properly. 

### For instance, these all come through correctly:
console.log(checkBrackets('(){}[]'), ' - should be YES');
console.log(checkBrackets('({}[]'), ' - should be NO');
console.log(checkBrackets('}[]'), ' - should be NO');
console.log(checkBrackets('{}}[]'), ' - should be NO');
console.log(checkBrackets('{)[]'), ' - should be NO');
console.log(checkBrackets('{([])}'),  ' - should be YES');
console.log(checkBrackets('{([([]{}())])}'),  ' - should be YES');