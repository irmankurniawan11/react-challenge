import { ArrowSmallRightIcon, ArrowTopRightOnSquareIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

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

const Challenges = ( {title, data, href} ) => {
    return (
        <section className="mb-10 dark:text-white/90">
            <div className="container max-w-6xl mx-auto px-8 sm:px-0">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl sm:text-4xl mt-4 mb-6">{title}</h1>
                    <a href={href} className="font-bold flex items-center">View All<ChevronRightIcon className="w-4 h-4 ml-1"/></a>
                </div>
                <div className="flex gap-6 flex-wrap flex-col sm:flex-row">
                    {
                        data.map((item)=>{
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

export default Challenges;