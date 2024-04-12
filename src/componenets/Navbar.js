/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../style/navbarCss.css'
import logo from '../style/Logo.png'

const Navbar = () => {
    return (
        <>
            <section style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', backgroundColor: "white", border: "2px solid lightgray", position: "sticky", top: '0', zIndex: '1', opacity: '.8' }}>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="80" height="40" alt="logo" />
                        </a>
                        {/* <a className="navbar-brand" href="/" >Smart Study Assist</a> */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <div className='container'></div>
                            <div className="form-inline my-2 my-lg-0" >
                                <ul className="navbar-nav ml-auto" style={{ fontSize: "15px", marginBottom: "15px", paddingTop: "10px" }}>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">Destination<span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/about_us">hotels<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/allServices">Flights<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/portfolio">Booking<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/contact_us">Login<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" target='_blank' href="/contact_us">Sign&nbsp;up<span className="sr-only"></span></a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            En
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Hindi</a>
                                            <a className="dropdown-item" href="#">En</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar