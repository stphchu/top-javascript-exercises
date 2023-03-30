const sumAll = function(start_num, end_num) {
    if (start_num < 0 || end_num < 0 && 
        Number.isInteger(start_num) == false || 
        Number.isInteger(end_num) == false){
        return "ERROR";
    } else {
        if (start_num > end_num){
            let new_start = end_num;
            end_num = start_num;
            start_num = new_start;
        }
        let final_sum = 0;
        for (let i = start_num; i <= end_num; i++){
            final_sum += i; 
        }
        return final_sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
