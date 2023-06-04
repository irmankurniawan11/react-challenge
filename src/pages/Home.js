import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Challenges from "../components/Challenges";

const Home = () => {
    const challengeData = [
        {
            title: "Twitter Embed",
            desc: "Twitter Embed is a simple card that displays a single tweet from Twitter. It includes the user's avatar, name, username, the tweet itself, the total number of likes, and the date it was published... - codedesign",
            imageUrl: "/image/preview-twitter-embed.png",
            sourceUrl: "https://github.com/irmankurniawan11/react-challenge/blob/main/src/pages/TwitterEmbed.js",
            url: "/challenge/twitter-embed"
        },
        {
            title: "Holadok",
            desc: "The Holadok Hero component is a visually striking and highly functional element of a doctor appointment website. It features a clean and modern design, with a left side that includes a headline, subheadline, and a single call-to-action button inviting users to make an appointment... - codedesign",
            imageUrl: "/image/preview-holadok.png",
            sourceUrl: "https://github.com/irmankurniawan11/react-challenge/blob/main/src/pages/Holadok.js",
            url: "/challenge/holadok"
        }
    ]
    const projectData = [
        {
            title: "Extra Time - Landing Page",
            desc: "Extra Time is landing page website",
            imageUrl: "/image/preview-extratime.png",
            sourceUrl: "#",
            url: "https://react-football-six.vercel.app/"
        }
    ]

    return (
        <div>
            <NavBar/>
            <Header/>
            <Challenges title="Challenges" href="/challenges" data={challengeData}/>
            <Challenges title="Projects" href="/projects" data={projectData}/>
            <Footer/>
        </div>
    )
}

export default Home;