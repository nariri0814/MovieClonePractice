import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get(
      "https://yts.mx/api/v2/list_movies.json"
    )
  }

  render() {
    return (
      <>
      </>
    )
  }
}

export default App;
