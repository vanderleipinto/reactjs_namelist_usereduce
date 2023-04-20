------------
Requisições http:
------------

import {
  ChangeEvent,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import styles from "./App.module.css";
import { Post } from "./types/Post";
import { api } from "./api";
import "./index.css";

//jsonplaceholder.typicode.com/posts

function App() {
  useEffect(() => {
    loadPosts();
  }, []);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const loadPosts = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await response.json();
      setPosts(json);
      setLoading(false);
    } catch (error) {
      alert("Não foi possível carregar.");
    }
  };

  const handleAddPost = async (title: string, body: string) => {
    /// essa função recebe o título e o body do componente PostForm
    let json = await api.addNewPost(title, body, 1);

    if (json.id) {
      alert("Post adicionado com sucesso.");
    } else {
      alert("Ocorreu algum erro");
    }
  };

  return (
    <div className="p-5">
      {loading && <div>Carregando</div>}

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <>
          <div>Total de posts: {posts.length}</div>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      )}

      {!loading && posts.length === 0 && <div>Não há posts para exibir.</div>}
    </div>
  );
}

export default App;


----------------
UseReduce
----------------

import { useReducer } from "react";
import "./index.css";

type reducerState = {
  count: number;
  value: number;
};

type reducerAction = {
  type: string;
};

const initialState = {
  count: 0,
  value: 5,
};

const reducer = (state: reducerState, action: reducerAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + state.value };
      break;

    case "DEL":
      return { ...state, count: state.count - state.value };
      break;
    case "RESET":
      return initialState;
      break;

    default:
      break;
  }

  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="border-2  mb-3 p-3 text-4xl">
      Contagem: {state.count};
      <button
        className="b-5 p-5"
        onClick={() => {
          dispatch({ type: "ADD" });
        }}
      >
        Adicionar
      </button>
      <button
        className="border-solid p-5"
        onClick={() => {
          dispatch({ type: "DEL" });
        }}
      >
        Subtrair
      </button>
      <button
        className="b-5 p-5"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Zerar
      </button>
    </div>
  );
}

export default App;

