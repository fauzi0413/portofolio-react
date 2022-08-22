import React from "react"
import { Badge, Card } from "react-bootstrap"
import Certification from "./Certification"

const Skill = () =>{
    return(
        <React.Fragment>
            <div className="py-5">
                <h3 className="pb-3">Keahlian yang saya miliki</h3>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4">
                        <Card bg='success' text='light' className="border-0 shadow" style={{ minHeight:'97px' }}>
                            <Card.Header className="text-center fw-bold">Beginner</Card.Header>
                            <Card.Body className="bg-light rounded-card">
                                <Badge bg='warning' className="bagde">Javascript</Badge>
                                <Badge bg='' className="bagde" style={{ backgroundColor:'aqua' }}>React JS</Badge>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-4 py-4 py-md-0">
                        <Card bg='warning' text='light' className="border-0 shadow" style={{ minHeight:'97px' }}>
                            <Card.Header className="text-center fw-bold">Intermediate</Card.Header>
                            <Card.Body className="bg-light rounded-card">
                                <Badge bg='' className="bagde" style={{ backgroundColor:'blueviolet' }}>Bootstrap</Badge>
                                <Badge bg='primary' className="bagde">CSS</Badge>
                                <Badge bg="" className="bagde" style={{ backgroundColor:'#FF5733' }}>HTML</Badge>
                                <Badge bg="" className="bagde" style={{ backgroundColor:'gray' }}>MySQL</Badge>
                                <Badge bg='' className="bagde" style={{ backgroundColor:'#6868b3' }}>PHP</Badge>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Card bg='danger' text='light' className="border-0 shadow" style={{ minHeight:'97px' }}>
                            <Card.Header className="text-center fw-bold">Expert</Card.Header>
                            <Card.Body className="bg-light rounded-card">
                                {/* <Badge bg='primary'>CSS</Badge> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <Certification/>
        </React.Fragment>
    )
}

export default Skill