import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesPacking, faCartFlatbed, faFileLines, faGlobe, faMedal, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import CarouselHome from '../carousels/CarouselHome'
import teaMakingStep1 from '../../../assets/teaMakingStep1.png'
import teaMakingStep2 from '../../../assets/teaMakingStep2.png'
import teaMakingStep3 from '../../../assets/teaMakingStep3.png'

function HomeContent() {

    let productionCards = [
        {
            icon : faGlobe,
            text : "Production from Regions"
        },
        {
            icon : faMedal,
            text : "Quality Assurance"
        },
        {
            icon : faBoxesPacking,
            text : "Packing Technology"
        },
        {
            icon : faFileLines,
            text : "Terms and Margins"
        },
        {
            icon : faMobileScreenButton,
            text : "Online Buy Platform"
        },
        {
            icon : faCartFlatbed,
            text : "Availability of Microlots"
        },
    ]

    return <>
        <CarouselHome/>
        <Container>
        <div className='homeTextContent'>

            <div className='homeTextLeftContent'>
                <div>
                    <h5 className='mb-3'>Welcome to FarmKettle – where every sip    brings you closer to nature.</h5>
                    <p>
                        At FarmKettle, we believe that the best tea comes from the  purest sources. Our teas are carefully cultivated using  natural methods, ensuring that you experience the true essence   of tea with every cup. Whether you are a seasoned tea     connoisseur or new to the world of tea, we invite you to    explore our diverse selection of premium teas, each crafted to     perfection.
                    </p>
                    <div>
                        Discover our range of exquisite teas:
                        <ul>
                            <li><b>Green Tea:</b> Refreshing and invigorating, our  green teas are rich in antioxidants and flavor.</ li>
                            <li><b>Black Tea:</b> Bold and robust, our black teas are perfect for a morning boost or an afternoon indulgence.</ li>
                            <li><b>Herbal Tea:</b> Delicate and soothing, our herbal teas offer a relaxing escape from the hustle and bustle of daily life.</li>
                            <li><b>Specialty Blends:</b> Unique and flavorful, our specialty blends are crafted to surprise and delight your senses.</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h5>How to make</h5>
                    <p>A HEALTHY CUP OF FARMKETTLE TEA</p>
                    <p style={{color : '#0E6B06'}}>3 Steps to an inviting cup of Farmkettle Tea</p>
                    <div className='tipsBlock' >
                        <div className='d-flex flex-column'>
                            <Image className='tipsImage' src={teaMakingStep1}/>
                            <p className='text-center' style={{width : '7rem', fontSize : "0.75rem"}}>Pour Hot Milk / Water at 90&deg; in cup</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <Image className='tipsImage' src={teaMakingStep2}/>
                            <p className='text-center' style={{width : '7rem', fontSize : "0.75rem"}}>Dip FarmKettle Tea bag for 2 minutes</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <Image className='tipsImage' src={teaMakingStep3}/>
                            <p className='text-center' style={{width : '7rem', fontSize : "0.75rem"}}>Your healthy cup of tea is ready</p>
                        </div>
                    </div>
                    <p style={{color : '#0E6B06'}}>Tips : Sweeten with Honey for better health</p>
                </div>
            </div>

            <div className='homeTextRightContent'>
                <div style={{color : "#0E6B06"}} className='mb-3'><b>FARMKETTLE TEA PRODUCTION</b></div>
                <div>
                {
                    productionCards.map((e,i) => {
                        return <div className='processStepBlock d-flex justify-content-start align-items-center p-2 mb-5' style={{backgroundColor : '#0E6B06', color : "white"}} key={i}>
                            <FontAwesomeIcon icon={e.icon} className='mx-3'/>
                            <div className='mb-0 ms-3'>{e.text}</div>
                        </div>
                    })
                }
                </div>
            </div>

        </div>
        </Container>
    </>
}

export default HomeContent