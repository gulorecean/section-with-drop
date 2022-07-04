import React, { Component } from 'react';

const associe = [
    {
        name: 'databiz',
        logo: 'client-databiz.svg'
    },
    {
        name: 'audiophile',
        logo: 'client-audiophile.svg'
    },
    {
        name: 'meet',
        logo: 'client-meet.svg'
    },
    {
        name: 'maker',
        logo: 'client-maker.svg'
    },
]

class CenterPart extends Component {
    render() {
        return (
            <main>
                <div className='center-part'>
                    <img src="img/image-hero-mobile.png" alt="hero" className='hero-portable'/>
                    <div className='contenu'>
                        <h1>Make <br />
                            remote work
                        </h1>
                        <p>
                            Get your team in sync, no matter your location. Streamline processes,
                            create team rituals, and watch productivity soar.
                        </p>
                        <button type='button'>Learn more</button>
                        <div>
                            {
                                associe.map((e) => {
                                    return (
                                        <img src={'img/' + e.logo} alt={e.name} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <img src='img/image-hero-desktop.png' alt="hero" className='hero-desktop'/>
                </div>
            </main>

        );
    }
}

export default CenterPart;