import React from "react"
import { ArrowSmallRightIcon, ArrowTopRightOnSquareIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import techStackIcons from "../data/iconData"

const ChallengeCard = ( {imageUrl, title, desc, url, sourceUrl, stacks} ) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-md sm:w-72">
            <img src={imageUrl} className="w-full h-40 object-cover"/>
            <div className="p-4 bg-white dark:bg-slate-700">
                <h1 className="font-bold text-lg mb-1">{title}</h1>
                <div className="flex items-center gap-2 my-2">
                    {stacks.map((stack)=>(
                        <span key={stack} title={stack}>
                            {React.cloneElement(techStackIcons[stack], {className: "w-4 h-4"} )}
                        </span>
                    ))}
                </div>
                <p className="text-sm line-clamp-2">{desc}</p>
                <div className="flex justify-stretch gap-2 mt-3">
                    {sourceUrl!="#"&&(
                        <a href={sourceUrl} rel="noreferrer" target="_blank" className="font-bold flex items-center px-4 py-2 rounded-full text-sm ring-1 ring-slate-200 hover:bg-slate-100 dark:hover:bg-white/20 dark:ring-white/30">Source Code<ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1"/></a>
                    )} 
                    <a href={url} className="font-bold flex items-center px-4 py-2 rounded-full text-sm ring-1 ring-blue-400 bg-blue-600 hover:bg-blue-500 text-white">Visit<ArrowSmallRightIcon className="w-4 h-4 ml-1"/></a>
                </div>
            </div>
        </div>
    )
}

const Challenges = ( {title, data, href, children} ) => {
    return (
        <section id={title} className="mb-10 dark:text-white/90">
            <div className="container max-w-6xl mx-auto px-8 sm:px-0">
                <div className="flex items-baseline justify-between gap-4">
                    <div className="mt-4 mb-6">
                    <h1 className="font-bold text-3xl sm:text-4xl mb-2">{title}</h1>
                    {children}
                    </div>
                    <a href={href} className="font-bold flex items-center shrink-0">View All<ChevronRightIcon className="w-4 h-4 ml-1"/></a>
                </div>
                <div className="flex gap-8 flex-wrap flex-col sm:flex-row">
                    {
                        data.map((item)=>{
                            return (
                                <ChallengeCard key={item.title} imageUrl={item.imageUrl} title={item.title} desc={item.desc} url={item.url} sourceUrl={item.sourceUrl} stacks={item.stacks}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Challenges;