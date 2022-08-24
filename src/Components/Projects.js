import React from "react"
import { Carousel, Badge } from "react-bootstrap";

import { faCircle, faBarsProgress, faCode, faFileLines, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import osh1 from '../Assets/Image/OSH/img (1).png'
import osh2 from '../Assets/Image/OSH/img (2).png'
import osh3 from '../Assets/Image/OSH/img (3).png'
import osh4 from '../Assets/Image/OSH/img (4).png'
import osh5 from '../Assets/Image/OSH/img (5).png'
import ModalDescription from "./ModalDescription";

const SampleNextArrow = (props) => {
    const {className, style, onClick} = props
    return(
        <div
            className={className}
            style={{ ...style, color: "black"}}
            onClick={onClick}
        />
    )
}

const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props
    return(
        <div
            className={className}
            style={{ ...style, color: "black"}}
            onClick={onClick}
        />
    )
}

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return(
        <React.Fragment>
            <div className="py-5" id="project">
                <h3 className="pb-3">Projek yang saya buat</h3>
                <div className="" style={{ padding: "0 30px 0 30px" }}>
                    <Slider {...settings} className="text-white px-3 pb-3">
                        <div className="px-4">
                            <div className="row py-3">
                                <div className="col-md-12 col-lg-6 p-2 h-100 rounded-4 shadow">
                                    <Carousel variant="dark">
                                        <Carousel.Item>
                                            <img className="d-block w-100 rounded-2 img-item" src={osh1} alt="First slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 rounded-2 img-item" src={osh2} alt="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 rounded-2 img-item" src={osh3} alt="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 rounded-2 img-item" src={osh4} alt="Second slide"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 rounded-2 img-item" src={osh5} alt="Second slide"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-md-12 col-lg-6 px-lg-4 ps-lg-5 py-md-4 py-lg-0 d-none d-md-block text-dark">
                                    <h2 className="fw-bold">Olimpiade Satu Hati</h2>
                                    <hr/>
                                    <div className="mb-2">
                                        <FontAwesomeIcon icon={faBarsProgress} />
                                        <span className="h5 ms-2">Projek dilakukan secara : Tim</span>
                                    </div>
                                    <div className="mb-2">
                                        <FontAwesomeIcon icon={faCode} />
                                        <span className="h5 ms-2">Teknologi yang digunakan : </span>
                                        <div className="ms-4">
                                            <div>
                                                <FontAwesomeIcon icon={faCircle} className="fw-bold me-2" style={{fontSize:10}}/>
                                                <Badge bg='primary' className="bagde">CSS</Badge>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon icon={faCircle} className="fw-bold me-2" style={{fontSize:10}}/>
                                                <Badge bg="" className="bagde" style={{ backgroundColor:'#FF5733' }}>HTML</Badge>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <FontAwesomeIcon icon={faFileLines} />
                                        <span className="h5 ms-2">Deskripsi Projek : </span>
                                        <div className="ms-4">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum esse inventore reiciendis voluptate, sapiente, perspiciatis minima et debitis dignissimos harum nisi ex? Odit non perspiciatis adipisci. Dicta nisi, cupiditate alias.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="https://telsquiz.com" target="_blank" className="btn btn-success fw-bold ms-4"><FontAwesomeIcon icon={faEye} className="me-1"/>Lihat projek</a>
                                    </div>
                                </div>

                                <div className="row justify-content-center d-block d-sm-none pt-3 ms-1">
                                    <h2 className="text-dark text-center">Olimpiade Satu Hati</h2>
                                    <a href="https://telsquiz.com" target="_blank"  className="btn btn-success mb-2 fw-bold"><FontAwesomeIcon icon={faEye} className="me-1"/>Lihat projek</a>
                                    <ModalDescription/>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects