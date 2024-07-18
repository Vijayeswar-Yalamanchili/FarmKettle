import React from 'react'
import { Container, Image } from 'react-bootstrap'
import aboutImage from '../../../assets/aboutImage.png'
import aboutProductImage from '../../../assets/aboutProductImage.png'

function AboutContent() {
    return <>
        <Image src={aboutImage} className='aboutImage'/>
        <Container>            
            <div className='aboutContent'>

                <div className='aboutLeftContent'>
                    <p>
                        At FarmKettle, our story begins with a passion for purity and a commitment to nature. We are a team of tea enthusiasts dedicated to bringing you the finest teas cultivated through natural methods. Our mission is to provide a tea experience that is authentic, flavorful, and sustainable.
                    </p>
                    <h4>Our values</h4>
                    <ul>
                        <li><b>Quality:</b> We believe that great tea starts with great ingredients. That’s why we source our tea leaves from the best tea gardens, ensuring that every cup is of the highest quality.</li>
                        <li><b>Sustainability:</b> Our teas are grown using environmentally friendly practices that protect the earth and preserve the natural habitat. We are committed to reducing our carbon footprint and promoting biodiversity.</li>
                        <li><b>Purity:</b> By using natural methods, we ensure that our teas are free from artificial additives and chemicals. This not only enhances the flavor but also preserves the health benefits of the tea.</li>
                        <li><b>Community:</b> We work closely with local farmers and communities, supporting fair trade practices and contributing to their economic well-being.</li>
                    </ul>
                </div>

                <div className='aboutRightContent'>
                    <Image className='aboutPrdtImage' src={aboutProductImage} height={400}/>
                </div>
            </div>
        </Container>
    </>
}

export default AboutContent