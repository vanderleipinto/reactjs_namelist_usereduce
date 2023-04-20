import React, { useReducer } from "react";

type reducerAction = {
  type: string;
};

type countNumber = {
  count: number;
};

// Definindo o reducer
const reducer = (state: countNumber, action: reducerAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Componente que usa o useReducer
const Counter = () => {
  // Inicializando o estado usando o useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // Funções de manipulação de eventos
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
