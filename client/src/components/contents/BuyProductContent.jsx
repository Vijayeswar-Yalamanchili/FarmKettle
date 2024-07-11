import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../ProductCard'
import blackTeaImage from '../../assets/blackTea.png'
import herbalTeaImage from '../../assets/herbalTea.png'
import blackTeaComboImage from '../../assets/blackTeaCombo.png'
import herbalTeaComboImage from '../../assets/herbalTeaCombo.png'
import { CartDataContext } from '../../contextApi/CartDataComponent'

function BuyProductContent() {

    let { cart, setCart} = useContext(CartDataContext)

    let productCardData = [
        {
            productImage : blackTeaImage,
            productTitle : 'Black Tea',
            productWeight : '(250g)',
            ProductDescription : 'FarmKettle Organic black Tea Bag',
        },
        {
            productImage : blackTeaImage,
            productTitle : 'Black Tea',
            productWeight : '(500g)',
            ProductDescription : 'FarmKettle Organic black Tea Bag',
        },
        {
            productImage : blackTeaImage,
            productTitle : 'Black Tea',
            productWeight : '(1Kg)',
            ProductDescription : 'FarmKettle Organic black Tea Bag',
        },
        {
            productImage : blackTeaComboImage,
            productTitle : 'Black Tea Combo',
            productWeight : '(1Kg +1Kg)',
            ProductDescription : 'FarmKettle Organic black Tea Bag',
        },
        {
            productImage : herbalTeaImage,
            productTitle : 'Herbal Tea',
            productWeight : '(250g)',
            ProductDescription : 'FarmKettle Organic Herbal Tea Bag',
        },
        {
            productImage : herbalTeaImage,
            productTitle : 'Herbal Tea',
            productWeight : '(500g)',
            ProductDescription : 'FarmKettle Organic Herbal Tea Bag',
        },
        {
            productImage : herbalTeaImage,
            productTitle : 'Herbal Tea',
            productWeight : '(1Kg)',
            ProductDescription : 'FarmKettle Organic Herbal Tea Bag',
        },
        {
            productImage : herbalTeaComboImage,
            productTitle : 'Herbal Tea Combo',
            productWeight : '(1Kg +1Kg)',
            ProductDescription : 'FarmKettle Organic Herbal Tea Bag',
        },
        
    ]

    return <> 
        <div className='my-4'>
            <div className='d-flex justify-content-between align-items-center'> 
                <h2>PRODUCTS LIST</h2>
            </div>
            <div className='productCard mt-4'>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {
                    productCardData.map((e,i) => {
                        return <ProductCard cart={cart} setCart={setCart} cardData={e} key={i}/>
                    })
                }
                </Row>
            </div>
        </div>
    </>
}

export default BuyProductContent