import { useRef, useEffect, useState} from 'react'

import {NavLink} from 'react-router-dom'

function EducationLevels({id,elementRef,elementStyles}){
    return(
        <div ref={elementRef} id={id} className={`educationContainer ${elementStyles}`}>
            <h1 className='educationTitle'>Niveluri de învățământ</h1>
            <div className='educationCardsContainer'>
                <div className='educationCard educationCard1'>
                    <div className='educationImage'><img src="https://d2h58dsjpbzmve.cloudfront.net/5391w%2Fpreview%2F73718103%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765744132&Signature=F5qjROOH4lmmJwcr3tLNbiAqbP5o1xRIEeBknaWDncL6oyo0JbgR4VbpOTog51adCa-46mEyHVGXAHXd57thavwqw9PSprcIaNShWm6JRsU7cBo1lPVIgOJUDsW57PmTBVe9zis0NQ15wtxOh8EnMw8TcFtUG8HD25UIesgaOBN7hcCqWtKs81YPzI6cq7jxQO9b4pJooKOAUEjoShTuMdZxzikqb0V4ZIBHQ6DYUfFygveLqO7O4uzK5PkxxelJwEba8rdS-gl8zO3v7XDdVpsSQi-QNIwjhxzesTIfSZA2vF8kJOznIcHV0Le-3Apk7hChtAq7JWUPr75TvIGHKw__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" /></div>
                    <h2 className='educationName'>Primar</h2>
                    <div className='educationLine'></div>
                    <p className='educationDescription'>Oferă mediu prietenos, dezvoltă competențe de bază și emoționale, prin activități interactive și profesori dedicați sprijinind copiii în primii patru ani.</p>
                </div>
                <div className='educationCard educationCard2'>
                    <div className='educationImage'><img src="https://d2fy7spvltzu3v.cloudfront.net/9491w%2Fpreview%2F73718104%2Fmain_large.jpg?response-content-disposition=inline%3Bfilename%3D%22main_large.jpg%22%3B&response-content-type=image%2Fjpeg&Expires=1765744135&Signature=FwkdK5mXLcR0dvrP6kElET9hqFcqZnB5O9RhpYuaDW~RwWhtnDf-G5RR4HdfG9EXU7FiYfAQ5xhyxQBTdAMxVM1AZGfhJj-T0l67rZ11Gm63y9NyUaNhJO1cGw~6JPfsEOB06vUVQgoIqD1C0Nr5EWzQitKvSUNikuEEKz5wdsLat8dVonQ6A8-9HDXSF1t78dSu5twGKPuqoecenu792FKw3QjpFLhYFPJU3aYgYftqryJEiYiHSkNqpKCkRIVj~jzB~mwnLda3cQf0okBZwbu09Y0xsES9Q-5nZH1sCe4Odn6dpWMBlmq1psFp~D55UVhtbP7tvto3pVSegltEpg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ" alt="" /></div>
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