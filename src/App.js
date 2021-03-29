import React from 'react'

const useSemiPersistentState = (key, initialState) => {
  const [ value, setvalue ] = React.useState(localStorage.getItem(key) || initialState);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setvalue];
}

const App = () => {

  const stories = [
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  const searchedStories =
    stories.filter(story => story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />

    </div>
  );
}

const List = ({ list }) => list.map(item => <Item key={item.objectId} item={item} />);

const Item = ({ item }) => {
  return (
    <div key={item.objectId}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  );
}

const Search = props => {

  return (
    <div>
      <label htmlFor="search" type="text">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} value={props.search} />
    </div>
  );
}


export default App;