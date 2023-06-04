import { useLocation } from "react-router-dom"

const FloatingMenu = () => {

    const location = useLocation();

    const pathname = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
    const words = pathname.split('-');
    const formattedText = words.map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="rounded-none sm:rounded-xl fixed bottom-0 sm:bottom-4 z-[9999] lg:w-[50%] w-full left-[50%] -translate-x-1/2 bg-slate-800/80 px-8 py-5 text-white shadow-xl backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">{formattedText}</h1>
                    <p className="text-sm">Challenge by Irman</p>
                </div>
                <a href="/" className="font-bold px-6 py-4 rounded-full bg-red-700 hover:bg-red-600">Back to Menu</a>
            </div>
        </div>
    )
}

export default FloatingMenu