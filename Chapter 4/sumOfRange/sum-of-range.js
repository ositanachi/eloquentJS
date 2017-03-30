function range(start, end, step){
    var container = [];
    step = (step || 1);
    if (step > 0){
      for (index = start; index <= end; index += step) {
        container.push(index);
      }
    } else {
      for(index = start; index >= end; index += step) {
        container.push(index);
      }
    }
    
    return container;

}

function sum(numContainer){
    var sum = 0;
    for(var index = 0; index < numContainer.length; index++)
        sum += numContainer[index];
    return sum;
}

console.log(range(5, 2, -1));