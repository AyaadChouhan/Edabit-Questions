function findBomb(str) {
    const findVal = "bomb";
    let newVal = str.split();
    if (str.includes("bomb")) {
      return  "Duck!!!";
    } else {
      return "There is no bomb, relax.";
    }
  }
  console.log(findBomb("This goes boom!!!"));
  console.log(findBomb("Hey, did you think there is a bomb ?"));
  console.log(findBomb("There is a bomb."));
  