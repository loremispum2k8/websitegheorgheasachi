import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'

function Clubs(){

    return(
        <div className='clubsContainer'>
            <h1 className='clubsTitle'>Cluburi și activități</h1>
            <div className='clubsMovementContainer'>
                <div className='clubsCardsContainer'>
                    <div className='clubCard'>
                        <div className='clubImage'><img src="https://i.imgur.com/Lh6sXgf.jpeg" alt="" /></div>
                        <div className='clubTextContainer'>
                            <h2 className='clubCardTitle'>Consiliul Elevilor</h2>
                            <div className='clubLine'></div>
                            <p className='clubDescription'>Coordonează proiecte școlare, organizează evenimente și inițiative, dezvoltând leadership, responsabilitate și implicare activă a elevilor în comunitate.</p>
                        </div>
                    </div>
                    <div className='clubCard'>
                        <div className='clubImage'><img src="https://i.imgur.com/h1Xxr56.jpeg" alt="" /></div>
                        <div className='clubTextContainer redCross'>
                            <h2 className='clubCardTitle'>Crucea Roșie</h2>
                            <div className='clubLine'></div>
                            <p className='clubDescription'>Elevii contribuie la acțiuni umanitare, ajutând persoane aflate în dificultate și promovând solidaritatea și empatia în comunitate.</p>
                        </div>
                    </div>
                    <div className='clubCard'>
                        <div className='clubImage'><img src="https://i.imgur.com/exHQKAs.jpeg" alt="" /></div>
                        <div className='clubTextContainer'>
                            <h2 className='clubCardTitle'>Radio Vox</h2>
                            <div className='clubLine'></div>
                            <p className='clubDescription'>Radio Vox oferă elevilor un spațiu creativ pentru podcasturi online, promovând idei, discuții și povești realizate de colegi.</p>
                        </div>
                    </div>
                    <div className='clubCard'>
                        <div className='clubImage'><img src="https://i.imgur.com/Ky5ssvj.jpg" alt="" /></div>
                        <div className='clubTextContainer'>
                            <h2 className='clubCardTitle'>Volei</h2>
                            <div className='clubLine'></div>
                            <p className='clubDescription'>Practică volei pentru performanță și recreere, dezvoltând spirit de echipă, coordonare și rezistență fizică alături de antrenorii: <b>Dorin Patrașcu</b> și <b>Victor Nazari</b></p>
                        </div>
                    </div>
                    <div className='clubCard'>
                        <div className='clubImage'><img src="https://i.imgur.com/twiHxgS.jpeg" alt="" /></div>
                        <div className='clubTextContainer'>
                            <h2 className='clubCardTitle'>Baschet</h2>
                            <div className='clubLine'></div>
                            <p className='clubDescription'>Implică elevii în antrenamente și meciuri de baschet, cultivând cooperarea, strategia, agilitatea și disciplina sportivă. alaturi de antrenorul: <b>Dumitru Cantemir</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clubs