const reverseString = function(string) {
    let string_as_array = string.split("");
    let reversed_string = (string_as_array.reverse()).join('');
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
