import React, {useState} from 'react';
function MenuDeroulant ({items}){
        let [open, setOpen] = useState(false)
        return (
            <div className={open ? 'menu-deroulant active' : 'menu-deroulant'}>
                <span className='menu-deroulant-title' onClick={() => setOpen(!open)}>{items.name} <span className="material-symbols-outlined">expand_more</span></span>
                <div className="menu-deroulant-items-Container" id={items.name}>
                {
                    items.content.map((contentItem) => {
                        if(contentItem.logo !== null) {
                            return(
                                <span key={contentItem.id} className='item'><img src={'img/' + contentItem.logo} alt={contentItem.logo} /><span>{contentItem.Itemname}</span></span>
                            )
                        }
                        else {
                            return(
                                <span key={contentItem.id} className='item'><span>{contentItem.Itemname}</span></span>
                            )
                        }
                    } 
                    )
                }
                </div>
            </div>
        );
}

export default MenuDeroulant;