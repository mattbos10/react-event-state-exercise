// 1d. Open the App.js file and add the necessary import line at the top of the file that allows the Exercise component to be used in the App.js file
import Exercise from "./exercise/Exercise"
// 3g. Open the App.js file and create the Bonus import below the Exercise import at the top of the file
import Bonus from "./bonus/Bonus"


function App() {
  return (
    <div>
    <Exercise />
    <Bonus />
    </div>
  );
}

export default App;
