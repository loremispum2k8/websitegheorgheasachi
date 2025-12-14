import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

function EducationLevels({id,elementRef,elementStyles}){
    return(
        <div ref={elementRef} id={id} className={`educationContainer ${elementStyles}`}>
            <h1 className='educationTitle'>Niveluri de învățământ</h1>
            <div className='educationCardsContainer'>
                <div className='educationCard educationCard1'>
                    <div className='educationImage'><img src="https://d2h58dsjpbzmve.cloudfront.net/5391w%2Fpreview%2F73718103%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765745039&Signature=hqmhaT1jsDb9qSwdE3km9Ume3jM8MwNhQ3tBdWvzSsF~lJfqw~lTlDnnptxFELxoG1mILWc-kdsdL6fFdw0mKkh6CBdAF2FkuxbrIsmVb6roXMRSt33ZYS22pMX~5Ox4V1LKS43MzmwI~05aciQtiKv5l3uWEtiRswcAOB19qKmp5qDgYq~dmFliYkufGOUr9~1fAuWwq25bg3jYHY70PGUVEeHbTzbzv8iwz7wkgoXn8xPorKZtvzonakuaj8JL83iY~cd8zIkM74fFv~33Skk44B9aJh9MLp~xtawoP9budnnCvNRH8GtCussHM6rT~hqKyx~tLXnmZcviadvSmw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" /></div>
                    <h2 className='educationName'>Primar</h2>
                    <div className='educationLine'></div>
                    <p className='educationDescription'>Oferă mediu prietenos, dezvoltă competențe de bază și emoționale, prin activități interactive și profesori dedicați sprijinind copiii în primii patru ani.</p>
                </div>
                <div className='educationCard educationCard2'>
                    <div className='educationImage'><img src="https://d2fy7spvltzu3v.cloudfront.net/9491w%2Fpreview%2F73718104%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765745043&Signature=LVDr2lm6GeelxQuA4nh34Mhif23wU0i-Zgm8CyqOss6SXJNiamvenX2yUkhgw8iO5QboVFXwWpPGGzQFdPbS0aINtETpl6-CGRkzvBvuXNGLL5DprU2MVwiGIltGfHFUiDDQ0-nxInKaxLs6b4SANpg8HEgTLNzSfAH2fxhfSTn7wSXnhlhdMV191YXsrSi3VsS5s77ycePEr8PU~YY0HkUGdwDDutty1yAmGBISEflnBT1qnacz6ivqOdnTTPQOcYveoXRthGg5az5pwYaBM8Rm1-uh9lyhCeAaUrJdxH6-YSr0x5s~i5KMGUWl-csxm1eICSxTCV4O58JLFFfxyQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" /></div>
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