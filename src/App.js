import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import FormBox from "./components/FormBox";
import Team from "./components/Team";
import TitleBottomBorder from "./components/TitleBottomBorder";

function App() {
  const teams = [
    { name: "Programação", fundo: "bg-fundo-100", destaque: "bg-destaque-100" },
    { name: "Front-End", fundo: "bg-fundo-200", destaque: "bg-destaque-200" },
    { name: "Data Science", fundo: "bg-fundo-300", destaque: "bg-destaque-300" },
    { name: "Devops", fundo: "bg-fundo-400", destaque: "bg-destaque-400" },
    { name: "UX e Designer", fundo: "bg-fundo-500", destaque: "bg-destaque-500" },
    { name: "Mobile", fundo: "bg-fundo-600", destaque: "bg-destaque-600" },
    { name: "Inovação e Gestão", fundo: "bg-fundo-700", destaque: "bg-destaque-700" },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const toTheNewEmployeeAdded = (employee) => {
    setCollaborators([...collaborators, employee]);
  };

  return (
    <div className="App font-montserrat text-txColor-100">
      <Banner />
      <FormBox
        teamNames={teams.map((team) => team.name)}
        whenEmployeeIsRegistered={(employee) => toTheNewEmployeeAdded(employee)}
      />
      <TitleBottomBorder
        name="Minha Organização:"
        textColor="text-principal-100"
        borderBottomColor="bg-principal-100"
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          colorFundo={team.fundo}
          colorDestaque={team.destaque}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.time === team.name
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
