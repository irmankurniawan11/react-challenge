import NavBar from "../components/NavBar";
import { ArrowTopRightOnSquareIcon, ArrowRightIcon, ArrowSmallRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Challenges/>
            <Footer/>
        </div>
    )
}

const Header = () => {
    return (
        <header className="container max-w-6xl mx-auto px-8 sm:px-0 mb-8 dark:text-white/90">
            <h1 className="font-bold text-4xl sm:text-5xl my-4">Design to Code Challenge by Irman</h1>
            <p>Hasil slicing UI "Design to Code Challenge" dari <a className="text-amber-500" href="https://codedesign.dev/" target="_blank" rel="noreferrer" alt="codedesign">codedesign</a>.</p>
        </header>
    )
}

const ChallengeCard = ( {imageUrl, title, desc, url, sourceUrl} ) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-md sm:w-72">
            <img src={imageUrl} className="w-full h-40 object-cover"/>
            <div className="p-4 bg-white dark:bg-slate-700">
                <h1 className="font-bold text-lg mb-1">{title}</h1>
                <p className="text-sm line-clamp-2">{desc}</p>
                <div className="flex justify-stretch gap-2 mt-3">
                    <a href={sourceUrl} rel="noreferrer" target="_blank" className="font-bold flex items-center px-4 py-2 rounded-full text-sm ring-1 ring-slate-200 hover:bg-slate-100 dark:hover:bg-white/20 dark:ring-white/30">Source Code<ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1"/></a>
                    <a href={url} className="font-bold flex items-center px-4 py-2 rounded-full text-sm ring-1 ring-blue-400 bg-blue-600 hover:bg-blue-500 text-white">Visit<ArrowSmallRightIcon className="w-4 h-4 ml-1"/></a>
                </div>
            </div>
        </div>
    )
}

const Challenges = () => {
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
    return (
        <section className="mb-10 dark:text-white/90">
            <div className="container max-w-6xl mx-auto px-8 sm:px-0">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl sm:text-4xl mt-4 mb-6">Challenges</h1>
                    <a href="/challenges" className="font-bold flex items-center">View All<ChevronRightIcon className="w-4 h-4 ml-1"/></a>
                </div>
                <div className="flex gap-6 flex-wrap">
                    {
                        challengeData.map((item)=>{
                            return (
                                <ChallengeCard key={item.title} imageUrl={item.imageUrl} title={item.title} desc={item.desc} url={item.url} sourceUrl={item.sourceUrl}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer className="text-center py-10">
            <p className="text-slate-500 dark:text-white/50">Made with <span className="text-red-500">❤</span> by <a className="text-amber-500" target="_blank" rel="noreferrer" href="https://github.com/irmankurniawan11">Irman Kurniawan</a></p>
        </footer>
    )
}

export default Home;