import React from "react";
import './post.css'
const AddPost = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value,e.target.message.value);
    e.target.title.value = "";
    e.target.message.value = "";
}
  return (
    <div>
      <form onSubmit={handleOnSubmit} className='form'>
        <h3>Add new post</h3>
        <input placeholder="Title" name="title" />
        <input placeholder="Message" name="message" />
        <button onSubmit={handleOnSubmit}>Post</button>
      </form>
    </div>
  );
};

export default AddPost;