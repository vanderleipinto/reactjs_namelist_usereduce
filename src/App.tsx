import { ChangeEvent, useReducer, useState } from "react";
import "./index.css";
import { usePeopleList } from "./reducers/peopleList";

function App() {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState("");

  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: "ADD",
        payload: {
          name: nameInput,
        },
      });

      setNameInput("");
    }
  };

  const handleDelButton = (id: string) => {
    dispatch({
      type: "DEL",
      payload: { id },
    });
    setNameInput("");
  };
  const handleOrderButton = () => {
    dispatch({
      type: "ORDER",
    });
    setNameInput("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  return (
    <div className="p-5">
      <input
        className="border-2"
        type="text"
        value={nameInput}
        onChange={handleInputChange}
      />
      <button className="border-2" onClick={handleAddButton}>
        Adicionar
      </button>
      <button className="border-2" onClick={handleOrderButton}>
        Ordenar
      </button>
      <hr />
      Lista de pessoas:
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button
              className="border-2"
              onClick={() => handleDelButton(item.id)}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
