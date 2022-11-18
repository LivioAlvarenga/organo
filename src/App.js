import { useState } from "react";
import Banner from "./components/Banner";
import FormBox from "./components/FormBox";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const toTheNewEmployeeAdded = (employee) => {
    console.log(employee);
    setCollaborators([...collaborators, employee]);
  };

  return (
    <div className="App text-txColor-100">
      <Banner />
      <FormBox
        whenEmployeeIsRegistered={(employee) => toTheNewEmployeeAdded(employee)}
      ></FormBox>
    </div>
  );
}

export default App;
