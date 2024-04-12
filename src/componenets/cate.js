import React from 'react'
import tower from '../style/tower.png'
import flight from '../style/plane.png'
import mic from '../style/mic.png'
import serveice from '../style/setting.png'
import rect from '../style/Rectangle 157.png'
import '../style/catCss.css'

const Cate = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center', marginTop: "150px" }} id='pluseAdd'>
                <h4 style={{ color: "gray" }}>CATEGORY</h4>
                <h2 style={{ marginTop: '25px' }}>We Offer Best</h2>
                <div className='row' style={{ marginTop: '100px' }}>
                    <div className='col' style={{ padding: "25px" }}>
                        <div id='tBg' className='container'>
                            <img src={tower} alt="tower" />
                        </div>
                        <h4 style={{ marginTop: '25px' }}>Calculated Weather</h4>
                        <p style={{ marginTop: '20px' }}>Built Wicket longer admire do barton vanity itself do in it.</p>
                    </div>
                    <div className='col' style={{ padding: "25px" }} >
                        <div id='flBg' className='container'>
                            <img src={flight} alt="plane" />
                        </div>
                        <h4 style={{ marginTop: '25px' }}>Best Flights</h4>
                        <p style={{ marginTop: '20px' }}>Engrossed listening. Park gate sell they west hard for the.</p>
                        <img src={rect} alt="reactnge" id='bgrt' />
                    </div>
                    <div className='col' style={{ padding: "25px" }} >
                        <div id='miBg' className='container'>
                            <img src={mic} alt="mic" />
                        </div>
                        <h4 style={{ marginTop: '25px' }}>Local Events</h4>
                        <p style={{ marginTop: '20px' }}>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                    </div>
                    <div className='col' style={{ padding: "25px" }}>
                        <div id='srBg' className='container'>
                            <img src={serveice} alt="setting" style={{ marginTop: '15px' }} />
                        </div>
                        <h4 style={{ marginTop: '25px' }}>Customization</h4>
                        <p style={{ marginTop: '20px' }}>We deliver outsourced aviation services for military customers</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cate
