// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Tower of Hanoi

// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

function towerOfHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
console.log(towerOfHanoi(3));
console.log(towerOfHanoi(5));
console.log(towerOfHanoi(0));
