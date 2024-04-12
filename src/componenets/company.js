import React from 'react'
import logo1 from '../style/image 27.png'
import logo2 from '../style/image 28.png'
import logo3 from '../style/image 30.png'
import logo4 from '../style/image 31.png'
import logo5 from '../style/Group 63.png'

const Company = () => {
    return (
        <>
            <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-1" id="p1"> <img src={logo1} style={{ marginLeft: "100px" }} width={'100px'} height={'200px'} alt="" /></div>
                    <div className="col-xs-2" id="p2"> <img src={logo2} style={{ marginLeft: "100px" }} width={'100px'} height={'200px'} alt="" /></div>
                    <div className="col-xs-2" id="p3"> <img src={logo2} style={{ marginLeft: "100px", width: '100px', height: '200px' }} alt="" /></div>
                    <div className="col-xs-2" id="p4"> <img src={logo5} style={{ marginLeft: "100px", width: '100px', height: '200px' }} alt="" /></div>
                    <div className="col-xs-2" id="p5"><img src={logo5} style={{ marginLeft: "100px" }} width={'100px'} height={'200px'} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Company
