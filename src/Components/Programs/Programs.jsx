import React, { useState, useEffect } from 'react';
import './Programs.css'; // Import your CSS file

// Import your images
import program_1 from '../../assets/program-35.png';
import program_2 from '../../assets/program-36.png';
import program_3 from '../../assets/program-37.png';
import program_4 from '../../assets/program-38.png'; 
import program_5 from '../../assets/program-34.png';
import program_7 from '../../assets/program-31.png';
import program_8 from '../../assets/program-32.png';
import program_9 from '../../assets/program-33.png';


const Programs = () => {
  const imageSets = [
    [program_1, program_2, program_3, program_4], // First set
    [program_5, program_9,program_7,program_8] // Second set
  ]; 

  const [activeIndex, setActiveIndex] = useState(0); // Track the active set index
  const totalSets = imageSets.length;

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSets);
  };

  // Automatically move to the next set every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSets);
    }, 3000); // Change this value for a different duration

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalSets]);

  return (
    <div className="programs">
      <div className="carousel">
        <span className="arrow" onClick={handlePrevClick}>&lt;</span>
        <div className="image-container">
          <div className="image-set">
            {imageSets[activeIndex].map((image, index) => (
              <div className="image-item" key={index}>
                <img src={image} alt={`Program ${index + 1}`} />
                <div className="caption">
                  <img src="path/to/icon.png" alt="Icon" /> {/* Replace with your icon path */}
                  <h4>Program {index + 1 + (activeIndex * 4)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="arrow" onClick={handleNextClick}>&gt;</span>
      </div>
      <div className="dots">
        {Array.from({ length: totalSets }, (_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Programs;
