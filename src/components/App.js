
import React from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
      setSelectedOption(option);
  };


  return (
    <div>
       <h2>Parent Component</h2>
            <p>Selected Option: {selectedOption}</p>
            <ChildComponent1 onSelect={handleOptionSelect} />
            <ChildComponent2 onSelect={handleOptionSelect} />
    </div>
  );
}

export default App;
