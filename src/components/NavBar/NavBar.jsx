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
    
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
        <Nav className="me-auto">
          <Nav.Link href="/">Planets</Nav.Link>
          <Nav.Link href="/moons">Moons</Nav.Link>
        </Nav>
        <Nav>
        { user ?
        <>        
          <Nav.Link href={`/${user._id}`}>{user.name}</Nav.Link>
          <Nav.Link eventKey={2} href="" onClick={handleLogOut}>
            Log Out
          </Nav.Link>
</>          
          :
          <Nav.Link href="/authpage">Login/Signup</Nav.Link>
}
        </Nav>
      
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