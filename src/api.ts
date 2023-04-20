import axios from "axios";

//opcional

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAllPosts: async () => {
    /*  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    return json; */

    /* let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); */

    let response = await axiosInstance.get("/posts");
    return response.data;
  },

  addNewPost: async (title: string, body: string, userId: number) => {
    /* let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ title, body, userId }),
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    return json; */
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      { title, body, userId }
    );

    return response.data;
  },
};
