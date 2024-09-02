const charOne = {

  name : "Ahmed Nayel",
  id : 3210100,
  counter : 0,
  rankUser(count){
    return this.counter += count;
  }
}

const charTwo= {
  name : "Mohammed Nayel",
  id : 3210200,
  counter : 0
}

// charOne.rankUser.call(); to call needed method
charOne.rankUser.call(charTwo,12);
console.log(charTwo.counter);
