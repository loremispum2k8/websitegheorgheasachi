import { useRef, useEffect, useState, use} from 'react'

import {NavLink} from 'react-router-dom'

function History(){

    
    const img1 = useRef()
    const img2 = useRef()
    const img3 = useRef()
    const img4 = useRef()
    const img5 = useRef()
    const dot1 = useRef()
    const dot2 = useRef()
    const dot3 = useRef()
    const dot4 = useRef()
    const dot5 = useRef()


    return(
        <div className='historyContainer'>
            <h1 className='historyTitle'>Istoria liceului</h1>
            <div className='historyContentGrid'>
                <div className='historyImages'>
                    <div className='historyImagesContainer'>
                        <img ref={img1} id='history1' className='historyImage showHistoryImage' src="https://i.imgur.com/apIkQe4.jpeg" alt="" />
                        <img ref={img2} id='history2' className='historyImage' src="https://i.imgur.com/apIkQe4.jpeg" alt="" />
                        <img ref={img3} id='history3' className='historyImage' src="https://i.imgur.com/apIkQe4.jpeg" alt="" />
                        <img ref={img4} id='history4' className='historyImage' src="https://i.imgur.com/apIkQe4.jpeg" alt="" />
                        <img ref={img5} id='history5' className='historyImage' src="https://i.imgur.com/6wY110S.jpeg" alt="" />
                    </div>
                    <div className='historyDotsContainer'>
                        <div ref={dot1} onClick={(e)=>changeHistory(e)} id='1' className='historyDot activeHistoryDot'></div>
                        <div ref={dot2} onClick={(e)=>changeHistory(e)} id='2' className='historyDot'></div>
                        <div ref={dot3} onClick={(e)=>changeHistory(e)} id='3' className='historyDot'></div>
                        <div ref={dot4} onClick={(e)=>changeHistory(e)} id='2' className='historyDot'></div>
                        <div ref={dot5} onClick={(e)=>changeHistory(e)} id='3' className='historyDot'></div>
                    </div>
                </div>
                <p className='historyTextOne'><span>În anul 1991, în or. Ungheni, a fost dată în exploatare şcoala care poartă numele iluministului Gheorghe Asachi.</span> Au fost înscrişi 991 elevi, coordonaţi de 75 cadre didactice. În anul 1998, şcoala a primit statutul de liceu teoretic. Mai târziu,în anul 2013 Liceul Teoretic “Gheorghe Asachi” devine instituţie publică. Clădirea liceului este amplasată în cartierul Tineretului, mun. Ungheni.</p>
                <p className='historyTextTwo'> Această clădire are o capacitate de 1276 elevi, cu o infrastructură alcătuită din 48 de cabinete,  2 săli de sport, sală specializată de şah. Centru de Resurse pentru educaţie incluzivă, bibliotecă şcolară, cantină şcolară, sală pentru festivităţi. <span>Sălile de clasă sunt dotate cu mobilierul necesar şi o serie de materiale didactice, cum ar fi 5 table interactive, 23 televizoare, 33 de calculatoare dintre care 22 se află în cele 2 cabinete de informatică. În cadrul instituţiei, mai activează o bibliotecă – filiala bibliotecii rationale “Dimitri Cantemir”.</span> <br /><br />În anul şcolar 2019-2020, în liceu sunt înmatriculaţi 870 elevi, distribuiţi în 32 de clase – 12 clase primare, 14 clase gimnaziale şi 6 clase liceale. La fel, din acest an activează şi Centrul de Resurse pentru educaţie incluzivă. <span>Din anul 2013, liceul este centrul de desfăşurare a examenului de BAC.</span></p>
            </div>
        </div>
    )
}

export default History