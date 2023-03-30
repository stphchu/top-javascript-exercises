const removeFromArray = function(array, ...to_remove) {
    for (let item_to_remove of to_remove){
        for (let item_of_array of array){
      	    if (item_to_remove === item_of_array){
                let remove_index = array.indexOf(item_of_array);
        	    array.splice(remove_index,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
