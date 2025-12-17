import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

function EducationLevels({id,elementRef,elementStyles}){
    return(
        <div ref={elementRef} id={id} className={`educationContainer ${elementStyles}`}>
            <h1 className='educationTitle'>Niveluri de învățământ</h1>
            <div className='educationCardsContainer'>
                <div className='educationCard educationCard1'>
                    <div className='educationImage'><img src="/primarySchool.webp" alt="" /></div>
                    <h2 className='educationName'>Primar</h2>
                    <div className='educationLine'></div>
                    <p className='educationDescription'>Oferă mediu prietenos, dezvoltă competențe de bază și emoționale, prin activități interactive și profesori dedicați sprijinind copiii în primii patru ani.</p>
                </div>
                <div className='educationCard educationCard2'>
                    <div className='educationImage'><img src="/middleSchool.webp" alt="" /></div>
                    <h2 className='educationName'>Gimnazial</h2>
                    <div className='educationLine'></div>
                    <p className='educationDescription'>Asigură cinci ani de pregătire echilibrată, discipline variate, proiecte și evaluări moderne, sprijinind elevii să-și consolideze cunoștințele și să se pregătească pentru liceu.</p>
                </div>
                <div className='educationCard educationCard3'>
                    <div className='educationImage'><img src="https://i.imgur.com/FrfuZvz.jpeg" alt="" /></div>
                    <h2 className='educationName'>Liceal</h2>
                    <div className='educationLine'></div>
                    <p className='educationDescription'>Oferă specializări moderne, pregătire pentru BAC, orientare profesională și activități extracurriculare, formând tineri responsabili, motivați și pregătiți pentru viitor.</p>
                </div>
            </div>
        </div>
    )
}

export default EducationLevels