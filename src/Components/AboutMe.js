import React from "react"
import {Card} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import profil from '../Assets/Image/profil2.png'
import fauzi from '../Assets/Image/profil-fauzi.JPG'

const AboutMe = () => {
    return(
        <React.Fragment>
            <Card bg='dark' style={{ borderRadius:20 }}>
                <Card.Body className='text-white'>
                    <div className="row justify-content-center px-3 py-3">
                        <div className="col-md-6 col-sm-12 text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <img src={fauzi} className='profil-picture text-center' alt='profil picture'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 text-center">
                            <h4 className="fw-bold pt-3"><FontAwesomeIcon icon={faCircleExclamation}/> Information</h4>
                            <hr className="fw-bold"/>
                            <p className="description">Saya Fauzi Aditya Pratama. Mahasiswa dari Institut Teknologi Telkom Purwokerto yang sedang belajar tentang pemrogramman. Bahasa yang sedang saya pelajari sekarang adalah REACT JS, dengan bahasa ini juga website portofolio ini dibuat. </p>
                            <div>
                                <a href="https://www.linkedin.com/in/fauzi-aditya-pratama-9ab971214" target="_blank" className="text-white fa-2x me-3 icons"><FaLinkedin/></a>
                                <a href="https://github.com/fauzi0413" target="_blank" className="text-white fa-2x me-3 icons"><FaGithub/></a>
                                <a href="https://www.instagram.com/fauzi_4p" target="_blank" className="text-white fa-2x me-3 icons"><FaInstagram/></a>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}

export default AboutMe