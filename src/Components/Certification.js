import React from "react"
import { Card } from "react-bootstrap";

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import sertifikat1 from '../Assets/Image/sertifikat-2020-11-html&css.png'
import sertifikat2 from '../Assets/Image/sertifikat-2020-10-js.png'
import sertifikat3 from '../Assets/Image/sertifikat-2020-5-webDasar.png'
import sertifikat4 from '../Assets/Image/sertifikat-2022-6-webDasar.png'

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


const Certification = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <div className="pb-sm-3">
                <h3 className="pb-3">Lisensi dan sertifikasi</h3>
                <div className="" style={{ padding: "0 30px 0 30px" }}>
                    <Slider {...settings} className="text-white px-3 pb-3">
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={sertifikat3} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Kelas Belajar Dasar Pemrogramman Website</h5>
                                        <a href="https://www.dicoding.com/certificates/1OP8LD908ZQK" className="op-date text-dark text-decoration-none">Dicoding : Mei 2020 - 2023</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={sertifikat2} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Fundamental JavaScript</h5>
                                        <a href="https://progate.com/course_certificate/5a8487eeqijgrl" className="op-date text-dark text-decoration-none">Progate : Okt 2020</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={sertifikat1} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Fundamental HTML & CSS</h5>
                                        <a href="https://progate.com/course_certificate/d9240389qi3mt2" className="op-date text-dark text-decoration-none">Progate : Nov 2020</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={sertifikat4} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Kelas Basic Web Programming</h5>
                                        <a href="https://camp404.com/public/cert/CCPR225B13098Q1S3SI" className="op-date text-dark text-decoration-none">Camp 404 : Jun 2022 - 2025</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Certification