import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import {Container} from 'react-bootstrap'
import Skill from './Components/Skills';

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Container className='main-padding'>
        <AboutMe/>
        <Skill/>
      </Container>
    </>
  );
}

export default App;
