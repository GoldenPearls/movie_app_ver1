import PropTypes from "prop-types";
import React from "react";
import "./Movie.css";

function Movie({ title, year, summary, poster, genres }) {
  // 파라미터로 받아옴
  return (
    <div>
      <img src={poster} alt={title} title={title} />
      <div className="movie">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  // dto에서 정의한 것과 같은 효과
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
