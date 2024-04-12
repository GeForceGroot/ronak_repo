import React from 'react'
import rome from '../style/Rectangle 14 (1).png'
import london from '../style/Rectangle 14 (2).png'
import ep from '../style/Rectangle 14.png'
import '../style/top.css'

const TopSelling = () => {
    return (
        <>
            <div className='container' style={{ textAlign: 'center' }}>
                <h4 style={{ color: "gray" }}>CATEGORY</h4>
                <h2 style={{ marginTop: '25px' }}>We Offer Best</h2>
                <div className='row' style={{marginTop:'50px'}}>
                    <div className='col-sm'>
                        <img src={rome} alt="Shoes" width={'315px'} height={'400px'} />
                        <div className='container' >
                            <div className='row' style={{ marginTop: '15px' }}>
                                <div className='col' ><h5 >Rome, Itlay</h5></div>
                                <div className='col'>$5.42k</div>
                            </div>
                        </div>
                        <h5>
                            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-telegram-1.png" width={'30px'} height={'30px'} alt="aroow" /> 10 Days Trip
                        </h5>
                    </div>
                    <div className='col-sm' >
                        <img src={london} alt="Shoes" width={'315px'} height={'400px'} />
                        <div className='container'>
                            <div className='row' style={{ marginTop: '15px' }}>
                                <div className='col' ><h5 >London, Uk</h5></div>
                                <div className='col'>$4.2k</div>
                            </div>
                        </div>
                        <h5>
                            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-telegram-1.png" width={'30px'} height={'30px'} alt="aroow" /> 10 Days Trip
                        </h5>
                    </div>
                    <div className='col-sm' id='bgD'>
                        <img src={ep} alt="Shoes" width={'315px'} height={'400px'} />
                        <div className='container'>
                            <div className='row' style={{ marginTop: '15px' }}>
                                <div className='col' ><h5 >Full Europe</h5></div>
                                <div className='col'>$15k</div>
                            </div>
                        </div>
                        <h5>
                            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-telegram-1.png" width={'30px'} height={'30px'} alt="aroow" /> 10 Days Trip
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopSelling
