import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about_container">
      <span>개발자는 어떻게 성장해야 할까?</span>
      <br></br>
      <span>"의식적 연습 -- 피드백 -- 교정 -- 의식적연습의 반복"</span>
    </div>
  );
}

export default About;
