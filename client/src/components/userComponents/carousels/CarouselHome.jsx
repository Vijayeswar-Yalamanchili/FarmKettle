import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import CarouselOne from '../../../assets/CarouselOne.png'
import CarouselTwo from '../../../assets/CarouselTwo.png'
import CarouselThree from '../../../assets/CarouselThree.png'
import CarouselFour from '../../../assets/CarouselFour.png'

function CarouselHome() {

    return <>
        <Carousel>
            <Carousel.Item interval={2000}>
                <Image className='carouselImage' src={CarouselOne}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image className='carouselImage' src={CarouselTwo}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image className='carouselImage' src={CarouselThree}/>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image className='carouselImage' src={CarouselFour}/>
            </Carousel.Item>
        </Carousel>
    </>
}

export default CarouselHome