import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

//    <nav>
//       { user ?
//       <>
//       <Link to="">Planets</Link>
//       &nbsp; | &nbsp;
//       <Link to="/moons">Moons</Link>
//       &nbsp; | &nbsp;
//       <span>Welcome, {user.name}</span>
//       &nbsp; | &nbsp;
//       <Link to={`/${user.name}`}>Profile</Link>
//       &nbsp; | &nbsp;
//       <Link to="" onClick={handleLogOut}>Log Out</Link>
//    </>
//   : 
//   <>
//   <Link to="">Planets</Link>
//   &nbsp; | &nbsp;
//   <Link to="/moons">Moons</Link>
//   &nbsp; | &nbsp;
//   <Link to="/authpage">Login/Sign Up</Link>

// </>
//   }
//     </nav>