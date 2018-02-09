
// Check to make sure the code is runnning
console.log("Jigsaw's game begins!")
//Define the size of the game play area
var maxX = 2
var maxY = 2

// User starts at the x = 0, y = 0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX = 2
var treasureY = 1

// Hidden Trap, that takes the player life
var trapX = 2
var trapY = 2

// Flag that controls the loop
var treasureFound = false



// The game begins once the "Begin" button is pushed
function startJigsaw (){
  // Collect User's name
  var userName =prompt("What is your name?")
    document.getElementById("game").play();
    console.log(userName)
  while(!treasureFound) {
    var direction = prompt("Hello " + userName + ". Use the directions to move around the board. Find the key to save your life or make the wrong move and the game is over. (north, south, east, west)" + " Your Current Location (" + newX + " , " + newY + ")" )
    console.log(direction)

    // tmp vars, only used for checking validity of new user location after move
    var newX
    var newY

    //See what new user location should be

    // check if new user location is valid

    // check if new user location is treasure

    if(direction =="north") {
      newX = userX
      newY = userY + 1
      console.log("New location" + newX + " , " + newY)
      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY


      } else {
        document.getElementById("behave").play();
        alert("You've reached a locked door, turn around and try another escape. (" + newX + " , " + newY + ")")
        console.log("You've reached a locked door, turn around and try another escape. " + newX + " , " + newY)
      }
    } else if(direction == "east") {
      newX = userX + 1
      newY = userY
      console.log("New location" + newX + " , " + newY)

      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      } else {
        document.getElementById("behave").play();
        alert("You've reached a locked door, turn around and try another escape. (" + newX + " , " + newY + ")")
        console.log("You've reached a locked door, turn around and try another escape. " + newX + " , " + newY)
      }
    } else if(direction == "south") {
      newX = userX
      newY = userY - 1
      console.log("New location" + newX + " , " + newY)

      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      }else {
        document.getElementById("behave").play();
        alert("You've reached a locked door, turn around and try another escape. (" + newX + " , " + newY + ")")
        console.log("You've reached a locked door, turn around and try another escape. " + newX + " , " + newY)
      }
    } else if(direction == "west") {
      newX = userX - 1
      newY = userY
      console.log("New location" + newX + " , " + newY)

      // neither value < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX
        userY = newY
      } else {
        document.getElementById("behave").play();
        alert("You've reached a locked door, turn around and try another escape. " + newX + " , " + newY)
        console.log("You've reached a locked door, turn around and try another escape. (" + newX + " , " + newY + ")")
      }

    } else {
      alert("Please enter a real direction.");
      console.log("Please enter a real direction.");
    }

    // see if user location matches treasure
    if(userX == treasureX && userY == treasureY){
      treasureFound = true
      document.getElementById("alive").play();
      console.log("Congratulations, you've found the key and saved your life!");
      alert("Congratulations, you've found the key and saved your life!");
    }
    // see if user location matches the trap
    if(userX == trapX && userY == trapY){
      treasureFound = true
      document.getElementById("gameover").play();
      console.log("Game Over, You've found the trap");
      alert("You've fallen through a trap door in the floor, right into a human meat grinder. You're Dead Meat! ");
    }
  }
}
