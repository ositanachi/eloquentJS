function countChar(string, ch){
    var count = 0;
    for (x = 0; x < string.length; x++){
        if(stringInput.charAt(x) == ch)
            count++;
    }
    return count;
}

function countBs(string){
    return countChar(string, 'B');
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
