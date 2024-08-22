import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxCircle } from 'react-icons/rx';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const Rotator = () => {
  const slides = [
    {
      url: image1,
      header: "Bibendum facilisi mauris",
      text: "Fusce ac scelerisque sed suspendisse eros fringilla ullamcorper nulla. Senectus faucibus venenatis felis curabitur venenatis. Id placerat nibh egestas faucibus; phasellus habitasse fusce. Auctor eros vitae consequat."
    },
    {
      url: image2,
      header: "Velit ultricies faucibus ",
      text: "Pellentesque velit quis platea fermentum, rhoncus aliquam nibh. Finibus viverra facilisi efficitur ad natoque dignissim senectus faucibus. Convallis morbi tempor sapien convallis mi."
    },
    {
      url: image3,
      header: "Pellentesque natoque quis",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
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
    }, 10000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] w-full m-auto  px-12 relative group">
      <div className="flex h-full justify-center">
        <div className="w-1/2 h-full p-8 mx-4">
          <img src={slides[currentIndex].url} alt="Slide image" className="w-full h-full object-fit rounded-lg mx-auto" />
        </div>
        <div className="w-1/2 h-full p-12 mx-4">
          <h2 className="text-2xl font-semibold text-purple-600">{slides[currentIndex].header}</h2>
          <p className="text-base mt-4 text-gray-400 mb-8">{slides[currentIndex].text}</p>
          <Link to="/sign-up" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded mt-4">Build My Resume</Link>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex absolute bottom-10 left-0 right-0 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div className="text-2xl cursor-pointer" key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <RxCircle size={14} className={`mx-1 text-indigo-500 ${currentIndex === slideIndex ? 'text-indigo-500' : 'text-gray-300'} fill-current`}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotator;
