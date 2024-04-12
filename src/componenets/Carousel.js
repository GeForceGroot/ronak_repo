import React from 'react'
import '../style/carousel.css'
import image from '../style/Traveller 1.png'
import plane from '../style/plane.png'

const Carousel = () => {
    return (
        <>
            <div className='container' id='carousel' >
                <div className='row' id='rM'>
                    <div className='col'>
                        <div className='wow container fadeInUp pst'>
                            <span style={{ color: "#DF6951" }} className="pro-status">Best Destinations around the world</span>
                            <p style={{ color: '#181E4B' }} className="mtb40">Travel,<span id='wordBg'>enjoy</span><br />and live a new<br />and full life</p>
                            <p style={{ color: "#5E6282" }} className='nxtpara'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        </div>
                        <div className='btnTalk' >
                            <a href="/contact_us" target='_blank'>
                                <button type="button" className="btn btn-primary " style={{ backgroundColor: "#F1A501", border: "1px solid #F1A501", borderRadius: "10px" }} id='btnHvn'>
                                    {/* <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" /> */}
                                    Find Out More</button>
                            </a>
                            <img style={{ marginLeft: "40px", width: '40px', height: '40px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdTa83yKu888VuDEKWY8KTx9umHX1uC-xcv8lLXcamA&s" alt="playbtn" />
                        </div>
                    </div>
                    <div className='col mtb41'>
                        <img src={plane} alt="plane" />
                        <img id='imgBgCS' src={image} height={"400px"} alt="traveler" />
                        <img src={plane} alt="plane" />
                    </div>
                </div>
            </div>
            <hr style={{ borderTop: '2px dashed black' }} />
        </>
    )
}

export default Carousel