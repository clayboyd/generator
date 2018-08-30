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

            <DropdownButton title="Users" id="User_id">
                <PaddedLink eventKey={1} to="/users">List Users</PaddedLink>
                <PaddedLink eventKey={2} to="/user">Create User</PaddedLink>
            </DropdownButton>
            <DropdownButton title="Addresses" id="Address_id">
                <PaddedLink eventKey={1} to="/addresses">List Addresses</PaddedLink>
                <PaddedLink eventKey={2} to="/address">Create Address</PaddedLink>
            </DropdownButton>
            <DropdownButton title="Examples" id="Example_id">
                <PaddedLink eventKey={1} to="/examples">List Examples</PaddedLink>
                <PaddedLink eventKey={2} to="/example">Create Example</PaddedLink>
            </DropdownButton>
        </ButtonGroup>
        </div>
    )
}

export default Nav
