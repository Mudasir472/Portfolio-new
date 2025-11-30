import Achievements from "./Views/Achievements";
import Contact from "./Views/Contact";
import FrontPage from "./Views/FrontPage";
import Resume from "./Views/Resume";
import Services from "./Views/Services";
import Skills from "./Views/Skills";
import Works from "./Views/Works";

function Home() {
    return (<>
        <FrontPage />
        <Services />
        <Works />
        <Resume />
        <Achievements />
        <Skills />
        <Contact />
    </>);
}

export default Home;