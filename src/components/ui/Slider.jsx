import Carousel from "react-bootstrap/Carousel";
import { StyledSlider } from "../styles/Slider.syled";
import PropTypes from "prop-types";

function Slider({ footage }) {
  return (
    <StyledSlider>
      <Carousel>
        {footage.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={`Footage ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </StyledSlider>
  );
}

Slider.propTypes = {
  footage: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
