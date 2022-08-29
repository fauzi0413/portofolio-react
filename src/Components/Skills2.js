import React from "react";

import iconhtml from "../Assets/Image/icon/icon-html.svg"
import iconcss from "../Assets/Image/icon/icon-css.svg"
import iconjs from "../Assets/Image/icon/icon-js.svg"
import iconphp from "../Assets/Image/icon/icon-php.svg"
import iconmysql from "../Assets/Image/icon/icon-mysql.svg"
import iconbootstrap from "../Assets/Image/icon/icon-bootstrap.svg"
import iconreact from "../Assets/Image/icon/icon-react.svg"

const Skills2 = () => {
    return(
        <React.Fragment>
            <div className="py-5" id="skill">
                <h3 className="pb-3">Teknologi yang saya minati</h3>
                <div className="px-5">
                    <div className="row justify-content-center">
                        <div className="col-sm-2 col-md-4 col-lg-2 text-center">
                            <img src={iconhtml} title="HTML" className="py-2 py-lg-0 icon-skill" style={{ width:"70px" }}/>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2 text-center">
                            <img src={iconcss} title="CSS" className="py-2 py-lg-0 icon-skill" style={{ width:"70px" }}/>
                        </div>
                        <div className="col-sm-2 col-md-4 col-lg-2 text-center">
                            <img src={iconjs} title="Javascript" className="py-2 py-lg-0 icon-skill" style={{ width:"70px" }}/>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 text-center">
                            <img src={iconphp} title="PHP" className="py-2 py-lg-0 icon-skill" style={{ width:"120px" }}/>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 text-center">
                            <img src={iconmysql} title="MySQL" className=" icon-skill" style={{ width:"100px" }}/>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 text-center">
                            <img src={iconbootstrap} title="Bootstrap" className="py-2 py-lg-0 icon-skill" style={{ width:"100px" }}/>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-2 text-center">
                            <img src={iconreact} title="React JS" className="py-2 py-lg-0 icon-skill" style={{ width:"100px" }}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Skills2