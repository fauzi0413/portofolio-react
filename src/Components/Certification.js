import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import profil from '../Assets/Image/profil.png'
import profil2 from '../Assets/Image/profil2.png'
import gambar from '../Assets/Image/gambar.png'
import gambar2 from '../Assets/Image/gambar2.png'
import valorant from '../Assets/Image/valorant.png'
import nama from '../Assets/Image/nama.png'
import osh from '../Assets/Image/osh.png'

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
                                <Card.Img variant="top" src={nama} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={profil2} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={profil} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={valorant} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={osh} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={gambar} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="px-4">
                            <Card>
                                <Card.Img variant="top" src={gambar2} />
                                <Card.Body>
                                    <Card.Text className="text-dark">
                                        <h5>Sertifikat Pelatihan Coding Menggunakan REACT JS</h5>
                                        <p className="op-date">03/10/22</p>
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