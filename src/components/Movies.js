import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
//컴포넌트의 props에 타입 확인을 하려면 다음과 같이 특별한 프로퍼티인 propTypes를 선언할 수 있다.
import './Movies.css'

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
                <img src={poster} alt={title} title={title}/>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres_genre">{genre}</li>
                        ))}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 130)}...</p>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    //isRequired : 필수적으로 있어야 함
    // id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;