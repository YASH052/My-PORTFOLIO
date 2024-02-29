import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Educations/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TechStack />
        <Projects />
        <Education />
      </div>

    </>
  );
}

export default App;
