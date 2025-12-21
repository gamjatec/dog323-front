import { Icon } from "@iconify/react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const DogDetailImageSlider = ( {img} ) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const total = img.length;

  const goPrev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  };

  const goNext = () => {
    if (current < total - 1) setCurrent(prev => prev + 1);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  }

  const handleTouchEnd = (e) => {
    if (startX === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && current < total - 1) {
      setCurrent(prev => prev + 1);
    }
    if (diff < -50 && current > 0) {
      setCurrent(prev => prev - 1);
    }

    setStartX(null);
  }


  return (
    <div 
      className="dog-detail-img-slider"
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <div 
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {img.map((src, idx) => (
          <div className="slide" key={idx}>
            <img src={src} alt={`강아지 사진`} />
          </div>
        ))}
      </div>

      <button className="prev-btn" onClick={goPrev} disabled={current === 0}>
        <Icon icon="fluent:arrow-circle-up-12-filled" width="50" height="50" />
      </button>
      <button className="next-btn" onClick={goNext} disabled={current === total - 1}>
        <Icon icon="fluent:arrow-circle-up-12-filled" width="50" height="50" />
      </button>

      <span className="indicator">
        { current + 1 } / {total}
      </span>
    </div>
  );
};

export default DogDetailImageSlider;