import axios from "axios";
import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], //영화데이터를 저장할 배열
  };

  getMovies = async () => {
    // 액세스 실행
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };

  componentDidMount() {
    //영화 앱을 데이터를 불러올 것이다.
    //setTimeout(() => {
    //  this.setState({ isLoading: false });
    //}, 6000); //6초후 We are Loding
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state; //구조 분해 할당 : this.state를 입력하지 않아도 된다.
    return <div>{isLoading ? "Loading.." : "영화 데이터를 출력"}</div>;
  }
}

export default App;
