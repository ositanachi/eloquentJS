function isEven(num){
    var remainder = num%2;
    if (remainder == 0)
        return true
    else if (remainder == 1)
        return false
    else
        return isEven(num+2);
}

console.log(isEven(50));
