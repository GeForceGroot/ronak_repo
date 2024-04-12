import React from 'react'
import '../style/contact.css'

const Contac = () => {
    return (
        <>
            <div className='container' style={{ marginTop: "100px", textAlign: 'center' }} id='cont'>
                <h3 style={{ paddingTop: "50px", paddingBottom: '50px' }}>Subscribe to get information, latest news and other<br />interesting offers about Cobham</h3>
                <div className='container' style={{ textAlign: 'center', paddingBottom: '50px' }}>
                    <form >
                        <div className="form-group" style={{display:"flex", justifyContent:'center'}} >
                            <input type="email" style={{ border: '1px solid gray', width: '500px', height: '40px', borderRadius: "10px" }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <div className='btnTalk' style={{ marginLeft: "40px" }} >
                                <a href="/contact_us" target='_blank'>
                                    <button type="button" className="btn btn-primary " style={{ backgroundColor: "##d13c3c", border: "1px solid #d13c3c", borderRadius: "10px" }} id='btnHvn'>
                                        {/* <img src="https://www.svgrepo.com/show/51022/working.svg" width={'25px'} height={'25px'} style={{ marginRight: '15px' }} alt="phone" /> */}
                                        Subscribe</button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contac
