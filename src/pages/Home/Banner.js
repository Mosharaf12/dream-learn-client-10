import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return ( <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://i.ytimg.com/vi/kX0tq3qsY_U/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='text-info'>PROGRAMMING LANGUAGES</h1>
            <p>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://www.zdnet.com/a/img/resize/1cdd834a67ca0e501bb561a00a46281bbac50b1f/2021/06/30/0286f74b-453c-4472-b5c1-321b18475c78/technical-visual-studio-code-extension.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h1 className='text-info'>PROGRAMMING LANGUAGES</h1>
            <p>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h1 className='text-info'>PROGRAMMING LANGUAGES</h1>
            <p>A programming language is a system of notation for writing computer programs. Most programming languages are text-based formal languages, but they may also be graphical</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

export default Banner;