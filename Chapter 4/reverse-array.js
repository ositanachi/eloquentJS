function reverseArray(reverseThis){
  var reversed = [];
    
  for (i = reverseThis.length-1; i  >= 0; i--){
      reversed.push(reverseThis[i]);
  }
  return reversed;
}

function reverseArrayInPlace(reverseThis){
  var hold;
  var mid = (reverseThis.length-1)/2;
  var size = reverseThis.length-1;
  if ((reverseThis.length % 2) === 0){
    for (i = 0; i <= mid; i++){
      hold = reverseThis[i];
      reverseThis[i] = reverseThis[size-i];
      reverseThis[size-i] = hold;
    }
  } else {
    for (i = 0; i < mid; i++){
      hold = reverseThis[i];
      reverseThis[i] = reverseThis[size-i];
      reverseThis[size-i] = hold;
    }
  }
   
   return reverseThis;
}

var test = ["E","D","C","B","A"];
console.log(reverseArrayInPlace(test));
