import { useState, ChangeEvent } from "react";

type Props = {
  onAdd: (title: string, body: string) => void;
};

export const PostForm = ({ onAdd }: Props) => {
  const [addTitleText, setAddTitleText] = useState("");
  const [addBodyText, setAddBodyText] = useState("");
  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  };

  const handleAddClick = () => {
    // aqui ele executa a função  que está no App.tsx e foi passada no props, enviando os parâmetros necessários.
    if (addBodyText && addTitleText) {
      onAdd(addTitleText, addBodyText);
    } else {
      alert("Preencha todos os campos.");
    }
  };

  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value);
  };
  return (
    <fieldset className="border-2 mb-3 p-3">
      <legend>Adicionar Novo Post</legend>

      <input
        value={addTitleText}
        className="block border"
        type="text"
        placeholder="Digite um título"
        onChange={handleAddTitleChange}
      />

      <textarea
        className="block border"
        value={addBodyText}
        onChange={handleAddBodyChange}
      ></textarea>

      <button onClick={handleAddClick} className="block border">
        Adicionar
      </button>
    </fieldset>
  );
};
