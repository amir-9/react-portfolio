import "./intro.css";
import introImg from "../../images/intro.jpg";
const Intro = (props) => {
  return (
    <div className="intro">
      <div className="left">
        <div className="left-wrapper">
          <div className="name-container">
            <h2 className="hello">Hello my name is</h2>
            <h2 className="name">amirHussein</h2>
          </div>
          <div className="skills">
            <div className="i-am">I'm a </div>
            <div className="skills-wrapper">
              <div className="skill">Front-End developer</div>
              <div className="skill">React developer</div>
              <div className="skill">Fast learner</div>
            </div>
          </div>
          <div className="description">
            <p className="description-paragraph">
              I'm a junior Front-End developer who likes to learn all new
              thing's about front-end programming and get to the top,,,
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="back-ground"></div>
        <div className="image-container">
          <div className="image-wrapper">
            <img className="image" src={introImg} alt="intro" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
