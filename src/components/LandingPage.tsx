import { useState } from 'react'


const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'src/images/goku1.jpg',
    'src/images/goku2.jpg',
  ];

  const handleClick = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div>
      <h1>Click on goku to go super saiyan!</h1>
      <div>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default LandingPage;
