function getRandomIndex() {
  const randomIndexArray = [];
  for (let i = 0; i < 4; i++) {
    let randomNum = Math.floor(Math.random() * 100);

    if (!randomIndexArray.includes(randomNum)) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }

  return randomIndexArray;
}

export default getRandomIndex;
