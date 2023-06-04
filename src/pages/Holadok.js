import { Disclosure } from "@headlessui/react"
import FloatingMenu from "../components/FloatingMenu"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Helmet } from "react-helmet"

const Holadok = () => {
    return (
        <>
        <Helmet>
            <title>Holadok - Challenge by Irman</title>
        </Helmet>
        <div className="font-dmsans text-[#101C45] mb-32">
            <HoladokNav />
            <HoladokHeader />
            <HoladokFeatures />
        </div>
        </>
    )
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HoladokNav = () => {
    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'About Us', href: '#' },
    ]

    return (
        <Disclosure as="nav" className="container max-w-6xl mx-auto px-4 py-8 bg-white sm:bg-transparent sticky top-0 z-[9999] sm:static">
            {({ open }) => (
                <>
            <div className="flex justify-center items-center relative">
                <div className="absolute left-0 inset-y-0 flex items-center sm:hidden">
                    <Disclosure.Button className="bg-slate-50 text-primary inline-flex p-2">
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
                        <img className="h-8 w-auto" src="/holadok/image/holadok-logo.svg" alt="Holadok Logo" />
                        <h1 className="text-2xl font-bold ml-2">Holadok</h1>
                    </a>
                    <div className="hidden sm:flex flex-wrap">
                        {navigation.map((menu) => {
                            return (
                                <a key={menu.name} href={menu.href} className="px-4 py-2 font-bold hover:bg-secondary">
                                    {menu.name}
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div className="hidden sm:flex gap-2">
                    <a href="#" className="px-4 py-2 font-bold hover:underline underline-offset-2">Login</a>
                    <a href="#" className="px-4 py-2 font-bold border-2 border-primary hover:bg-primary hover:text-white">Book Now</a>
                </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
                <div className="flex flex-col py-4">
                    {navigation.map((menu) => {
                        return (
                            <Disclosure.Button as="a" key={menu.name} href={menu.href} className="px-4 py-2 font-bold hover:bg-secondary">
                                {menu.name}
                            </Disclosure.Button>
                        )
                    })}
                </div>
                <div className="grid grid-cols-2 grid-flow-col gap-2">
                    <a href="#" className="px-4 py-2 font-bold border-2 border-primary hover:bg-primary hover:text-white">Login</a>
                    <a href="#" className="px-4 py-2 font-bold border-2 border-primary bg-primary hover:bg-primary/90 text-white">Book Now</a>
                </div>
            </Disclosure.Panel>
            </>
            )}
        </Disclosure>
    )
}

const HoladokQuote  = ( {className} ) => {
    return (
        <div className={classNames(className, "bg-white rounded-lg p-5 flex flex-col gap-3 justify-center shadow-lg")}>
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img src="/holadok/image/profile.png" className="w-6 h-6 rounded-full bg-primary"/>
                    <h1 className="font-bold text-md">Jane Doe</h1>
                </div>
                <div>
                    <img src="/holadok/icon/quote.png" className="w-5 h-5"/>
                </div>
            </div>
            <div>
                <p className="text-xs leading-relaxed">“The doctor appointment app has been great for me. Scheduling appointments and getting medication reminders is much easier, and I love the option for virtual consultations. I'd recommend this app to others.”</p>
            </div>
        </div>
    )
}

const HoladokHeader = () => {
    return (
        <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-8 items-center justify-between">
                <div className="basis-2/5 px-12 py-4 sm:p-0">
                    <h1 className="font-bold text-5xl mb-8">Get the healthcare you need, when you need it.</h1>
                    <p className="mb-4">Manage all of your healthcare needs in one convenient place – from booking appointments to tracking your health history.</p>
                    <a href="#" className="inline-block bg-primary text-white py-4 px-6 hover:bg-primary/70">Book an Appointment</a>
                </div>
                <div className="sm:basis-3/5 relative w-full sm:h-[700px] sm:-mt-10 overflow-hidden sm:overflow-visible px-12 sm:px-0">
                    <div className="bg-secondary hidden sm:block absolute -top-20 right-10 w-[450px] h-[800px] -z-10 -skew-x-6"/>
                    <HoladokQuote className="sm:absolute top-0 sm:top-32 z-10 sm:w-72"/>
                    <img src="/holadok/image/doctor.png" className="max-h-[500px] sm:h-[700px] sm:max-h-none sm:absolute right-0 -z-9 mx-auto"/>
                </div>

            </div>
        </div>
    )
}

const HoladokFeatures = () => {
    const features = [
        {
            icon: "calendar",
            title: "Online appointment scheduling",
            description: "Allows users to schedule appointments with their healthcare provider through the app."
        },
        {
            icon: "reminder",
            title: "Medication reminders",
            description: "Allows users to schedule appointments with their healthcare provider through the app."
        },
        {
            icon: "consultation",
            title: "Virtual consultations",
            description: "Allows users to schedule appointments with their healthcare provider through the app."
        }
    ]

    return (
        <div className="text-white mb-10 px-8 sm:px-0">
            <div className="bg-primary container max-w-6xl mx-auto flex flex-col sm:flex-row gap-16 py-16 sm:py-8 sm:gap-8 px-8">
                {features.map((feature) => {
                    return (
                        <div key={feature.title} className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                            <img src={"/holadok/icon/" + feature.icon + ".svg"} alt={feature.title} className="w-16 h-16 sm:w-10 sm:h-10"/>
                            <div className="flex flex-col gap-2 text-center sm:text-left">
                                <h2 className="font-bold">{feature.title}</h2>
                                <p className="text-white/80">{feature.description}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Holadok;