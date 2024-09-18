import React, { useState } from 'react';
import '../Styles/Hero.css'; 
import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators, Modal, ModalBody, ModalHeader } from 'reactstrap';
import pic1 from '../Asset/pic1.jpg';
import pic2 from '../Asset/Pic2.jpg';
import pic3 from '../Asset/Pic3.jpg';

const items = [
  { 
    id: 1,
    caption: "Eleminating Barriers",
    title: "Empowering access for all",
    imgSrc: pic1
  },
  { 
    id: 2,
    caption: "Streamlining Pregnancy Support",
    title: "Supporting You, Every Stage",
    imgSrc:  pic2
  },
  { 
    id: 3,
    caption: 'Protecting Patients, Protecting our selves',
    title: "Protecting your helath, our priority",
    imgSrc: pic3
  }
];

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // Modal state
  const [modalEnglish, setModalEnglish] = useState(false);
  const [modalHausa, setModalHausa] = useState(false);

  // Modal toggle functions
  const toggleModalEnglish = () => {
    setModalEnglish(!modalEnglish);
  };

  const toggleModalHausa = () => {
    setModalHausa(!modalHausa);
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
        <img src={item.imgSrc} alt={item.caption} className="carousel-img" />
        <CarouselCaption
          className="tag"
          captionText={item.title}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <section className="hero">
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
      <div className="hero-text">
        <h1>Connecting <span className="highlight">Patients</span></h1>
        <h5>Complete solution for managing appointments, patients, and professionals, all in one place.</h5>
        <h6>Chat with our Assistant</h6>
        <button className="learn-more-btn" onClick={toggleModalEnglish}>English</button>
        <button className="learn-more-btn" onClick={toggleModalHausa}>Hausa</button>
      </div>

      {/* Modal for English */}
      <Modal isOpen={modalEnglish} toggle={toggleModalEnglish} size="md">
        <ModalHeader toggle={toggleModalEnglish}>Chat with Our Assistant</ModalHeader>
        <ModalBody>
          <iframe
            src="https://landbot.online/v3/H-2610265-T4CUS8TORCBIWTN1/index.html"
            width="100%"
            height="400px"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Chatbot"
          />
        </ModalBody>
      </Modal>

      {/* Modal for Hausa */}
      <Modal isOpen={modalHausa} toggle={toggleModalHausa} size="md">
        <ModalHeader toggle={toggleModalHausa}>Chat with Our Assistant</ModalHeader>
        <ModalBody>
          <iframe
            src="https://landbot.online/v3/H-2611973-U4SUCTE49YKRJKWC/index.html"
            width="100%"
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
}

export default HeroSection;
