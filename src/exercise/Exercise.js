// 2a. Add the necessary import line at the top of the Exercise.js file that allows for the useState function to be used in this file/component
import { useState } from 'react';


// 1a. Create a function component called Exercise
function Exercise (){
  //2c. Above the return keyword in the Exercise function component, use the "useState" function with the number 1 passed in as an argument. Also, use destructuring to set the values of the array that are returned from the useState function to the following const variable names…
  // First name: "num"
  // Second name: "setNum"
  // (NOTE: Remember that the useState function returns an array of two items. First is the value that was passed into the useState function and the second is a function.)
  const [num, setNum] = useState(1);

  // 2d. Below useState function, create a function called addNum that adds one to the value of the num variable and sets that as the new state value for the num variable by using the setNum function inside of the addNum function
  const addNum = () => setNum(num + 1);
  
  // 1c. Inside the Exercise function component, use the RETURN keyword with parentheses to have the Exercise function component return a button element and set the text inside of it to "CLICK HERE"
  return (
    <div>
      {/* 1e. Use the "onClick" React event listener on the button and set the value for the "onClick" React event listener to a function that alerts the user with the following message when the button is clicked…
      "Congrats! You have clicked the button."
      (HINT: Remember to use brackets {}) */}
    <button onClick = {() => alert ("Congrats! You have clicked the button.")}>CLICK HERE </ button>
    {/* 2b. Create another button element below the "CLICK HERE" button in the Exercise function component set the text inside of it to "STATE" */}
    {/* 2e. Use the "onClick" React event listener on the "STATE" button and set the value for the "onClick" React event listener to the addNum function (HINT: Remember to use brackets {}) */}
    <button onClick = {addNum}> STATE </button> 

    {/* 2f. Below the "STATE" button, create another h1 with the num variable set as the content/text inside the h1 (HINT: Remember to use brackets {}) (NOTE: If is done correctly, then in Chrome the value of the h1 should start at 1 and go up by 1 every time the "STATE" button is clicked) */}
      <h1>{num}</h1>
    </div>
  );
}

// 1b. Add the export line at the bottom of the file
export default Exercise;