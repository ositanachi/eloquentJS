var size = 8;
var board = ""; //Start with an empty string

//FIrst for loop iterates through each row while second for loop iterates through the columns
for (var row = 0; row < size; row++){
    for (var col = 0; col < size; col++) {
        //Odds are spaces while evens are #'s
        if ((x+y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    //At the end of each iteration, add a new line character
    board += "\n";
}
//Output chess board
console.log(board);
