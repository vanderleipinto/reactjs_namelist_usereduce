import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid"; //v4 gera número aleatorio

type Person = {
  id: string;
  name: string;
};

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  };
};

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      if (action.payload?.name) {
        /* cria-se uma cópia do state e faz-se a modificação na cópia e retorna a cópia [isso para prevenir um erro do react que acha que não houve alteração no state]*/
        const newState = [...state];
        newState.push({
          id: uuidv4(),
          name: action.payload?.name,
        });
        return newState;
      }
      break;
    case "DEL":
      if (action.payload?.id) {
        let newState = [...state];
        newState = state.filter(
          (item) => item.id !== action.payload?.id
        ); /* está criando um array cujo id seja diferente do informado */
        return newState;
      }
      break;
    case "ORDER":
      let newState = [...state];
      state = state.sort((a, b) => (a.name > b.name ? 1 : -1)); //a e b são atual e anterior se a>b vai pra cima, senão vai pra baixo
      return newState;
      break;
  }
  return state;
};

export const usePeopleList = () => {
  return useReducer(reducer, initialState);
};
