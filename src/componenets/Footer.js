/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="text-center text-lg-start text-black mt-10" style={{ backgroundColor: '#f4f4f4', marginTop: '25px' }}>
                <div className="p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Jadoo.</h6>
                                <p>Book your trip in minute, get fullControl for much longer.</p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" id='lineFix' />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Company</h6>
                                <p><a className="text-black">About</a></p>
                                <p><a className="text-black">Careers </a></p>
                                <p><a className="text-black">Mobiles</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" id='lineFix' />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><a className="text-black">Help/FAQ</a></p>
                                <p><a className="text-black">Press </a></p>
                                <p><a className="text-black">Affilates</a></p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" id='lineFix' />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">More</h6>
                                <p><a className="text-black">Airlinefees</a></p>
                                <p><a className="text-black">Airlinefees</a></p>
                                <p><a className="text-black">Low fare tips</a></p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998', borderColor: '#3b5998' }} href="https://www.facebook.com/shruti.assignments" role="button" ><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39', borderColor: '#dd4b39' }} href="/" role="button"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac', borderColor: '#ac2bac' }} href="https://www.instagram.com/shruti.assignments/?utm_source=qr&igsh=MWgwaDV1djF5ejB3bw%3D%3D" role="button" ><i className="fab fa-instagram"></i ></a>
                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca', borderColor: '#0082ca' }} href="https://www.linkedin.com/in/shruti-jain-ab953a20/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" role="button" ><i className="fab fa-linkedin-in"></i ></a>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                    © 2024 Copyright :
                    <a className="text-black" style={{ color: 'black' }} href="https://mdbootstrap.com/">Ronak Lamba</a>
                </div>
            </footer >
        </>
    )
}

export default Footer
