import React, { useState, FormEvent } from "react";
// import { FiChevronRight } from 'react-icons/fi';
import api from "../../services/api";

import Logo from "../../assets/logo.png";
import { Title, Form, Movie } from "./styles";

interface Film {
    Poster:string;
    Title:string;
    Year:string;
    Genre:string;
    Plot:string;
    Director:string;
    Actors:string;
    imdbRating:string;
    Awards:string;
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [movies, setMovies] = useState<Film[]>([]);

   async function handleAddMovie(event: FormEvent<HTMLFormElement>) {
     event.preventDefault();

     const response = await api.get<Film>(`http://www.omdbapi.com/?t=${newMovie}&apikey=79174ddd&type=movie`);
     console.log(response.data);

     const film = response.data ;

     setMovies([film]);
   }

  return (
    <>
      <img src={Logo} alt="GoMovie" />
      <Title>Find information about Films</Title>

      <Form onSubmit={handleAddMovie}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Type a movie name..."
        />
        <button type="submit"> Enter</button>
      </Form>
      <Movie>
        {movies.map(film => (
          <a
         key={film.Title} href="test">
          <img src={film.Poster} alt="filme"/>
          <div>
            <strong>{film.Title}</strong>
            <p>{film.Year}</p>
            <br/>
            <p><span>Genre:</span>{film.Genre}</p>
            <p><span>Plot:</span>{film.Plot}</p>
            <p><span>Director:</span>{film.Director}</p>
            <p><span>Actors:</span>{film.Actors}</p>
            <p><span>Rating:</span>{film.imdbRating}</p>
            <p><span>Awards:</span>{film.Awards}</p>
            <button type="submit"> Enter</button>
          </div>
        </a>
        ))}
      </Movie>
    </>
  );
};

export default Dashboard;
