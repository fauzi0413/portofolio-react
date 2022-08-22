import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import {Container} from 'react-bootstrap'
import Skill from './Components/Skills';
import Projects from './Components/Projects';

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Container className='main-padding'>
        <AboutMe/>
        <Skill/>
        <Projects/>
      </Container>
    </>
  );
}

export default App;
