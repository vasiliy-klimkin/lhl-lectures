import React, { useState } from 'react';
import './App.css';

import CommentList from './Components/CommentList';
const commentsData = [
  { 
    id: 1,
    image: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    content: 'This is a great comment!!! ',
    likes: 10,
    dislikes: 1,
  },
  {
    id: 2,
    image: 'https://www.rover.com/blog/wp-content/uploads/2019/05/dog-versus-bumblebee-600x340.jpg',
    content: 'Balanced Comments INCOMING',
    likes: 5,
    dislikes: 5,
  },
  {
    id: 3,
    image: 'https://barkpost.com/wp-content/uploads/2016/04/Derp3.jpg',
    content: 'rawr',
    likes: 0,
    dislikes: 10,
  },
  {
    id: 4,
    image: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/02/cute-derpy-dog-fb.png',
    content: 'I have no idea what im doing ',
    likes: 2,
    dislikes: 1,
  },
]



function App() {
  // whats the point of state?
  const [list, setList] = useState(commentsData);

  const myFunction = (id, type) => {
    //  METHOD 1 ---------------
    // make a copy of our state
    // const listCopy = [...list];
    // // loop through it
    // for (let comment of listCopy) {
    //   // figure out which comment was clicked
    //   if (id === comment.id) {
    //     // what type of click was it (like or dislike)
    //     if (type === 'likes') {
    //       // increment the like/dislike accordingly
    //       comment.likes++;
    //     } else {
    //       comment.dislikes++;
    //     }
    //   }
    // }
    // // set the copy to the og
    // setList(listCopy)
    // METHOD 2 ---------------------
    const listCopy = list.map(comment => {
      if (id === comment.id) {
        if (type === 'likes') {
          comment.likes++;
        }else {
          comment.dislikes++;
        }
      }
      return comment;
    })
    setList(listCopy);
  }

  return (
    <div>
      <h1>Comments for Dogs</h1>
      <CommentList banandaData={list} myFunction={myFunction}/>
    </div>
  );
}

export default App;
