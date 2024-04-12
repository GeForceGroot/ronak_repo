/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import addmi from '../style/Image.png'
import '../style/testo.css'

const Testo = () => {
    return (
        <>
            <div className='container' style={{ marginTop: '100px' }}>
                <div className='row'>
                    <div className='col'>
                        <h4 style={{ color: "gray" }}>Testimonials</h4>
                        <h2 style={{ marginTop: '25px' }}>What people say<br/>about Us</h2>
                    </div>
                    <div className='col'>
                        <img id='bgadd' src={addmi} alt="" />
                        <p>On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.</p>
                        <h4 style={{marginTop:'35px'}}>Mike Taylor</h4>
                        <p style={{marginTop:'10px'}}>Lahor, Pakistan</p>
                        <h4 style={{marginTop:'25px'}}>Chirs Thomas</h4>
                        <p style={{marginTop:'10px'}}>CEO of xyz</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testo
