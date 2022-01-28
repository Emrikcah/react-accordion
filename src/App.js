import { Questions } from "./components";
import data from './data/data';

import "./App.css";

function App() {
   return (
      <main>
         <div className="container">
            <h3>questions and answers about login</h3>

            <Questions data={data} />
         </div>
      </main>
   );
}

export default App;

//import data and pass it to Questions component