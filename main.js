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
charOne.rankUser.call(charTwo,12); //change the common vars
console.log(charTwo.counter);

// The main different with call that recived args as arr
charOne.rankUser.apply(charTwo,[12]);
console.log(charTwo.counter);



// The bind method [ Same call but not Apply ] also
// that get copy version from main recived args
// then return new function with new changes

const result = charOne.rankUser.bind(charTwo,10);
console.log(result());

