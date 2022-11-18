import { useState } from "react";
import Button from "./Button";
import DropdownList from "./DropdownList";
import TextField from "./TextField";

const FormBox = (props) => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Designer",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState(teams[0]);

  const whenSaving = (event) => {
    event.preventDefault();
    props.whenEmployeeIsRegistered({
      nome,
      cargo,
      imagem,
      time,
    });
  };
  // obs nome, é igual a nome: nome. Pois, quando key e value possui o mesmo valor.

  return (
    <section className="my-20 mx-0 flex justify-center ">
      <form
        onSubmit={whenSaving}
        className="max-w-[80%] rounded-3xl bg-principal-300 py-9 px-16 shadow-[8px_8px_16px_rgba(0,0,0,0.08)]"
      >
        <fieldset>
          <legend className="text-3xl">
            Preencha os dados para criar o card do colaborador.
          </legend>
          <TextField
            value={nome}
            toChange={(value) => setNome(value)}
            required={true}
            label="Nome"
            placeholder="Digite o seu nome"
          />
          <TextField
            value={cargo}
            toChange={(value) => setCargo(value)}
            required={true}
            label="Cargo"
            placeholder="Digite o seu cargo"
          />
          <TextField
            value={imagem}
            toChange={(value) => setImagem(value)}
            label="Imagem"
            placeholder="Digite o endereço da imagem"
          />
          <DropdownList
            value={time}
            toChange={(value) => setTime(value)}
            required={true}
            label="Time"
            items={teams}
          />
          <Button>Criar Card</Button>
        </fieldset>
      </form>
    </section>
  );
};

export default FormBox;
