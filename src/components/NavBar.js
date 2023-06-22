import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react"

const NavBar = () => {
    const navigation = [
        { name: 'Projects', href: '#Projects' },
        { name: 'Challenges', href: '#Challenges' },
    ]

    const [isDark, setDark] = useState(false);

    useEffect(()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDark(true);
        }
    }, [])

    useEffect(()=>{
        setTheme();
    }, [isDark])

    const html = document.querySelector('html');
    const body = document.querySelector('body');
    body.classList.add("dark:bg-slate-800")

    const toggleDark = () => {
        setDark(!isDark);    
    }

    const setTheme = () => {
        if(isDark) {
            html.classList.add('dark')
            localStorage.theme = 'dark';
            // console.log("theme set to Dark")
        }
        else {
            html.classList.remove('dark')
            localStorage.theme = 'light';
            // console.log("theme set to Light")
        }
    }

    return (
        <Disclosure as="nav" className=" bg-white text-slate-800 dark:bg-slate-800 dark:text-white/80 sm:bg-transparent sticky top-0 z-[9999] sm:static">
            {({ open }) => (
                <div className="container max-w-6xl mx-auto px-4 sm:px-0">
            <div className="flex justify-center items-center relative h-16 sm:h-32">
                <div className="absolute left-0 inset-y-0 flex items-center sm:hidden">
                    <Disclosure.Button className="rounded-lg bg-slate-50 dark:bg-white/10 text-primary dark:text-white inline-flex p-2">
                        <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                    </Disclosure.Button>
                </div>
                
                <div className="flex flex-1 items-center gap-6 justify-center sm:justify-normal">
                    <a className="flex flex-shrink-0 items-center gap-1" href="#">
                        <h1 className="text-2xl font-bold">irman<span className="text-amber-500">.dev</span></h1>
                    </a>
                    <div className="hidden sm:flex flex-wrap gap-2">
                        {navigation.map((menu) => {
                            return (
                                <a key={menu.name} href={menu.href} className="px-4 py-2 font-bold rounded-full hover:bg-secondary">
                                    {menu.name}
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 sm:static sm:pl-4 flex items-center mr-4 sm:mr-0">
                    <div className='pl-4 flex'>
                        <input type='checkbox' className='hidden' id="dark-toggle" />
                        <label htmlFor="dark-toggle" className=''>
                            <button onClick={()=>{toggleDark();}} className='w-8 h-8 rounded-full cursor-pointer bg-slate-100 dark:bg-slate-700 flex items-center justify-center'>
                                {isDark ? (
                                    <SunIcon className="block h-5 w-5" aria-hidden="true" />
                                ):(
                                    <MoonIcon className="block h-5 w-5" aria-hidden="true" />
                                )}
                                
                            </button>
                        </label>
                    </div>
                </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
                <div className="flex flex-col py-4 bg-black/5">
                    {navigation.map((menu) => {
                        return (
                            <Disclosure.Button as="a" key={menu.name} href={menu.href} className="px-4 py-2 font-bold hover:bg-secondary">
                                {menu.name}
                            </Disclosure.Button>
                        )
                    })}
                </div>
            </Disclosure.Panel>
            </div>
            )}
        </Disclosure>
    )
}

export default NavBar