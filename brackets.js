function checkBrackets(stringOfBrackets) {

    // console.log('get anything now?');
    
    // get an input of a string of ( ) [ ] or { }
    // make sure they close properly
    // return yes or no depending on if they do or not

    // need a comparison
    let goodPairs = [['(', ')'], ['{', '}'], ['[', ']']];
    // need a stack like MTG to push/pop to/from
    let stack = [];
    // going to declare empty string just to see if logic all works out
    let stringToReturn = '';

    for (let char of stringOfBrackets) {
        // console.log('getting here?');
        
        if (char === '(' || char === '{' || char === '[') {
            // console.log('pushing the opening brace');
            
            stack.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            // console.log('any closing braces?');
            
            
            if (stack.length === 0) {
                console.log('started with a closing brace, or too few opening braces!');
                stringToReturn = 'NO';
                break;
            }
            let pairCheckerArray = [];
            pairCheckerArray.push(stack.pop());
            
            
            pairCheckerArray.push(char);

            console.log('pairCheckerArray: ', pairCheckerArray);
            console.log(goodPairs);
            

            for (let i = 0; i < goodPairs.length; i++) {
                console.log('are we ever hitting this fucking thing?');
                
                if (goodPairs[i] === pairCheckerArray) {
                    console.log('found a match!');
                    break;
                }
                
                // otherwise, if it gets through the loop w/o a match, break it and string is NO
                // stringToReturn = 'NO';
                // return stringToReturn;
            }
            pairCheckerArray = [];
            
        }


        if (stack.length === 0) {
            stringToReturn = 'YES';
        } else {
            stringToReturn = 'NO';
        }
    }
    return stringToReturn;
}


console.log(checkBrackets('(){}[]'));
console.log(checkBrackets('({}[]'));
console.log(checkBrackets('}[]'));
console.log(checkBrackets('{}}[]'));
console.log(checkBrackets('{)[]'));
console.log(checkBrackets('{([])}'));


