import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Education from './pages/Educations/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/TechStack/TechStack';
import Contact from './pages/contact/contact';
import ScrollToTop from 'react-scroll-to-top'
import { useTheme } from './context/ThemeContext';

function App() {
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <Layout />
        <div className="container">
          <About />
          <TechStack />
          <Projects />
          <Education />
          <Contact />
        </div>
        <div className=".footer pb-3 ms-3">
          <h4 className='text-center'>Designed and Developed by 🙋‍♂️UmYash &copy; 2024</h4>
        </div>
      </div>
      <ScrollToTop smooth
        color='#f29f67'
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }} />

    </>
  );
}

export default App;
