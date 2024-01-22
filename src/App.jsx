// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import ImageAI from "./assets/ArtAI-4.jpg";

function App() {

  const background = {
    backgroundImage: `url(${ImageAI})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment:"fixed"
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="pb-5" style={background}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
