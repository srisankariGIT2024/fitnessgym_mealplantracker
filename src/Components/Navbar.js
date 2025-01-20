/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import Logo from '../Components/Images/logo.jpg';
const programs = [
    {
        name: 'Fitness Tracker',
        description: 'Track your daily workouts and progress',
        href: '#',
        icon: ArrowPathIcon// Changed to a new icon for fitness tracking
    },
    {
        name: 'Workout Sessions',
        description: 'Join live sessions or view recorded ones',
        href: '#',
        icon: PlayCircleIcon,
        // Changed to an icon that might be suitable for video content
    },
    {
        name: 'Nutrition Guide',
        description: 'Access personalized meal plans and recipes',
        href: '#',
        icon: CursorArrowRaysIcon // Changed to an icon suitable for documents or lists
    },
    {
        name: 'Goal Setting',
        description: 'Set and track fitness goals with your dashboard',
        href: '#',
        icon: FingerPrintIcon // Changed to a bar chart icon for goal tracking
    },
    {
        name: 'Progress Reports',
        description: 'Get detailed reports of your fitness progress over time',
        href: '#',
        icon: ChartPieIcon // Changed to a report document icon
    },
]

const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayCircleIcon },
    { name: 'Call Me', href: '#', icon: PhoneIcon },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                {/* Logo Section */}
                <div className="flex lg:flex-1 justify-center items-center">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">PowerFit Gym</span>
                        <img
                            alt="PowerFit Gym"
                            src={Logo}
                            className="h-16 w-auto max-w-full" // Adjusted for responsive size
                        />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Menu */}

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-red-600">
                            Programs
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition"
                        >
                            <div className="p-4">
                                {programs.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                                    >
                                        <div className="flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link to={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="/plans" className="text-lg font-semibold text-red-600">
                        Plans
                    </Link>
                    <Link to="/blogs" className="text-lg font-semibold text-red-600">
                        Blogs
                    </Link>
                    <Link to="/contact" className="text-lg font-semibold text-red-600">
                        Contact
                    </Link>
                </PopoverGroup>

                {/* Log In Link */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/mentorlogin" className="text-sm font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu Dialog */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">PowerFit Gym</span>
                            <img
                                alt="PowerFit Gym"
                                src={Logo}
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400 group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...programs, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="Link"
                                                to={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    to="/plans"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Plans
                                </Link>
                                <Link
                                    to="/contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Contacts
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/mentorlogin"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

        </header>
    )
}
