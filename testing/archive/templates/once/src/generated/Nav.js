import React from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

function ButtonLink(props) {
    return (
        <Button>
            <Link to={props.to}>{props.children}</Link>
        </Button>
    )
}
function PaddedLink(props) {
    return (
        <LinkContainer to={props.to}>
            <MenuItem {...props}>{props.children}</MenuItem>
        </LinkContainer>
    )
}
// function PaddedLink(props) {
//     let style = {
//         padding: 15,
//         paddingTop: 10,
//         paddingBottom: 10
//     }
//     return (
//         <div style={style}>
//             <Link to={props.to}>{props.children}</Link>
//         </div>
//     )
// }
function Nav(props) {

    return (
        <div>
        <ButtonGroup>
            <ButtonLink to="/">Home</ButtonLink>

            {{#each model.classes}}
            <DropdownButton title="{{pluralize name}}" id="{{name}}_id">
                <PaddedLink eventKey={1} to="/{{lowerPlural name}}">List {{pluralize name}}</PaddedLink>
                <PaddedLink eventKey={2} to="/{{lowerSingular name}}">Create {{name}}</PaddedLink>
            </DropdownButton>
            {{/each}}
        </ButtonGroup>
        </div>
    )
}

export default Nav
