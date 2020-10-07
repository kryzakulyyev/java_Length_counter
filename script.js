
const calculateCharacter = () =>{
  //Creating tweet variable 
   let tweet=prompt('Enter your tweet...')
// Count tweet variable length 
   let tweetCount=tweet.length;
// 150 - tweetCount result it is gonna show how many tweetLeft.
   let tweetLeft = 150-tweetCount;
   let name =prompt("Enter your name...")
   alert(`You have written ${tweetCount} characters, you have ${tweetLeft } characters remaining`);
   

console.log(`${tweet}, Total: ${tweetCount} characters, If 150-${tweetCount} it is gonna left ${tweetLeft} tweet `);

};

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
