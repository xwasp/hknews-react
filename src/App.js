import React from 'react'

const welcome = {
  greeting : 'Hey',
  title    : 'React'
}

function getTitle(title){
  return title;
}

function App(){
  //do something in between

  return(
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search" type="text">Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;