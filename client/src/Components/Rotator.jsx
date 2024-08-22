import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Rotator = () => {
  const slides = [
    {
      url: 'image1',
      text: "Slide 1 text"
    },
    {
      url: 'image2',
      text: "Slide 2 text"
    },
    {
      url: 'image3',
      text: "Slide 3 text"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000); // 15 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div className="flex h-full">
        <div className="w-1/2 h-full p-12">
          <img src={slides[currentIndex].url} alt="Slide image" className="w-4/4 h-4/4 object-fit rounded-lg mx-auto" />
        </div>
        <div className="w-1/2 h-full p-12">
          <h2 className="text-3xl font-bold">{slides[currentIndex].text}</h2>
          {/* Add more text elements or components as needed */}
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div className="text-2x; cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotator;
