import React from "react";
import { Modal, Button } from "react-bootstrap";

import sertifikat1 from '../Assets/Image/sertifikat-2020-11-html&css.png'
import sertifikat2 from '../Assets/Image/sertifikat-2020-10-js.png'
import sertifikat3 from '../Assets/Image/sertifikat-2020-5-webDasar.png'
import sertifikat4 from '../Assets/Image/sertifikat-2022-6-webDasar.png'
import sertifikat5 from '../Assets/Image/sertifikat-2022-1-PanitiaOSH.png'

const ModalImages = (props) => {
    
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
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <img src={sertifikat3} className="w-100 p-modal" />
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default ModalImages