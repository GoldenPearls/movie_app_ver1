import axios from "axios";
import React from "react";
import "./App.css";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], //영화데이터를 저장할 배열
  };

  getMovies = async () => {
    const {
      // 데이터가 있는데 그 안에는 movies라는 데이터가 있음
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // json 다음에 ?로 api 가져오는 방법
    //console.log(movies);//movies.data.data.movies 정연산자 적용 => 구조 분해 할당하여 객체 구조화 ES6
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    //영화 앱을 데이터를 불러올 것이다.
    //setTimeout(() => {
    //  this.setState({ isLoading: false });
    //}, 6000); //6초후 We are Loding
    this.getMovies();
  }

  render() {
    // 보여지는 부분
    const { isLoading, movies } = this.state; //구조 분해 할당 : this.state를 입력하지 않아도 된다.
    // 하나씩 받아오는 map
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default App;
