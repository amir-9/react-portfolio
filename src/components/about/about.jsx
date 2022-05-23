import "./about.css";
import personImage from "../../images/person-image.jpg";

const About = (props) => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-image-container">
          <img className="a-image" src={personImage} alt="person" />
          <div className="a-image-shadow"></div>
        </div>
      </div>
      <div className="a-right">
        <h2 className="a-header">About me</h2>
        <div className="a-description">
          <p className="a-short-text">
            Some readable content ipsum dolor sit amet consectetur adipisicing
            elit. Eaque, blanditiis.
          </p>
          <p className="a-long-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero unde
            suscipit beatae, omnis excepturi officiis soluta adipisci expedita
            placeat incidunt, praesentium ut, laboriosam ratione! Illo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
