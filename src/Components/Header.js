import React from 'react'
import {Button,Navbar,Container,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <div>
            {/* <h1> You are inside Header page</h1> */}
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto nav_bar_wrapper">
      <Link to='/add'> Add Product</Link>
      <Link to='/login'> Login</Link>
      <Link to='/register'> Register</Link>
      <Link to='/update'> Update Product</Link>
      <Link to="/products"> Show Products </Link>
      <Link to="/pra"> Practise.com</Link>
      <Link to="/MP"> Menu Project</Link>
      <Link to="/TODO"> To-Do List</Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
export default Header