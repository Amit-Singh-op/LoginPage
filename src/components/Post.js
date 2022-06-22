import React from 'react'
import './post.css'

const Post = ({id,userId,title,body,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div className='user'>
            <div className='name'>
            <h3 className='inner__header'>user {userId}</h3>
            </div>
            <div className='inner'>
            <h4 className='title'>title:  {title}</h4>
            <h6 className='message'>{body}</h6>
            </div>
            <span className='span'>
            <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default Post