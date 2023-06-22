import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Challenges from "../components/Challenges";
import challengeData from "../data/challengeData";
import projectData from "../data/projectData";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Challenges title="Projects" href="/projects" data={projectData}>
                <p>A collection of website projects developed using React, Next, Tailwind, and other frameworks.</p>
            </Challenges>
            <Challenges title="Challenges" href="/challenges" data={challengeData}>
                <p>Slicing UI result (Design to Code Challenge) from <a className="text-amber-500" href="https://codedesign.dev/" target="_blank" rel="noreferrer" alt="codedesign">codedesign</a>.</p>
            </Challenges>
            <Footer/>
        </div>
    )
}

export default Home;