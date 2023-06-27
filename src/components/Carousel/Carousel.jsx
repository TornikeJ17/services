import React, { useState } from 'react';
import { Container, Image, ButtonContainer, Button, DotContainer, Dot } from './CarouselStyle'
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const images = [
        {
            image: 'https://www.usa.gov/s3/files/2023-01/Banner_img_Turning_65_en.png'
        },
        {
            image: 'https://www.usa.gov/s3/files/2023-01/Banner_img_Birth_en.png'
        },
        {
            image: 'https://www.usa.gov/s3/files/2023-01/Banner_img_Turning_18_en.png'
        }
    ]
    return (
        <Container>

            <div>
                <Image
                    src={images[currentIndex].image}
                    alt={`Slide ${currentIndex + 1}`}
                    onClick={nextSlide}
                />
                <ButtonContainer>
                    <Button onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="25" height="25"><path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z" /></svg>
                    </Button>
                    <DotContainer>
                        {images.map((_, index) => (
                            <Dot key={index} active={index === currentIndex} onClick={() => setCurrentIndex(index)} />
                        ))}
                    </DotContainer>
                    <Button onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="25" height="25"><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z" /></svg>
                    </Button>
                </ButtonContainer>
            </div>

        </Container>
    );
};

export default Carousel;
