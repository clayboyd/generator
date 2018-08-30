import React from 'react'
import { FormGroup, ControlLabel, HelpBlock, Col } from 'react-bootstrap'

import getElement from './HorizontalElements'

function HorizontalGroup( props ) {
    return (
        <FormGroup controlId={props.id}>
        <Col componentClass={ControlLabel} sm={2}>
        {props.label}
        </Col>
        <Col sm={9}>
        {getElement(props.type, props)}
        </Col>            
        {props.help && <HelpBlock>{props.help}</HelpBlock>}
        </FormGroup>
    );
}

export default HorizontalGroup
