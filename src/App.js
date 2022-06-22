import React, { useEffect, useState } from "react";
import "./App.css";
import AddPost from "./components/AddPost";
import Post from "./components/Post";

const App = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPost((posts) => [...posts, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPost(
            post.filter((posts) => {
              return posts.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <div className="App">
      <h3>Crud App</h3>
      <AddPost onAdd={onAdd} />
      <div>
        {post.map((post,id) => (
          <Post
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            onDelete={onDelete}
            
          />
        ))}
      </div>
    </div>
  );
};

export default App;