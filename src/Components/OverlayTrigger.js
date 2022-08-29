import React from "react";
import { Tooltip } from "react-bootstrap";

const OverlayTrigger = (props) => {
    return(
        <React.Fragment>
            <Tooltip id="button-tooltip" {...props}>
                
            </Tooltip>
        </React.Fragment>
    )
}

export default OverlayTrigger