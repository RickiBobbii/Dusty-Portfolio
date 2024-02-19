// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Image from "./assets/unsplashColor.jpg";

function App() {

  const background = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment:"fixed"
  }
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      {/* <Nav /> */}
      <main className="pb-5" style={background}>
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
