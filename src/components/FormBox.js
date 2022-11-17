import TextField from "./TextField";

const FormBox = () => {
  return (
    <section className="my-20 mx-0 flex justify-center ">
      <form className="max-w-[80%] rounded-3xl bg-principal-300 py-9 px-16 shadow-[8px_8px_16px_rgba(0,0,0,0.08)]">
        <fieldset>
          <legend className="text-3xl">
            Preencha os dados para criar o card do colaborador.
          </legend>
          <TextField label="Nome" placeholder="Digite o seu nome" />
          <TextField label="Cargo" placeholder="Digite o seu cargo" />
          <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        </fieldset>
      </form>
    </section>
  );
};

export default FormBox;
