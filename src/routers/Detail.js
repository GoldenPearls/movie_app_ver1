import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state == undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail_text">
            <h3 className="detail_title">{location.state.title}</h3>
            <h4 className="detail_year">{location.state.year}</h4>
            <h4 className="detail_summary">{location.state.summary}</h4>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
