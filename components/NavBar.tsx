import React from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    {
        title: 'Profile',
        path: '#'
    }, {
        title: 'Work',
        path: '#work'
    }, {
        title: 'Project',
        path: '#project'
    }, {
        title: 'Contact',
        path: '#contact'
    }
]

const NavBar = () => (
    <aside className="mb-8">
    <div className="lg:sticky lg:top-s15">
        <nav className="flex flex-row justify-between" id="nav">
            <div className="flex flex-row sm:text-4xl">
                {navItems.map((item, i) => <Link
                    className="transition-all py-1 px-2 hover:opacity-50 font-bold"
                    key={i}
                    href={item.path}
                    >{item.title}</Link>
                )}
            </div>
            <div className="flex flex-row sm:text-3xl">
                <Image src="https://github.com/fluidicon.png" alt="alt" height="24" width="24"/>
                <a className="bg-amber-200" target="_blank" href="https://github.com/mamadoumouctar">
                    <Image src="https://github.com/fluidicon.png" alt="alt" height="24" width="24"/>
                </a>
                <a className="transition-all relative py-1 px-2" target="_blank" href="https://linkedin.com/in/tm-mouctar">Linkedin</a>
            </div>
        </nav>
    </div>
    </aside>)

export default NavBar