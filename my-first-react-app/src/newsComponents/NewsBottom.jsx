import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'



function NewsBottom(){
    return(
        <div className='newsBottomContainer'>
            <NavLink to='/toateNoutățile'>
            <div className='newsBottomTitleContainer'>
                <h3>Toate noutățile</h3>
                <img className='newsBottomArrow' src="https://i.imgur.com/wumVWNV.png" alt="" />
            </div>
            </NavLink>
            <div className='newsBottomNewsContainer'>
                <div className='newsBottom1 newsBottomCard'>
                    <div className='bottomNewsImg'><img src="https://i.imgur.com/N5he4P7.png" alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>Drumul Pâinii – Educație, Tradiție și Solidaritate</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>Nov 02 2025</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>Se citește în 1 minut</p>
                        </div>
                    </div>
                </div>
                <div className='newsBottom2 newsBottomCard'>
                    <div className='bottomNewsImg'><img src="https://i.imgur.com/3aFTVxt.png" alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>Proiectul educațional interraional: ,,Lectura și abilitățile de viață”</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>Oct 28 2025</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>Se citește în 2 minut</p>
                        </div>
                    </div>
                </div>
                <div className='newsBottom3 newsBottomCard'>
                    <div className='bottomNewsImg'><img src="https://i.imgur.com/aCQ2dYN.png" alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>Olimpiada Republicană de Limba și literatura</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>Oct 17 2025</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>Se citește în 1 minut</p>
                        </div>
                    </div>
                </div>
                <div className='newsBottom4 newsBottomCard'>
                    <div className='bottomNewsImg'><img src="https://i.imgur.com/2diJoDW.png" alt="" /></div>
                    <div className='bottomNewsText'>
                        <h1 className='bottomNewsCardTitle'>Campionatul Național de Dezbateri Democratice</h1>
                        <div className='newsBottomInfo'>
                            <p className='newsDate'>Sept 29 2025</p>
                            <div className='newsBottomline'></div>
                            <p className='readingTime'>Se citește în 3 minut</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBottom