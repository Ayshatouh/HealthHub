import React, { useState } from 'react';
import '../Styles/Hero.css'; 
import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators, Modal, ModalBody, ModalHeader } from 'reactstrap';
import pic1 from '../Asset/pic1.jpg'
import pic2 from '../Asset/Pic2.jpg'
import pic3 from '../Asset/Pic3.jpg'
const items = [
  { 
    id: 1,
    caption: "Launch of clinical developments",
    imgSrc: pic1
  },
  { 
    id: 2,
    caption: "History with the patient's medical records",
    imgSrc:  pic2
  },
  { 
    id: 3,
    caption: 'Information about doctors and nurses',
    imgSrc: pic3
  }
];

function HeroSection(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = ()=>{
    setModalOpen(!modalOpen);
  };


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        
      >
        {/* onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)} */}
        
        <img src={item.imgSrc} alt={item.caption} className="carousel-img" />
        <CarouselCaption
          className="tag"
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="hero d-flex">
      <div className="hero-text">
        <h1>Connecting <span className="highlight">Patients</span></h1>
        <p>Complete solution for managing appointments, patients, and professionals, all in one place.</p>
        <button className="learn-more-btn" onClick={toggleModal}>Chat with our Assistant</button>
      </div>

      <div className="hero-carousel">
        <Carousel activeIndex={activeIndex} next={next} previous={previous} className="tag">
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
      {/* Modal for Chatbot */}
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Chat with Our Assistant</ModalHeader>
        <ModalBody>
          {/* Embed your Landbot here */}
          <iframe
            src="https://landbot.online/v3/H-2610265-T4CUS8TORCBIWTN1/index.html" // Replace with your Landbot embed URL
            width="80%"
            height="400px"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Chatbot"
          />
        </ModalBody>
      </Modal>
    </section>
  );
};

export default HeroSection;
