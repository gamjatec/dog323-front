import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide01 from '../../../assets/images/slide01.png';
import slide02 from '../../../assets/images/slide02.png';
import slide03 from '../../../assets/images/slide03.png';
import slide04 from '../../../assets/images/slide04.png';
import { Icon } from "@iconify/react";

const HomeSlider = () => {
  const sliderRef = useRef(null);
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const requestRef = useRef(null);
  const startTimeRef = useRef(null);
  const elapsedBeforePauseRef = useRef(0); // 멈춘 시점까지 누적 경과
  const slideDuration = 5000;
  const totalSlides = 4;

  // 슬라이드별 색상
  const progressColors = ["#4E8ABC", "#D38C2F", "#409CAD", "#E48131"];
  const iconColors = ["#4E8ABC", "#D38C2F", "#409CAD", "#E48131"];

  const animate = (time) => {
    if (!isPlaying) {
      // 멈춤 상태: 누적 경과 시간 저장
      if (startTimeRef.current) {
        elapsedBeforePauseRef.current += time - startTimeRef.current;
      }
      startTimeRef.current = null;
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!startTimeRef.current) startTimeRef.current = time;

    const elapsed = time - startTimeRef.current + elapsedBeforePauseRef.current;
    let percent = (elapsed / slideDuration) * 100;

    if (percent >= 100) {
      const nextSlide = (currentSlide + 1) % totalSlides;
      setCurrentSlide(nextSlide);
      sliderRef.current.slickGoTo(nextSlide);

      startTimeRef.current = time;
      elapsedBeforePauseRef.current = 0;
      percent = 0;
    }

    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${percent}%`;
      progressBarRef.current.style.backgroundColor = progressColors[currentSlide];
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [currentSlide, isPlaying]);

  const togglePlay = () => setIsPlaying(prev => !prev);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="slide"><img src={slide01} alt="슬라이드1" /></div>
        <div className="slide"><img src={slide02} alt="슬라이드2" /></div>
        <div className="slide"><img src={slide03} alt="슬라이드3" /></div>
        <div className="slide"><img src={slide04} alt="슬라이드4" /></div>
      </Slider>

      <div className="bottom-wrap">
        <div className="progress-bar">
          <div className="progress" ref={progressBarRef} />
        </div>
        <div className="btn-wrap">
          <button
            className="button"
            onClick={togglePlay}
            style={{ cursor: "pointer" }}
          >
            <Icon
              icon={isPlaying ? "icon-park-solid:pause-one" : "icon-park-solid:play"}
              width="38"
              height="38"
              style={{ pointerEvents: "none", color: iconColors[currentSlide] }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
