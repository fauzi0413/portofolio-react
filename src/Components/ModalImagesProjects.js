import React from "react";
import { Carousel, Modal} from "react-bootstrap";

import osh1 from '../Assets/Image/OSH/img (1).png'
import osh2 from '../Assets/Image/OSH/img (2).png'
import osh3 from '../Assets/Image/OSH/img (3).png'
import osh4 from '../Assets/Image/OSH/img (4).png'
import osh5 from '../Assets/Image/OSH/img (5).png'


const ModalImagesProjects = (props) => {
    
    const [modalShow, setModalShow] = React.useState(false);
    
    return(
        <React.Fragment>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
                >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Carousel variant="dark" className="modal-img">
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
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default ModalImagesProjects