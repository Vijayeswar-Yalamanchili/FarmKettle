import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AdminDashboardContent() {

    let navigate = useNavigate()
    let accountCardsList = [
        {
            route : 'profile',
            // iconImg : myProfileImage,
            title : 'My Profile',
            subtitle : 'Modify your details'
        },
        {
            route : 'address',
            // iconImg : addressImage,
            title : 'Your Address',
            subtitle : 'Delivery locations'
        },
        {
            route : 'orders',
            // iconImg : ordersImage,
            title : 'Your Orders',
            subtitle : 'List of your orders'
        }
    ]

    const handleCardBtn = async(e) => {
        if(e.route === 'orders'){
            navigate(`/myorders`)
        }else{
            navigate(`/myaccount/${e.route}`)
        }
    }

    return <>
        <Container>
            <div className='dashboardCards'>
                {
                    accountCardsList.map((e,i) => (
                        <Card className='cardAcc' key={i} onClick={() => handleCardBtn(e)}>
                            <Card.Body className='cardBody'>
                                {/* <Image src={e.iconImg} className='cardImage'/> */}
                                <div className='cardBodyText'>
                                    <h4>{e.title}</h4>
                                    <p className='subtitle'>{e.subtitle}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </Container>
    </>
}

export default AdminDashboardContent