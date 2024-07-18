import React from 'react'
import { Container, Image } from 'react-bootstrap'
import milkTeaBlackteaCombo from '../../../assets/milkTeaBlackteaCombo.png'
import certificationProductImage from '../../../assets/certificationProductImage.png'
import CarouselHealthCertification from '../carousels/CarouselHealthCertification'


function HealthCertificationsContent() {
    return <>
        <CarouselHealthCertification/>

        <Container>

            <div className='healthBlock'>
                <Image className='hcComboImg' src={milkTeaBlackteaCombo}/>
                <div>
                    <h4>HEALTH SECRETS OF ORGANIC TEA</h4>
                    <p>Discover the numerous health benefits of our naturally extracted teas. Rich in antioxidants, they help combat free radicals, promoting overall well-being. Our teas support a healthy immune system, enhancing your body's natural defenses. With natural ingredients, they aid in digestion and improve gut health. Regular consumption can help reduce stress and anxiety, contributing to mental clarity. Our teas also assist in weight management by boosting metabolism. Enjoy a cup daily to hydrate and rejuvenate your skin from within. Embrace the natural path to a healthier you with every sip.</p>
                </div>
            </div>

            <div className='certificationBlock'>
                <div>
                    <h4>CERTIFICATIONS</h4>
                    <p>Our commitment to quality is reflected in our array of certifications. Our teas are organically certified, ensuring no harmful pesticides or chemicals are used. We adhere to the highest standards of food safety, with HACCP and ISO certifications guaranteeing meticulous processing. Fair Trade certification highlights our dedication to ethical sourcing, supporting sustainable practices and fair wages for farmers. Our teas are also certified GMO-free, maintaining the purity of our natural ingredients. Additionally, our products are cruelty-free and vegan certified. Trust in our certified excellence for a pure and ethical tea experience.</p>
                </div>
                <Image className='hcCertifyImg' src={certificationProductImage}/>
            </div>

        </Container>
    </>
}

export default HealthCertificationsContent