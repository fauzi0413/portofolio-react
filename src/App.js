import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import {Container} from 'react-bootstrap'
import Skill from './Components/Skills';
import Skill2 from './Components/Skills2';
import Projects from './Components/Projects';
import Certification from './Components/Certification'

const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Container className='main-padding'>
        <AboutMe/>
        {/* <Skill/> */}
        <Skill2/>
        <Certification/>
        <Projects/>
      </Container>
    </>
  );
}

export default App;
