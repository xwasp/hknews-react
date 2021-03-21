import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];



function App(){
  //do something in between
  return(
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search" type="text">Search: </label>
      <input id="search" type="text"/>

      <hr/>

      {list.map(function(item){
        return <div key={item.objectId}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          </div>
      })}
    </div>
  );
}

export default App;