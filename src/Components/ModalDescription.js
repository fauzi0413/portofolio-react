import React, {useState} from "react";
import { Modal, Button, Badge } from "react-bootstrap";

import { faCircle, faBarsProgress, faCode, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalDescription = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return(
        <React.Fragment>
            <Button variant="info" onClick={handleShow} className="fw-bold text-white">
                <FontAwesomeIcon icon={faFileLines} className="me-1" />
                Deskripsi Projek
            </Button>

            <Modal 
                show={show} 
                onHide={handleClose} 
                backdrop="static" 
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 fw-bold">Olimpiade Satu Hati</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default ModalDescription