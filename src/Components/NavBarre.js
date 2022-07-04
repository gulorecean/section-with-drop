import React, { Component, useState } from 'react';
import MenuDeroulant from './MenuDeroulant';
import PhoneNavBar from './PhoneNavBar';

const itemsMenuderoulant = [
    {
        name: 'features',
        content: [
            {
                Itemname: 'todo List',
                logo: 'icon-todo.svg',
                id: 0,
            },
            {
                Itemname: 'calendar',
                logo: 'icon-calendar.svg',
                id: 1,
            },
            {
                Itemname: 'reminders',
                logo: 'icon-reminders.svg',
                id: 2,
            },
            {
                Itemname: 'planning',
                logo: 'icon-planning.svg',
                id: 3,
            }
        ]
    },
    {
        name: 'company',
        content: [
            {
                Itemname: 'history',
                logo: null,
                id: 1,
            },
            {
                Itemname: 'our team',
                logo: null,
                id: 2,
            },
            {
                Itemname: 'blog',
                logo: null,
                id: 3,
            },
        ]
    },
]

let NavBarre = () => {
    const [ActivePortableTaskBar, setActivePortableTaskBar] = useState(false)
    const [ActivePortableNavBar, setActivePortableNavBar] = useState(window.innerHeight < window.innerWidth ? false : true)

    const resizeTest = () => {
        if (window.innerHeight < window.innerWidth) {
            setActivePortableNavBar(false)
        }
        else {
            setActivePortableNavBar(true)
        }
    }

    window.addEventListener("resize", resizeTest)

    if (ActivePortableNavBar === false) {
        return (
            <nav>
                <div>
                    <span className="logo">snap</span>
                    <MenuDeroulant items={itemsMenuderoulant[0]} />
                    <MenuDeroulant items={itemsMenuderoulant[1]} />
                    <a href="#">careers</a>
                    <a href="#">About</a>
                </div>
                <div>
                    <a href="#">login</a>
                    <button type='button'>register</button>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav>
                <div>
                    <span className='logo'>snap</span>
                </div>
                <div>
                    <button className='open-phone-nav-bar_btn' onClick={() => {
                        setActivePortableTaskBar(true)
                    }}><span class="material-symbols-outlined">menu</span></button>
                </div>
                <section className={ActivePortableTaskBar ? 'active' : ''}>
                    <PhoneNavBar items={itemsMenuderoulant} ActivePortableTaskBar={ActivePortableTaskBar} setActivePortableTaskBar={setActivePortableTaskBar}/>
                </section>
                <span className={ActivePortableTaskBar ? 'overflow active' : 'overflow'} onClick={() => {
                    if (ActivePortableTaskBar === true) {
                        setActivePortableTaskBar(false)
                    }
                }}></span>
            </nav>
        )
    }

}

export default NavBarre;