import Carousel from "react-bootstrap/Carousel";
import slider_img1 from "../../images/sliders/agent-slider01.jpg";
import slider_img2 from "../../images/sliders/agent-slider02.jpg";
import slider_img3 from "../../images/sliders/agent-slider03.jpg";
import slider_img4 from "../../images/sliders/agent-slider04.jpg";
import slider_img5 from "../../images/sliders/agent-slider05.jpg";
import slider_img6 from "../../images/sliders/agent-slider06.jpg";
import slider_img7 from "../../images/sliders/agent-slider07.jpg";
import slider_img8 from "../../images/sliders/agent-slider08.jpg";

function SliderManager() {
  return (
    <Carousel variant="orange" fade style={{ borderRadius: 5 }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img1}
          alt="Loading Mobiswift..."
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img2}
          alt="Loading Mobiswift..."
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img3}
          alt="Loading Mobiswift..."
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img4}
          alt="Loading Mobiswift slider..."
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img5}
          alt="loading mobiswift slider 5"
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img6}
          alt="loading mobiswift slider 6"
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img7}
          alt="loading mobiswift slider 7"
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_img8}
          alt="loading mobiswift slider 8"
        />
        <Carousel.Caption class="aligner">
          <p>
            <a href="/home" class="aligners">
              <b>READ MORE</b>
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderManager;
