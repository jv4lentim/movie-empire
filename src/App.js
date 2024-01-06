import { useEffect } from 'react';
import './App.css';

const API_KEY_VALUE = process.env.REACT_APP_API_KEY;
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY_VALUE}`

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
    console.log(API_URL);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <div className="App">
      <h1>Hi there, React!</h1>
    </div>
  );
}

export default App;
