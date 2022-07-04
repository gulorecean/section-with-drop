import React from 'react';
import MenuDeroulant from './MenuDeroulant';

const PhoneNavBar = ({ items, ActivePortableTaskBar, setActivePortableTaskBar }) => {
    return (
        <>
            <span className='logo'><span>snap</span> <button className='close-nav-bar_btn' onClick={() => setActivePortableTaskBar(false)}><span className="material-symbols-outlined">close</span></button></span>
            {
                items.map((item) => {
                    return (
                        <MenuDeroulant items={item} />
                    )
                })
            }
            <a href="#">careers</a>
            <a href="#">About</a>
            <div className='login_div'>
                <a href="#">login</a>
                <button type='button'>register</button>
            </div>
        </>
    );
};

export default PhoneNavBar;